import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
import { fetchData, sendCartData } from "./store/cart-actions";

function App() {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const cart = useSelector((state) => state.cart);

    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        if (initialRender) {
            setInitialRender(false);
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (
        <div className="App">
            {notification && (
                <Notification type={notification.type} message={notification.message} />
            )}
            {isAuth ? <Layout /> : <Auth />}
        </div>
    );
}

export default App;
