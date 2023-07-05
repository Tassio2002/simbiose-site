import "./styles/style.css";

const Container = ({ children }) => {
  return (
    <div className="flex-container">
      <div className="global-container">{children}</div>
    </div>
  );
};

export default Container;
