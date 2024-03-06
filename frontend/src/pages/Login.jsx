import { useState } from "react";
import { RequestApi } from "../helper/RequestApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const response = await RequestApi("POST", `login`, data, {}, "Mencoba Login");

    console.log(data);
  };
  return (
    <div className="flex justify-center gap-32 mt-10">
      <div className="h-96 flex flex-col justify-center">
        <p className="text-xl text-primary uppercase font-bold mb-10">Login</p>
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="username"
            className="h-10 rounded-xl bg-white w-[300px] shadow-md p-3"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            className="h-10 rounded-xl bg-white w-[300px] shadow-md p-3"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className="rounded-xl bg-secondary text-white border-none hover:opacity-70 hover:bg-secondary h-10"
            onClick={loginHandler}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
