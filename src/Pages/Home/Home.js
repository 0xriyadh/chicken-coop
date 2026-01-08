import React, { useEffect, useState } from "react";
import AvailableClasses from "../AvailableClasses/AvailableClasses";
import Footer from "../../Components/Shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import chickenCoopLogo from "../../assets/images/logo.png";
import InstallPWAButton from "../../Components/Buttons/InstallPWAButton";
import ToggleTheme from "../../Components/Buttons/ToogleTheme";

const Home = () => {
  const [gitStars, setGitStars] = useState(0);
  useEffect(() => {
    fetch("https://api.github.com/repos/mahadihassanriyadh/chicken-coop")
      .then((res) => res.json())
      .then((data) => setGitStars(data.stargazers_count));
  }, []);
  return (
      <div className="flex flex-col h-screen justify-between">
          <div>
              <div className="my-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 py-3 px-4 rounded dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-600">
                  <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="font-semibold">⚠️ This project has been archived</p>
                  </div>
                  <p className="mt-1 text-sm">This project is no longer actively maintained. It is kept for historical reference only.</p>
              </div>
              <p className="my-4 bg-green-100 text-green-600 py-1.5 rounded dark:text-green-300 dark:bg-green-800">
                  Updated till Spring 2025 ✅
              </p>
              <img className="mx-auto w-44" src={chickenCoopLogo} alt="" />
              <div className="mb-6 mt-4">
                  <h1 className="text-4xl text-gray-800 font-bold dark:text-gray-50">
                      Chicken Coop!
                  </h1>
                  <div className="flex items-center justify-center space-x-4">
                      <a
                          href="https://github.com/mahadihassanriyadh/chicken-coop"
                          target="_blank"
                          rel="noreferrer"
                          className="bg-gray-700 text-gray-200 inline-block my-3 px-6 py-2 rounded shadow-2xl sm:text-lg transition duration-300 hover:bg-gray-800"
                      >
                          <div className="flex items-center space-x-2">
                              <span className="text-xl text-yellow-300">★</span>{" "}
                              <span>{gitStars} GitHub Stars</span>
                          </div>
                      </a>
                      <InstallPWAButton />
                      <ToggleTheme />
                  </div>

                  <p className="mx-4 mt-2 text-gray-600 dark:text-gray-400">
                      You can find all the available classrooms of BRACU at any
                      given time, by selecting the day and time below.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:space-x-6 items-center justify-center mt-5 space-y-2 sm:space-y-0">
                      <div className="flex space-x-2 items-center">
                          <span className="w-5 h-5 border bg-gray-100 inline-block rounded dark:bg-gray-700 dark:border-gray-600"></span>
                          <p>Regular Classrooms</p>
                      </div>
                      <div className="flex space-x-2 items-center -ml-7 sm:-ml-0">
                          <span className="w-5 h-5 border bg-blue-100 inline-block rounded dark:bg-blue-800/30 dark:border-blue-600/30"></span>
                          <p>Lab Classrooms</p>
                      </div>
                  </div>
              </div>
              <AvailableClasses />
          </div>
          <Footer />
          <Analytics mode={"production"} />
      </div>
  );
};

export default Home;
