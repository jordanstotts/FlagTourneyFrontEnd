import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
    boot: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    flag: "",
   predictions: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/InsightToNextYear/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const prediction = await response.json();
     if (!prediction) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(prediction);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPrediction = {
    boot: form.boot,
    second: form.second,
    third: form.third,
    fourth: form.fourth,
    fifth: form.fifth,
    flag: form.flag,
    //  name: form.name,
    //  position: form.position,
    //  level: form.level,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPrediction),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/InsightToNextYear");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Prediction</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Boot Winner: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.boot}
           onChange={(e) => updateForm({ boot: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">2nd Place: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.second}
           onChange={(e) => updateForm({ second: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">3rd Place: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.third}
           onChange={(e) => updateForm({ third: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">4th Place: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.fourth}
           onChange={(e) => updateForm({ fourth: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">5th Place: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.fifth}
           onChange={(e) => updateForm({ fifth: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Flag Winner: </label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.flag}
           onChange={(e) => updateForm({ flag: e.target.value })}
         />
       </div>

       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Prediction"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}