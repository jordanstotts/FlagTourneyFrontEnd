// import { Form, FormGroup, Label, Input, Col } from "reactstrap";
// import { useState } from "react";
// import axios from "axios";

// const CreatePrediction = () => {
//   // const [boot, setBoot] = useState("");
//   // const [second, setSecond] = useState("");
//   // const [third, setThird] = useState("");
//   // const [fourth, setFourth] = useState("");
//   // const [fifth, setFifth] = useState("");
//   // const [flag, setFlag] = useState("");
//   // const [owner, setOwner] = useState("");
//   // const [submitText, setSubmitText] = useState("");

//   // let newPrediction = {
//   //   boot: boot,
//   //   second: second,
//   //   third: third,
//   //   fourth: fourth,
//   //   fifth: fifth,
//   //   flag: flag,
//   //   // owner: localStorage.getItem("User"),
//   // };
//   // console.log(newPrediction);
//   // //   const authorizeURL = {
//   // //     Authorization: ` Bearer ${localStorage.getItem("token")}`,
//   // //   };
//   // //   console.log(authorizeURL);

//   // const postPredictions = "http://localhost:3000/InsightToNextYear";
//   // const handlePredictionSubmit = async (event) => {
//   //   // event.preventDefault()
//   //   setSubmitText("Prediction Submitted. Go to Insight To Next Year to view");
//   //   try {
//   //     await axios({
//   //       method: "post",
//   //       url: postPredictions,
//   //       data: newPrediction,
//   //       //   headers: authorizeURL,
//   //     }).then((res) => console.log(res));
//   //   } catch (error) {}
//   //   setTimeout(() => {
//   //     setSubmitText("");
//   //   }, 4000);
//   // };

//   // if (!localStorage.getItem("token")) {
//   //   return (
//   //     <h1 className="login-message">
//   //       {" "}
//   //       Please go to Home page and login to access Create Trip
//   //     </h1>
//   //   );
// // ================================================================================================
//   const [prediction, setPrediction] = useState({
//     boot: '',
//     second: '',
//     third: '',
//     fourth: '',
//     fifth: '',
//     flag: ''
//   })

//   const handleChange = (e) => {
//     const value = e.target.value
//     setPrediction({
//       ...data,
//       [e.target.name]: value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const predictionData = {
//       boot: data.boot,
//       second: data.second,
//       third: data.third,
//       fourth: data.fourth,
//       fifth: data.fifth,
//       flag: data.flag
//     }
//     axios.post("http://localhost:3000/InsightToNextYear", predictionData).then((response) => {
//       console.log(response.status)
//       console.log(response.data.token)
//     })
//   }

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Label>Let us know your predictions!</Label>
//         <FormGroup row>
//           <Label for="exampleSelect" sm={2}>
//             Boot Winner
//           </Label>
//           <Col sm={10}>
//             <Input
//               id="exampleSelect"
//               name="boot"
//               type="select"
//               value={data.boot}
//               onChange={handleChange}
//               // onChange={(event) => {
//               //   setBoot(event.target.value);
//               // }}
//             >
//               <option> </option>
//               <option>Austin</option>
//               <option>Grant</option>
//               <option>Connor</option>
//               <option>Derrick</option>
//               <option>Jordan</option>
//               <option>Ryan</option>
//             </Input>
//           </Col>
//           <Label for="exampleSelect" sm={2}>
//             2nd
//           </Label>
//           <Col sm={10}>
//             <Input
//               id="exampleSelect"
//               name="second"
//               type="select"
//               value={data.second}
//               onChange={handleChange}
//               // onChange={(event) => {
//               //   setSecond(event.target.value);
//               // }}
//             >
//               <option> </option>
//               <option>Austin</option>
//               <option>Grant</option>
//               <option>Connor</option>
//               <option>Derrick</option>
//               <option>Jordan</option>
//               <option>Ryan</option>
//             </Input>
//           </Col>
//           <Label for="exampleSelect" sm={2}>
//             3rd
//           </Label>
//           <Col sm={10}>
//             <Input
//               id="exampleSelect"
//               name="third"
//               type="select"
//               value={data.third}
//               onChange={handleChange}
//               // onChange={(event) => {
//               //   setThird(event.target.value);
//               // }}
//             >
//               <option> </option>
//               <option>Austin</option>
//               <option>Grant</option>
//               <option>Connor</option>
//               <option>Derrick</option>
//               <option>Jordan</option>
//               <option>Ryan</option>
//             </Input>
//           </Col>
//           <Label for="exampleSelect" sm={2}>
//             4th
//           </Label>
//           <Col sm={10}>
//             <Input
//               id="exampleSelect"
//               name="fourth"
//               type="select"
//               value={data.fourth}
//               onChange={handleChange}
//               // onChange={(event) => {
//               //   setFourth(event.target.value);
//               // }}
//             >
//               <option> </option>
//               <option>Austin</option>
//               <option>Grant</option>
//               <option>Connor</option>
//               <option>Derrick</option>
//               <option>Jordan</option>
//               <option>Ryan</option>
//             </Input>
//           </Col>
//           <Label for="exampleSelect" sm={2}>
//             5th
//           </Label>
//           <Col sm={10}>
//             <Input
//               id="exampleSelect"
//               name="fifth"
//               type="select"
//               value={data.fifth}
//               onChange={handleChange}
//               // onChange={(event) => {
//               //   setFifth(event.target.value);
//               // }}
//             >
//               <option> </option>
//               <option>Austin</option>
//               <option>Grant</option>
//               <option>Connor</option>
//               <option>Derrick</option>
//               <option>Jordan</option>
//               <option>Ryan</option>
//             </Input>
//           </Col>
//           <Label for="exampleSelect" sm={2}>
//             Flag Winner
//           </Label>
//           <Col sm={10}>
//             <Input
//               id="exampleSelect"
//               name="flag"
//               type="select"
//               value={data.flag}
//               onChange={handleChange}
//               // onChange={(event) => {
//               //   setFlag(event.target.value);
//               // }}
//             >
//               <option> </option>
//               <option>Austin</option>
//               <option>Grant</option>
//               <option>Connor</option>
//               <option>Derrick</option>
//               <option>Jordan</option>
//               <option>Ryan</option>
//             </Input>
//           </Col>
//         </FormGroup>
//       </Form>
//       <h3> {submitText} </h3>
//       <button className="submit-trip-button" type="submit">
//         Submit Prediction
//       </button>
//       {/* <button className="submit-trip-button" onClick={handlePredictionSubmit}>
//         Submit Prediction
//       </button> */}
//     </div>
//   );
// };

// export default CreatePrediction;
