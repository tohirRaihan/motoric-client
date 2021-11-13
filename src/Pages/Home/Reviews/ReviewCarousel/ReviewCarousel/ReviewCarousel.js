import React, { useState, useEffect, useCallback } from 'react';
import {
    PrevButton,
    NextButton
} from '../ReviewCarouselButtons/ReviewCarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import './ReviewCarousel.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-rating';

const ReviewCarousel = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        slidesToScroll: 1,
        skipSnaps: false
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on('select', onSelect);
        onSelect();
    }, [embla, onSelect]);

    return (
        <Container>
            <div className="embla">
                <div className="embla__viewport" ref={viewportRef}>
                    <div className="embla__container">
                        {slides.map((index) => (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__inner">
                                    <div className="card embla__slide__main px-5">
                                        <figure class="text-center">
                                            <FontAwesomeIcon
                                                className="review-quote-icon text-muted h1"
                                                icon={faQuoteRight}
                                            />
                                            <blockquote class="blockquote">
                                                <p>
                                                    A well-known quote,
                                                    contained in a blockquote
                                                    element.
                                                </p>

                                                <Rating
                                                    className="text-warning"
                                                    initialRating={3}
                                                    readonly
                                                    emptySymbol={
                                                        <FontAwesomeIcon
                                                            icon={farStar}
                                                        />
                                                    }
                                                    fullSymbol={
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                        />
                                                    }
                                                />
                                            </blockquote>

                                            <figcaption class="blockquote-footer">
                                                Someone famous in{' '}
                                                <cite title="Source Title">
                                                    Source Title
                                                </cite>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
        </Container>
    );
};

export default ReviewCarousel;
