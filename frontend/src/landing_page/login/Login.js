import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          password,
        }
      );

      console.log(response.data); 

      localStorage.clear();

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
      "username",
      response.data.username || response.data.user?.username
      );
      localStorage.setItem("email", response.data.email);

      console.log(localStorage.getItem("username"));

     alert("Login successful");

     setTimeout(() => {
     window.location.href = "http://localhost:3000";
     }, 1000);
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
              Login
            </h2>

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
              onClick={handleLogin}
            >
              Login
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;