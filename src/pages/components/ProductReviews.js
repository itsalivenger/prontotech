import React, { useState } from 'react';
import styles from '../../assets/styles/ReviewComponent.module.css';


const product = {
    name: 'LENOVO P358 Workstation – RYZEN 7 PRO 5845 – 16 GB RAM – 256 SSD – RTX3060 12GB',
    averageRating: 4.5,
    totalRatings: 2,
    ratingsCount: {
        5: 1,
        4: 1,
        3: 0,
        2: 0,
        1: 0
    },
    reviews: [
        { rating: 5, comment: 'Great workstation with excellent performance!' },
        { rating: 4, comment: 'Good value for the price, but could use more storage.' }
    ]
};

const products = {
    name: 'LENOVO P358 Workstation – RYZEN 7 PRO 5845 – 16 GB RAM – 256 SSD – RTX3060 12GB',
    averageRating: 0,
    totalRatings: 0,
    ratingsCount: {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    },
    reviews: []
};
const ReviewComponent = () => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRatingClick = (ratingValue) => {
        setRating(ratingValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        setSuccess(true);
    };

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.ratingSummary}>
                <div className={styles.ratingValue}>{product.averageRating} <span className={styles.star}>★</span></div>
                <div>{product.totalRatings} Ratings</div>
                {product.reviews.length === 0 ? (
                    <div>There are no reviews yet.</div>
                ) : (
                    <div className={styles.reviewList}>
                        {product.reviews.map((review, index) => (
                            <div key={index} className={styles.reviewItem}>
                                <div className={styles.reviewRating}>{review.rating}
                                    &nbsp;{Array(review.rating).fill(<span className={styles.star}>★</span>)}
                                </div>
                                <div>{review.comment}</div>
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.ratingBars}>
                    {[5, 4, 3, 2, 1].map(star => (
                        <div key={star} className={styles.ratingBar}>
                            <span>{star} ★</span>
                            <div className={styles.bar}>
                                <div className={styles.filledBar} style={{ width: `${(product.ratingsCount[star] / product.totalRatings) * 100}%` }}></div>
                            </div>
                            <span>{product.ratingsCount[star]}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.reviewForm}>
                {product.reviews.length === 0 && (
                    <h2>Be the first to review “{product.name}”</h2>
                )}
                <form onSubmit={handleSubmit}>
                    {[1, 2, 3, 4, 5].map(star => (
                        <span
                            key={star}
                            className={`${styles.rateStar} ${rating >= star ? styles.selected : ''}`}
                            onClick={() => handleRatingClick(star)}
                            style={{ cursor: 'pointer' }}
                        >
                            ★
                        </span>
                    ))}

                    <div className={styles.reviewText}>
                        <label htmlFor="review">Votre avis *</label>
                        <textarea
                            id="review"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            required
                        />
                    </div>
                    {success && <div className={styles.successMessage}>Succès !</div>}
                    <button type="submit" className={styles.submitButton}>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewComponent;
