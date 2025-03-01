import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [domaine, setDomain] = useState("");
  const [number, setNumber] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login clicked! (Implement authentication logic)");
  };

  return (
    <div className="navtxt flex items-center justify-center min-h-screen pt-30 pb-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-transparent backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-md"
      >
        <h1 className="text-4xl font-extrabold text-blue-900 text-center">
          Register
        </h1>

        <form onSubmit={handleLogin} className="mt-6">
        <div className="mb-3">
            <label className="block text-blue-900 text-lg font-medium">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-1.5 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your Full Name"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-blue-900 text-lg font-medium">
              Name of Company
            </label>
            <input
              type="text"
              className="w-full p-1.5 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-blue-900 text-lg font-medium">
              Domaine of Activity
            </label>
            <input
              type="text"
              className="w-full p-1.5 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your Company Name"
              value={domaine}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-blue-900 text-lg font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-1.5 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your Company Name"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-blue-900 text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full p-1.5 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-blue-900 text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full p-1.5 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-blue-900 text-lg font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full p-1.5 mt-1 border border-blue-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-900 text-lg"
              placeholder="Enter your password"
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-40 bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-950 transition duration-300"
              >
                Register
              </button>
            </div>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
          Already Have An Account?{" "}
            <Link
              to="/signin"
              className="text-blue-800 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};


export default Signup;
