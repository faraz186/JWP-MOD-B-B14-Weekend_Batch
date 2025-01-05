import { useState } from "react";
import bulbOn from "./assets/bulbOn.jfif";
import bulbOff from "./assets/bulbOff.jfif";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const [bulb, setBulb] = useState(false);

  const [username, usernameFunc] = useState("faraz");

  let [counter, setCounter] = useState(0);

  const Inc = () => {
    setCounter(++counter);
  };

  const Dec = () => {
    setCounter(counter <= 0 ? 0 : --counter);
  };

  const updateName = () => {
    usernameFunc("Muhammad Faraz");
  };

  console.log(state);

  let username = "faraz";

  const changeName = () => {
    username = "Muhammad Faraz";
    document.getElementById("heading").innerHTML = username;
  };

  // useState() // react hook

  const [isloggedIn, setIsLoggedIn] = useState(false);

  const Toggle = () => {
    setIsLoggedIn(!isloggedIn);
  };

  return (
    <>
      {bulb === true ? (
        <img src={bulbOn} width={250} height={280} alt="" />
      ) : (
        <img src={bulbOff} width={250} height={280} alt="" />
      )}

      <button
        onClick={() => {
          setBulb(!bulb);
        }}
      >
        {bulb === true ? "Bulb oFF" : "BULB ON"}
      </button>

      <button
        onClick={() => {
          setBulb(true);
        }}
      >
        ON
      </button>
      <button
        onClick={() => {
          setBulb(false);
        }}
      >
        OFF
      </button>

      {isloggedIn ? (
        <>
          <h1>Welcome User!!</h1>
          <h2>Dashboard Screen</h2>
          <h3>Status: Client</h3>
        </>
      ) : (
        <h1>Not logged in</h1>
      )}

      <button
        onClick={() => {
          setIsLoggedIn(!isloggedIn);
        }}
      >
        {isloggedIn ? "logOut" : "Login"}
      </button>

      {isloggedIn ? <Login toggleFunc={Toggle} /> : <Signup toggleFunc={Toggle}/>}

      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>

      {/* <img src={bulbOn} width={250} height={280} alt="" />

      <img src={bulbOff} width={250} height={280} alt="" /> */}


      {/* Counter APP */}
      

      <h1>{counter}</h1>

      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Dec</button>



      <h1>{username}</h1>

      <button onClick={updateName}>Change</button>

      <h1 id="heading">{username}</h1>

      <button onClick={changeName}>Change Value</button>

      <input
        onChange={(event) => {
          console.log(event.target.value);
        }}
        type="text"
        placeholder="Enter name"
      />

      <br />
      <br />

      <button>Submit</button>
    </>
  );
};

export default App;
