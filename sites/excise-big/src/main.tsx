import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Shared spacing for pages copied from the old nancho.net (lives in Nancho's public/).
import "../../../public/legacy.css";

createRoot(document.getElementById("root")!).render(<App />);
