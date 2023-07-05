import "./styles/style.css";

const Container = ({ children }) => {
  return (
    <div className="body-container">
      <div className="flex-container">{children}</div>
    </div>
  );
};

export default Container;
