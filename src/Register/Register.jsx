import { useContext } from "react";
import img from "../assets/images/login/login.svg";
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({
      name,
      email,
      password,
    });

    // creat user
    creatUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className=" ">
      <div className="flex items-center gap-4 max-w-7xl justify-between flex-col lg:flex-row">
        <div className="">
          <img src={img} />
        </div>

        <div className="shrink-0 w-full max-w-sm border p-10 space-y-7 rounded-lg">
          <h1 className="text-3xl font-semibold text-center ">Sign Up</h1>
          <form onSubmit={handleSignUp} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
