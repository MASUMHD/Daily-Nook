import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorAnimation from "../../../public/error.json"; 
export default function FourOhFour() {
  const [size, setSize] = useState(() => window.innerWidth < 768 ? 260 : 400);

  useEffect(() => {
    const onResize = () => {
      setSize(window.innerWidth < 768 ? 260 : window.innerWidth < 1280 ? 340 : 460);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Lottie
        animationData={errorAnimation}
        style={{ width: size, height: size }}
        loop
      />

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-white mt-6">
        404
      </h1>
      <p className="mt-2 md:mt-3 text-lg md:text-xl text-center text-slate-600 dark:text-slate-300 max-w-md">
        Oops! The page you’re looking for doesn’t exist or was moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 font-semibold bg-[#FCD34D] text-slate-900 hover:bg-amber-300 active:scale-95 transition-transform shadow-lg dark:bg-amber-500 dark:hover:bg-amber-400"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
