import React, { useEffect } from "react";
import { login } from "@hotel/auth-helper";
import { useRegister } from "@hotel/api";
import { Button, TextInput } from "@hotel/styleguide";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import Layout from "../../common/components/Layout/layout";

// assests
import { registerBackground } from "../../config/images";

// styles
import { Card, Header, Form, ButtonContainer } from "./styles";

export const initialData = {
  email: "",
  password: "",
  name: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is Required"),
  password: Yup.string().required("Password is Required"),
  name: Yup.string().required("Name is Required"),
});

const formData = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
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

export default function Register() {
  const history = useHistory();

  // graphql
  const [registerUser, { error, data, loading }] = useRegister();

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (v) => {
      registerUser(v.name, v.email, v.password);
    },
  });

  useEffect(() => {
    if (data) {
      login(data.createUser.token, data.createUser.user);
      history.push("/app");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log({ error });
      errorNoty({ msg: "Something went wrong, please try again!" });
    }
  }, [error]);

  return (
    <Layout image={registerBackground}>
      <Card>
        <Header>
          <h1>Sign Up</h1>
          <h3>
            Already have a account?{" "}
            <span
              className="navigate_link"
              onClick={() => history.push("/login")}
            >
              Log in
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
            <Button type="submit" className="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </ButtonContainer>
        </Form>
      </Card>
    </Layout>
  );
}
