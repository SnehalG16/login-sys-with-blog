import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Notes from "./pages/Notes";
import NotesDetails from "./pages/NotesDetails";
// import SignIn from "./pages/Login";
// import SignUp from "./pages/Singup";
// import Homepage from "./pages/Homepage";
// import Notespage from "./pages/Notespage"
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/getallnotes" element={<Notes />}></Route>
      <Route path="/getsinglenote/:notesId" element={<NotesDetails />}></Route>
    </Routes>
  );
};

export default Allroutes;
