import React, { useState } from "react";
import axios from "axios";

function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      const response = await axios.post(
        "http://localhost:3002/signup",
        {
          username,
          email,
          password,
        }
      );

      alert(response.data.message);

      window.location.href = "http://localhost:3000/login";

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

    <div className="container">

      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >

        <div className="col-4">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Signup
            </h2>

            <input
              type="text"
              placeholder="Enter Username"
              className="form-control mb-3"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="btn btn-primary w-100"
              onClick={handleSignup}
            >
              Signup
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Signup;