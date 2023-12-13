import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
    const isAuth = useSelector((state) => state.auth.isAuth);

    return (
        <div className="App">
            {!isAuth && <Auth />}
            {isAuth && <Layout />}
        </div>
    );
}

export default App;
