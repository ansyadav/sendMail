import React from 'react';
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
const LoginPageComp = () => {
    const history = useHistory();
    return(
        <div className="login-section">
            <div className="inner-login-section floatcontainer">
                <div className="left-sec">
                    <h2>LogIn</h2>
                    <div className="description">Get access to your Orders, Wishlists and Recommendations.</div>
                </div>
                <div className="right-sec">
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                console.log("Logging in", values); // constants
                                setSubmitting(false);
                                history.push(`/`);
                            }, 500);
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required("Email is required"), //constants
                            password: Yup.string()
                            .required("Password is required") //constants
                        })}
                        >
                        {(props) => {
                            const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            } = props;
                            return (
                            <form
                                onSubmit={handleSubmit}
                                autoComplete="off"
                                className="signup-section_form"
                                aria-label="form">
                                <div className="input-group field">
                                    <input
                                        name="email"
                                        id="email"
                                        type="text"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-label="Enter your email"
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="email" id="email">
                                        Email *
                                    </label>
                                </div>
                                {errors.email && touched.email && (
                                <span style={{ color: "red" }}>{errors.email}</span>
                                )}
                                <div className="input-group field">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-label="Enter your password"
                                    />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label htmlFor="password" id="password">
                                        Password *
                                    </label>
                                </div>
                                {errors.password && touched.password && (
                                <span style={{ color: "red" }}>{errors.password}</span>
                                )}
                                <button
                                type="submit"
                                className="btn--signup"
                                disabled={isSubmitting}
                                name="submit"
                                value="SignUp">Log In</button>
                            </form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default LoginPageComp;