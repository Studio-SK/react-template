import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App/App";

import "./main.css";

// eslint-disable-next-line prettier/prettier
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
