import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOptions from "./InputOptions.js";
import Post from "./Post.js";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => setPosts(snapshot.docs)
    );
  }, [setPosts]);

  const sendPost = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: "FullStack SWE",
      message: input,
      photoURL: user.photoURL,
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feedInput-Container">
        <div className="feed-input">
          <Avatar src={user.photoURL} />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a Post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed-inputOptons">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions Icon={YouTubeIcon} title="Video" color="green" />
          <InputOptions Icon={BusinessCenterIcon} title="Jobs" color="purple" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="orange"
          />
        </div>
      </div>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          name={post?.data().name}
          description={post?.data().description}
          message={post?.data().message}
          photoURL={post?.data().photoURL}
          timestamp={post?.data().timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
