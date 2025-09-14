import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-6xl font-bold text-rose-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">
        Oops! The page you're looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
