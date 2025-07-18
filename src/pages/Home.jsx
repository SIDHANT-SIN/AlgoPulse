import React, { useState, useEffect } from "react";

import axios from "axios";
const platforms = ["Codeforces", "CodeChef", "LeetCode"];

const Home = () => (
  <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
    <div className="max-w-3xl mx-auto text-center px-6 py-20 rounded-3xl bg-white/70 backdrop-blur shadow-2xl">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
          AlgoPulse
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
        Your gateway to coding contests, practice problems, and a thriving
        developer community.
      </p>
      <a
        href="/problems"
        className="inline-block bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition"
      >
        Explore Contests
      </a>
    </div>
  </section>
);

export default Home;
