const SimpleMessage = ({ count = 0 }) => {
  return (
    <div id="message-box" style={{ margin: "100px" }}>
      <p>{count}</p>
      <p>{count < 10000 ? "Keep Going!" : "Yeah!"}</p>
    </div>
  );
};

export default SimpleMessage;
