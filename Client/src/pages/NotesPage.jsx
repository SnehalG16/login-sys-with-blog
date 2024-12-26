import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NotesCard from "../components/NotesCard";

const NotesPage = () => {
  const UserData = JSON.parse(localStorage.getItem("userData"));
  const [notes, setnotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetAllUserNotes = () => {
    if (!UserData || !UserData._id) {
      console.error("User not logged in or invalid data.");
      setLoading(false);
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASEURL}/notes/get/${UserData?._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (Array.isArray(res?.data?.notes)) {
          setnotes(res.data.notes);
        } else {
          console.error("Unexpected response format:", res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err.response || err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    GetAllUserNotes();
  }, []);

  if (loading) {
    return <p>Loading notes...</p>;
  }

  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column flex-md-row">
      <div className="w-100">
        <h1 className="text-3xl font-semibold border-bottom border-gray-500 p-3 mt-5">
          Notes results:
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {notes.length > 0 ? (
            notes.map((el) => (
              <NotesCard
                key={el._id}
                title={el.title}
                body={el.body}
                id={el._id}
                image={el.notesImage}
                GetAllUserNotes={GetAllUserNotes}
                UserId={UserData._id}
              />
            ))
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-500">No notes found for this user.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
