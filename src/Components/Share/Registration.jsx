import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="flex mb-16 items-start justify-center pt-3 md:pt-6">
      <div className="w-full max-w-lg px-6">
        <div className="mb-4 md:mb-8 flex justify-center gap-6 text-xl md:text-2xl font-semibold">
          <Link
            to="/login"
            className="text-neutral-400 transition-colors hover:text-neutral-900"
          >
            Login
          </Link>
          <Link to="/registration">
            <button className="border-b-2 border-neutral-900 pb-1 text-neutral-900">
              Register
            </button>
          </Link>
        </div>

        <p className="mb-6 text-center text-sm text-neutral-600 md:text-base">
          There are many advantages to creating an account: the payment process
          is faster, shipment tracking is possible and much more.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Username<span className="ml-0.5 text-red-600">*</span>
            </label>
            <input
              className={`w-full mt-2 rounded-md border px-3 py-2 text-sm placeholder-neutral-400 focus:border-green-600 focus:ring-green-600 ${
                errors.username ? "border-red-500" : "border-neutral-300"
              }`}
              placeholder="Enter username"
              {...register("username", { required: true })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Email address<span className="ml-0.5 text-red-600">*</span>
            </label>
            <input
              type="email"
              className={`w-full mt-2 rounded-md border px-3 py-2 text-sm placeholder-neutral-400 focus:border-green-600 focus:ring-green-600 ${
                errors.email ? "border-red-500" : "border-neutral-300"
              }`}
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700">
              Password<span className="ml-0.5 text-red-600">*</span>
            </label>
            <input
              type="password"
              className={`w-full mt-2 rounded-md border px-3 py-2 text-sm placeholder-neutral-400 focus:border-green-600 focus:ring-green-600 ${
                errors.password ? "border-red-500" : "border-neutral-300"
              }`}
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
          </div>

          {/* Radio buttons */}
          <div className="flex gap-4 text-sm text-neutral-700">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="customer"
                defaultChecked
                {...register("role")}
              />
              I am a customer
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="vendor" {...register("role")} />
              I am a vendor
            </label>
          </div>

          <p className="text-sm text-neutral-600">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <Link to="" className="text-blue-600 underline">
              privacy policy
            </Link>
            .
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 py-2 text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
