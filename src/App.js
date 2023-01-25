import React from "react";
import "./App.css";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Feed from "./Feed.js";
import Login from "./Login.js";
import Widgets from "./Widgets.js";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="AppLoading">
        <div className="AppLoadingContent">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />

          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
