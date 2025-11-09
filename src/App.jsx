import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height);
      const weightInKg = parseFloat(weight);
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setMessage("Underweight 😔");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setMessage("Normal 😊");
      else if (bmiValue >= 25 && bmiValue < 29.9) setMessage("Overweight 😐");
      else setMessage("Obese 😟");
    } else {
      setBmi(null);
      setMessage("Please enter valid height and weight!");
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg rounded-4">
        <h2 className="text-center mb-4 text-primary">BMI Calculator</h2>

        <div className="form-group mb-3">
          <label>Height (in meters)</label>
          <input
            type="number"
            className="form-control"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in meters"
          />
        </div>

        <div className="form-group mb-3">
          <label>Weight (in kilograms)</label>
          <input
            type="number"
            className="form-control"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kilograms"
          />
        </div>

        <div className="text-center">
          <button className="btn btn-success me-2" onClick={calculateBMI}>
            Calculate
          </button>
          <button className="btn btn-secondary" onClick={resetForm}>
            Reset
          </button>
        </div>

        {bmi !== null && (
          <div className="alert alert-info mt-4 text-center">
            <h4>Your BMI: {bmi}</h4>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
