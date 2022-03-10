import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    boot: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    flag: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPrediction = { ...form };

    await fetch("http://localhost:5000/InsightToNextYear/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrediction),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      boot: "",
      second: "",
      third: "",
      fourth: "",
      fifth: "",
      flag: "",
    });
    //    setForm({ boot: e.target.value, second: e.target.value, third: e.target.value, fourth: e.target.value, fifth: e.target.value, flag: e.target.value });
    navigate("/InsightToNextYear");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Prediction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Boot</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ boot: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">2nd Place</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ second: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">3rd Place</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ third: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">4th Place</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ fourth: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">5th Place</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ fifth: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Flag Winner</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ flag: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create prediction"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
