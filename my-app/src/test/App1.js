const name = "Legendary Bold";
const word = name.split(" ");
const myStyle = {
  color: "green",
  fontSize: "56px",
};

function getGreeting(name) {
  if (word[0] === "Legendary") {
    return <h1 style={myStyle}>Hello, {name}</h1>;
  }
  return (
    <h1 style={myStyle}>
      {word[0]} {name}!
    </h1>
  );
}

function getGreeting(name) {
  if (name.split("")[0] !== undefined) {
    return <h1 style={myStyle}>Hello, {name}!</h1>;
  }
  return <h1 style={myStyle}>Hello stranger</h1>;
}

const title = <h1>Welcome to {name}'s website</h1>;
<section className="App-header">{getGreeting(name)}</section>;
