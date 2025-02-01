import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-red-600">
            <h1 className="text-9xl font-bold">404</h1>

            <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
            <p className="text-lg text-red-500 mt-2">
                The page you're looking for doesn't exist or was removed.
            </p>

            {/* Back to Home Button */}
            <Link
                to="/"
                className="mt-8 px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-md shadow-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default PageNotFound;
