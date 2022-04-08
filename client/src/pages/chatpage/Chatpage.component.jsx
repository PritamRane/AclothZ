import "./app.scss";
import io from "socket.io-client";
import { useState } from "react";
import Chat from './../../components/chat/Chat.component';

const socket = io.connect("http://localhost:3001");

function ChatPage() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="chatApp">

      {!showChat ? (
        <div className="joinChatContainer">
          <h3>ACLOTHZ CHAT</h3>
          <input
            type="text"
            placeholder="User Name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
      <div className="Suggestion">
        <h3>Suggestions : </h3>
        <ul>
  <li>Shirts</li>
  <li>Hats</li>
  <li>Sneakers</li>
  <li>Mens Wear</li>
  <li>Womens Wear</li>
</ul>
         </div>
    </div>
  );
}

export default ChatPage;
