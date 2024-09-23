import React, { useState } from 'react';

// Single Review Component
const Review = ({ name, review }) => {
    return (
        <div style={styles.reviewCard}>
            <h3>{name}</h3>
            <p>{review}</p>
        </div>
    );
};

// Main Review Section Component
const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && reviewText) {
            const newReview = { name, review: reviewText };
            setReviews([...reviews, newReview]);
            setName('');
            setReviewText('');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Reviews</h2>

            {/* Review Form */}
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <textarea
                    placeholder="Your review"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    style={styles.textarea}
                />
                <button type="submit" style={styles.button}>Submit Review</button>
            </form>

            {/* Display Reviews */}
            <div style={styles.reviewList}>
                {reviews.map((review, index) => (
                    <Review key={index} name={review.name} review={review.review} />
                ))}
            </div>
        </div>
    );
};

// Styling
const styles = {
    container: {
        width: '50%',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #ccc',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },
    input: {
        width: '80%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '80%',
        height: '100px',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
    },
    reviewList: {
        marginTop: '20px',
    },
    reviewCard: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '15px',
        marginBottom: '10px',
    },
};

export default ReviewSection;
