import React, { useEffect } from "react";
import { useFormik } from "formik";
import "./loginform.css";
import { basicSchema } from "../../schemas";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/AlertContext";
import { useTheme } from "../../context/ThemeContext";

const LoginForm = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const { theme } = useTheme();

  const onSubmitDemo = (values) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("onsubmit triggered");
    submit("/api/submit", values);
    // actions.resetForm();
  };

  const {
    handleBlur,
    errors,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    values,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    // onSubmit,
    onSubmit: (values, actions) => {
      submit("/api/submit", values);
      actions.resetForm();
      console.log("onSubmit triggered");
    },
  });

  useEffect(() => {
    if (response) {
      //calling onOpen for the only time here
      onOpen(response.type, response.message);
    }
  }, [response]);

  return (
    <div className="basicform mt-3 mb-3">
      <form onSubmit={handleSubmit} autoComplete="off">
        <fieldset>
          <h3 className="mb-4">Üye ol</h3>

          <div className="Field">
            <label htmlFor="email ">
              Email <sup>*</sup>
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              id="email"
              type="email"
              placeholder="Enter your e-mail"
            />
            {errors.email && touched.email ? (
              <p className="FieldError">{errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="Field">
            <label htmlFor="name">Name</label>
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              name="name"
              id="name"
              type="name"
              placeholder="Enter your name"
            />
            {errors.name && touched.name ? (
              <p className="FieldError">{errors.name}</p>
            ) : (
              ""
            )}
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            {errors.password && touched.password ? (
              <p className="FieldError">{errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="Field">
            <label htmlFor="confirmPassword">
              Confirm Password <sup>*</sup>
            </label>
            <input
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="FieldError">{errors.confirmPassword}</p>
            ) : (
              ""
            )}
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
