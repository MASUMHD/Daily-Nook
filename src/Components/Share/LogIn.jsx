import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LogIn = () => {
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // TODO: swap for your auth logic
    console.log(data);
    reset();
  };

  return (
    <section className="flex mb-16 items-start justify-center pt-10 md:pt-12">
      <div className="w-full max-w-lg px-6">
        {/* Tabs */}
        <div className="mb-8 flex justify-center gap-6 text-xl md:text-2xl font-semibold">
          <Link to="/login">
            <button className="border-b-2 border-neutral-900 pb-1 text-neutral-900">
              Login
            </button>
          </Link>
          <Link
            to="/registration"
            className="text-neutral-400 transition-colors hover:text-neutral-900"
          >
            Register
          </Link>
        </div>

        <p className="mb-6 text-center text-sm text-neutral-600 md:text-base ">
          If you have an account, sign in with your <br /> username or email address.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="user"
              className="mb-1 block text-sm font-medium text-neutral-700"
            >
              Username or email address
              <span className="ml-0.5 text-red-600">*</span>
            </label>
            <input
              id="user"
              className={`w-full rounded-md border px-3 py-2 text-sm placeholder-neutral-400 focus:border-green-600 focus:ring-green-600 mt-2 ${
                errors.user ? "border-red-500" : "border-neutral-300"
              }`}
              {...register("user")}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="pass"
              className="mb-1 block text-sm font-medium text-neutral-700"
            >
              Password<span className="ml-0.5 text-red-600">*</span>
            </label>
            <input
              id="pass"
              type="password"
              className={`w-full rounded-md border px-3 py-2 text-sm placeholder-neutral-400 focus:border-green-600 focus:ring-green-600 mt-2 ${
                errors.pass ? "border-red-500" : "border-neutral-300"
              }`}
              {...register("pass")}
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="h-4 w-4 rounded border-neutral-300 text-green-600 focus:ring-green-600"
              />
              <span className="select-none text-neutral-700">Remember me</span>
            </label>

            <Link to="" className="text-green-600 hover:text-green-700">
              Lost your password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 py-2 text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
