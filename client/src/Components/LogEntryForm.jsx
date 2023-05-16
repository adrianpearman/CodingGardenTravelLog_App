// NPM Modules
import React, { useState } from "react";
// Util Functions
import { createLogEntry } from "../utils/api";

const LogEntryForm = ({ latitude, longitude, onClose }) => {
  // State
  const [comments, setComments] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [privateKey, setPrivateKey] = useState("");
  const [title, setTitle] = useState("");
  const [visitDate, setVisitDate] = useState("");

  // Functions
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      comments: comments,
      description: description,
      privateKey: privateKey,
      title: title,
      visitDate: visitDate,
    };

    try {
      setLoading(true);
      await createLogEntry({ ...data, latitude, longitude });
      onClose();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form className="entryForm" onSubmit={onSubmit}>
      {error ? <h3 className="error">{error}</h3> : null}
      <div>
        <label htmlFor="apiKey">APIKEY</label>
        <input
          name="apiKey"
          onChange={(e) => setPrivateKey(e.target.value)}
          required
          type="password"
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          row={3}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          row={3}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="visitDate">Visit Date</label>
        <input
          name="visitDate"
          onChange={(e) => setVisitDate(e.target.value)}
          required
          type="date"
        />
      </div>
      <button disabled={loading}>
        {loading ? "Loading..." : "Create Log Entry"}
      </button>
    </form>
  );
};

export default LogEntryForm;
