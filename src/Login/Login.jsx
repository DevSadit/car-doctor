import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Login = () => {

  const { logInOldUser } = useContext(AuthContext);

  const handleLogin =(e)=>{
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log({password, email});

    // login
    logInOldUser(email, password)
    .then(result=> console.log(result.user))
    .catch(error => console.log(error.message))
  }
  return (
    <div className=" ">
      <div className="flex items-center gap-4 max-w-7xl justify-between flex-col lg:flex-row">
        <div className="">
          <img src={img} />
        </div>

        <div className="shrink-0 w-full max-w-sm border p-10 space-y-7 rounded-lg">
          <h1 className="text-3xl font-semibold text-center ">Login</h1>
          <form onSubmit={handleLogin} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="my-5">
              New to{" "}
              <span className="text-[#ff3811] font-bold">Cars Doctor</span>?{" "}
              <Link to="/register">
                <span className="font-bold text-blue-600">Register Now</span>
              </Link>
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
