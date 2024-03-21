import React from "react";
import { Link } from 'react-router-dom';

export default function HandleNextPage() {
  return (
    <div className="mt-4 w-80 h-12  justify-center items-center font-bold text-white ">
        <Link to="/Sign-Up">
        <button className="bg-blue-500 w-80 h-12 rounded-lg">Get Started</button>
        </Link>
        <Link to="/Login">
      <button className="bg-white-500 w-80 h-12v text-black mt-3 rounded-lg">
        Login
      </button>
      </Link>
    </div>
  );
}
