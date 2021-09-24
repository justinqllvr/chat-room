import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chatroom from "./pages/Chatroom";

function App() {
  const [socket, setSocket] = useState(null);
  const [color, setColor] = useState('')
  const [music, setMusic] = useState('')
  const [userMusic, setUserMusic] = useState([]);


  // console.log(color)
  // console.log(music)

  useEffect(() => {
    const newSocket = io(`https://whispering-chamber-09886.herokuapp.com/`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
      <header>
        {socket ? (
          <Router>
            <Switch>
              <Route path="/chatroom">
                <Chatroom socket={socket} color={color} music={music}/>
              </Route>
              <Route path="/">
                <Login socket={socket} setColor={setColor} music={music} setMusic={setMusic} userMusic={userMusic} setUserMusic={setUserMusic} />
              </Route>
            </Switch>
          </Router>
        ) : (
          <div>Not Connected</div>
        )}
      </header>
  );
}

export default App;
