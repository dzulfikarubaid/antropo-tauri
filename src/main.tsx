
import ReactDOM  from "react-dom/client";
import App from "./App";
import Cam from "./Cam";
import Result from "./Result";
import "./styles.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
         <Route path="camera" element={<Cam/>} />
         <Route path="result" element={<Result/>}></Route>
      </Routes>
    </BrowserRouter>
);
