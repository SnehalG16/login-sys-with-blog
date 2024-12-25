import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";

const Notes = () => {
  // Notes fetched by user
  const [notesdata, setNotesdata] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getNotes = () => {
    const userinfo = JSON.parse(localStorage.getItem("userData")) || null;

    if (!userinfo || !userinfo._id) {
      setErrorMessage("User not logged in or user ID is missing.");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASEURL}notes/getallnotes/${userinfo._id}`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setNotesdata(res.data.allUserNotes);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
        setErrorMessage("Failed to fetch notes. Please try again later.");
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <h2>Notes result:</h2>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}

      <div className="d-flex flex-wrap gap-4">
        {notesdata.length > 0 ? (
          notesdata.map((el) => (
            <PostCard
              key={el.id}
              title={el.title}
              image={el.noteSImage}
              discription={el.body}
              postId={el.id}
            />
          ))
        ) : !errorMessage ? (
          <h2>No notes found.</h2>
        ) : null}
      </div>
    </div>
  );
};

export default Notes;
