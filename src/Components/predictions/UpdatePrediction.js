import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UpdatePrediction = (props) => {
  const [updatePrediction, setUpdatePrediction] = useState({
    boot: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    flag: "",
  });

  const componentDidMount = () => {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:8082/api/predictions/" + props.match.params.id)
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        setUpdatePrediction({
          boot: res.data.boot,
          second: res.data.second,
          third: res.data.third,
          fourth: res.data.fourth,
          fifth: res.data.fifth,
          flag: res.data.flag,
        });
      })
      .catch((err) => {
        console.log("Error from UpdatePrediction");
      });
  };

  const onChange = (e) => {
    setUpdatePrediction({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      boot: updatePrediction.boot,
      second: updatePrediction.second,
      third: updatePrediction.third,
      fourth: updatePrediction.fourth,
      fifth: updatePrediction.fifth,
      flag: updatePrediction.flag,
    };

    axios
      .put(
        "http://localhost:8082/api/predictions/" + props.match.params.id,
        data
      )
      .then((res) => {
        props.history.push("/show-prediction/" + props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdatePrediction!");
      });
  };

  const render = () => {
    return (
      <div className="UpdatePrediction">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link
                to="/InsightToNextYear"
                className="btn btn-outline-warning float-left"
              >
                Show Prediction List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Prediction</h1>
              <p className="lead text-center">Update Predictions Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Boot Winner</label>
                <input
                  type="text"
                  placeholder="Boot Winner"
                  name="boot"
                  className="form-control"
                  value={updatePrediction.boot}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="isbn">2nd Place</label>
                <input
                  type="text"
                  placeholder="2nd Place"
                  name="second"
                  className="form-control"
                  value={updatePrediction.second}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">3rd Place</label>
                <input
                  type="text"
                  placeholder="3rd Place"
                  name="third"
                  className="form-control"
                  value={updatePrediction.third}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">4th Place</label>
                <input
                  type="text"
                  placeholder="4th Place"
                  name="fourth"
                  className="form-control"
                  value={updatePrediction.fourth}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="published_date">5th Place</label>
                <input
                  type="text"
                  placeholder="5th Place"
                  name="fifth"
                  className="form-control"
                  value={updatePrediction.fifth}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Flag Winner</label>
                <input
                  type="text"
                  placeholder="Flag Winner"
                  name="flag"
                  className="form-control"
                  value={updatePrediction.flag}
                  onChange={onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Prediction
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default UpdatePrediction;
