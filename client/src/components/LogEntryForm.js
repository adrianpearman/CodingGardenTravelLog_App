import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createLogEntry } from "../util/api";

const LogEntryForm = ({ latitude, longitude, onClose }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit = async data => {
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
    <form className="entryForm" onSubmit={handleSubmit(onSubmit)}>
      {error ? <h3 className="error">{error}</h3> : null}
      <label htmlFor="apiKey">APIKEY</label>
      <input name="apiKey" type="password" required ref={register} />
      <label htmlFor="title">Title</label>
      <input name="title" required ref={register} />
      <label htmlFor="comments">Comments</label>
      <textarea name="comments" row={3} ref={register}></textarea>
      <label htmlFor="description">Description</label>
      <textarea name="description" row={3} ref={register}></textarea>
      <label htmlFor="image">Image</label>
      <input name="image" ref={register} />
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" required ref={register} />
      <button disabled={loading}>
        {loading ? "Loading..." : "Create Log Entry"}
      </button>
    </form>
  );
};

export default LogEntryForm;
