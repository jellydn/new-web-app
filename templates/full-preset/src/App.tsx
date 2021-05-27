import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import logo from "./logo.svg";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./App.css";

const queryClient = new QueryClient();

type FormValues = {
  firstName: string;
  lastName: string;
};

function ExampleForm() {
  const { register, handleSubmit, control } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <h3>React-hook-form example</h3>
      <DevTool control={control} placement={"top-left"} />

      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <input {...register("firstName")} />
        <label>Last Name</label>
        <input {...register("lastName")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>

        <ExampleForm />
      </header>
    </div>
  );
}

export default () => (
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
