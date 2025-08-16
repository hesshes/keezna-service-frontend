import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import rootRouter from "./router/rootRouter";
import { JSX } from "react";

const router = createBrowserRouter(rootRouter);
function App(): JSX.Element {
    return (
        <RouterProvider
            router={router}
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        />
    );
}

export default App;
