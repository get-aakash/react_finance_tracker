import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomInput } from "./CustomInput";

export const PassResetForm = () => {
  const [formDt, setFormDt] = useState({});
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setError("");
      value.length < 6 &&
        setError("Pasword should contain at least 6 characters");

      !/[0-9]/.test(value) && setError("At least one number is required.");
      !/[a-z]/.test(value) && setError("At least one lower case is required.");
      !/[A-Z]/.test(value) && setError("At least one upper is required.");
    }

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = formDt;

    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match.");
    }
    console.log(rest);

    // get the data from the local storage
    const userStr = localStorage.getItem("users");
    if (userStr) {
      // parse the jason data to object
      let users = JSON.parse(userStr);

      if (users.length) {
        // check if there is any user who has the same email
        const userExist = users.find((item) => item.email === rest.email);

        if (userExist?.email) {
          // loop through the array and update the password, it should create the new array then

          const temUsers = users.map((item) => {
            if (item.email === rest.email) {
              item.password = rest.password;
            }

            return item;
          });
          // store taht array to the LocalStorage and show the message saying you may login now.

          localStorage.setItem("users", JSON.stringify(temUsers));
          toast.success("New password has been updated, you may login now");

          return;
        }
      }
    }

    toast.error("User not found or invalid request");
    // window.location.href = "/";
  };

  return (
    <div className="border p-3 py-4 rounded shadow-lg">
      <h3 className="text-center">Reset your password!</h3>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          onChange={handleOnChange}
          label="Email *"
          name="email"
          placeholder="sma@email.com"
          required={true}
        />
        <CustomInput
          autoComplete="new-password"
          onChange={handleOnChange}
          label="New Password *"
          name="password"
          type="password"
          placeholder="********"
          required={true}
        />
        <CustomInput
          onChange={handleOnChange}
          label="Confirm Password *"
          name="confirmPassword"
          type="password"
          placeholder="********"
          required={true}
        />
        <Form.Text>
          Pasword should contain at least 6 characters, one upper case, one
          lower case and a number!
          {error && (
            <ul>
              <li className="text-danger fw-bolder ">{error}</li>
            </ul>
          )}
        </Form.Text>
        <div className="d-grid py-3">
          <Button type="submit" variant="outline-danger" disabled={error}>
            Reset Password
          </Button>
        </div>
      </Form>
    </div>
  );
};
