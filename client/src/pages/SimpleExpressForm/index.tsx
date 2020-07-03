import React, { useState } from "react";
import jwt from "jsonwebtoken";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
}

const App = () => {
  const { register, handleSubmit, errors } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      // Obviously wouldn't do this in proper app
      const token = jwt.sign("fakeidfordemo", "secret123");
      // For now hard code our prod endpoint
      const url = "https://boilerplate-server-101.herokuapp.com/contact-form";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ post: data })
      });
    } catch (e) {
      console.error("Error fetching API", e);
    }

    console.info("no errors, user details posting...");
  };

  return (
    <div className="App">
      <p>TODO - nice form ui!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register} /> {/* register an input */}
        <input
          name="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}
        <input name="message" ref={register} />
        {errors.message && "Please enter a message."}
        <input type="checkbox" name="newsletter" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
