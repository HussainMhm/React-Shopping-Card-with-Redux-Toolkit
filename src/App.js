import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
    const isAuth = useSelector((state) => state.auth.isAuth);

    const cartItems = useSelector((state) => state.cart.items);

    return <div className="App">{isAuth ? <Layout /> : <Auth />}</div>;
}

export default App;
