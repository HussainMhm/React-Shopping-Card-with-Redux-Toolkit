import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

function App() {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const cart = useSelector((state) => state.cart);

    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch(
                "https://redux-trial-3b6ba-default-rtdb.firebaseio.com/cartitems.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );
            const data = await response.json();

            if (!initialRender) {
                dispatch(
                    uiActions.showNotification({
                        open: true,
                        message: "Request Sent Successfully!!",
                        type: "success",
                    })
                );
            }

            setInitialRender(false);
        };

        sendRequest().catch((error) => {
            console.log(error);
            // Sending state is unsuccessful
            dispatch(
                uiActions.showNotification({
                    message: "Sent Request to database failed",
                    type: "error",
                    open: true,
                })
            );
        });
    }, [cart]);

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
