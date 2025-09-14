const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Login</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-600"
          />
          <button className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
