import { useEffect, useState } from "react";
import Review from "./Review";

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);

  const getTestimonials = async () => {
    try {
      const res = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials");
      const data = await res.json();
      setReviews(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <>
      <section className="client-reviews">
        <div className="left">
          <h2>Clients are Loving Our App</h2>
        </div>

        <div className="review-container">
          {reviews.map((review, index) => (
            <Review key={index} item={review} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ClientReviews;
