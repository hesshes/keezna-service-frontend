import "./App.css";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { JSX } from "react";

function App(): JSX.Element {
    return (
        <RouterProvider
            router={root}
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        />
    );
}

export default App;