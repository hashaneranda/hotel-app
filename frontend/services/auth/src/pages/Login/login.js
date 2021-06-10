import React, { useState, useEffect } from "react";
import { auth$, login } from "@hotel/auth-helper";
import { Button, TextInput } from "@hotel/styleguide";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import Loader from "../../common/components/Loader/loader";
import Layout from "../../common/components/Layout/layout";

// assests
import { loginBackground } from "../../config/images";

// styles
import { Card, Header, Form, ButtonContainer } from "./styles";

export const initialData = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const formData = [
  {
    name: "email",
    label: "Email",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

export default function Login() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (v) => {
      console.log("values", v);
    },
  });

  return (
    <Layout image={loginBackground}>
      <Card>
        <Header>
          <h1>Login</h1>
          <h3>
            Don't have a account?{" "}
            <span
              className="navigate_link"
              onClick={() => history.push("/register")}
            >
              Sign up
            </span>
          </h3>
        </Header>

        <Form onSubmit={formik.handleSubmit}>
          {formData.map((input) => (
            <TextInput
              required
              className="contact__input"
              label={input.label}
              name={input.name}
              type={input.type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[input.name]}
              inputError={formik.errors[input.name]}
            />
          ))}

          <ButtonContainer>
            <Button type="submit" className="submit">
              Login
            </Button>
          </ButtonContainer>
        </Form>
      </Card>
    </Layout>
  );
}
