import "./styles/style.css";

const TestimonialCard = ({ title, content }) => {
  return (
    <>
      <div className="testimonialCard">
        <div className="testimonial-card-content">
          <img src={"/quotation-mark.png"} alt="" />
          <span className="title">{title}</span>
          <span className="content">{content}</span>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
