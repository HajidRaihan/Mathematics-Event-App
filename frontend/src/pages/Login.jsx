const Login = () => {
  return (
    <div className="flex justify-center gap-32 mt-10">
      <div className="h-96 w-64 bg-slate-200 shadow-lg rounded-xl">pamflet</div>
      <div className="h-96 flex flex-col justify-center">
        <p className="text-xl text-primary uppercase font-bold mb-10">Login</p>
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="username"
            className="h-10 rounded-xl bg-white w-[300px] shadow-md p-3"
          />
          <input
            type="password"
            placeholder="password"
            className="h-10 rounded-xl bg-white w-[300px] shadow-md p-3"
          />
          <button className="rounded-xl bg-secondary text-white border-none hover:opacity-70 hover:bg-secondary h-10">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
