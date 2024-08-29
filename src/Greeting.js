function Greeting({ name }) {
  const sayHi = (msg) => {
    console.log("Hi " + msg);
  };

  const styledObj = { background: "red", color: "white" };

  return (
    <>
      <h1 onClick={() => sayHi(name)}>Hello, {name}!</h1>
      <h3 style={styledObj}>Testing</h3>
    </>
  );
}

export default Greeting;
