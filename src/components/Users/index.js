import React, { useEffect, useState } from "react";
import RoomName from "../RoomName";
import "./style.css";

function Users({ socket, userColorClass, setUserColorClass, color }) {
  const [users, setUsers] = useState([]);

 

  useEffect(() => {
  // console.log(color)
  if (color === "color1") {
    setUserColorClass([...userColorClass, "orange"]);
  } else if (color === "color2") {
    setUserColorClass([...userColorClass, "violet"]);
  } else {
    setUserColorClass([...userColorClass, "blue"]);
  }

    

    const userListener = (user) => {
      setUsers((prevUsers) => {
        return [...prevUsers, user];
      });
    };

    const usersListener = (users) => {
      setUsers(users);
    };

    const deleteUserListener = (usr) => {
      setUsers((prevUsers) => {
        if (usr) {
          return prevUsers.filter((user) => user.id !== usr.id);
        }
      });
    };

    const updateUsernameListener = (usr) => {
      setUsers((prevUsers) => {
        if (usr) {
          return prevUsers.map((user) => (user.id === usr.id ? usr : user));
        }
      });
    };

    socket.emit("getUsers");
    socket.on("users", usersListener);
    socket.on("userDisconnection", deleteUserListener);
    socket.on("updateUsername", updateUsernameListener);
    socket.on("userConnection", userListener);
  }, [socket]);



  return (
    <div className="users-container">
      <RoomName online={users.length} />
      <div className="users-container__users">
        {users &&
          [...Object.values(users)].map((user) => (
            <div key={user.id}>
              <div className="users-name__container">
                <div className={socket.id === user.id ? userColorClass : "user-name__color"}>{user.color}</div>
                <div className="user-name">{user.name.substring(0, 25)}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Users;
