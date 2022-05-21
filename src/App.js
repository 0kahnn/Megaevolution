import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Views/Auth/Auth";
import { routes } from "./routes";
import Faq from "./Views/Faq/Faq";
import Chat from "./Views/Chat/Chat";
import Report from "./Views/Report/Report";
import AddReport from "./Views/Report/AddReport";
import ViewReport from "./Views/Report/ViewReport";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/report/add" element={<AddReport />}></Route>
        <Route path="/report/view" element={<ViewReport />}></Route>

        {/* {routes.map((el, i) => {
          console.log(el.component);
          return (
            <Route key={i} exact path={el.path} element={<el.component />} />
          );
        })} */}

        {/* Redirect unmatch route */}
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
