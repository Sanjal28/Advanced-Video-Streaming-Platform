import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message:
            generateRandomMessages(5) +
            " " +
            generateRandomMessages(7) +
            " " +
            generateRandomMessages(9),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="w-[500px] h-[500px] m-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-gray-200"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sanjal",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="w-96 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 py-1 ml-4 bg-slate-400 rounded-lg">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;

// web socket =>ui and server hand shaked(2 way sharing)
// api polling =>api calls after certain time interval
