import { useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import { useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signUpUsingEmailPassword = (
        name,
        email,
        password,
        location,
        history
    ) => {
        // return createUserWithEmailAndPassword(auth, email, password);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/home';
                history.replace(destination);
                setAuthError('');
                alert('Registration Successful!');

                // save user to the database
                saveUserToDatabase(name, email, 'POST');

                // const user = userCredential.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                // sent name to firebase for update name
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {})
                    .catch((error) => {});
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const logInUsingEmailPassword = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/home';
                history.replace(destination);
                setAuthError('');
                // const user = userCredential.user;
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserToDatabase(user.displayName, user.email, 'PUT');
                setAuthError('');
                const destination = location.state?.from || '/home';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observe whether user auth state change or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    // check if current user is admin or not
    useEffect(() => {
        fetch(`https://motoric.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);

    // save userinfo to database
    const saveUserToDatabase = (displayName, email, method) => {
        const user = { displayName, email };
        fetch('https://motoric.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then();
    };

    return {
        signInUsingGoogle,
        signUpUsingEmailPassword,
        logInUsingEmailPassword,
        logOut,
        user,
        admin,
        authError,
        isLoading
    };
};

export default useFirebase;
