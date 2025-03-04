import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login clicked! (Implement authentication logic)");
  };

  return (
    <div className="navtxt flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-transparent backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md"
      >
        <h1 className="text-4xl font-extrabold text-blue-900 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-6">
            <label className="block text-blue-900 text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-blue-900 text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link
              to="/forget-password"
              className="text-blue-800 font-semibold hover:underline mt-3 ml-2 inline-block"
            >
              Forget Password?
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-40 bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-950 transition duration-300"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <p>
        <Link
              to="/dashboard"
              className="text-blue-800 font-semibold hover:underline"
            >
              dashboard
            </Link>
        </p>
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            New Here?{" "}
            <Link
              to="/signup"
              className="text-blue-800 font-semibold hover:underline"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
