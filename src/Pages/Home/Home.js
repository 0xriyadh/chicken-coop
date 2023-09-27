import React, { useEffect, useState } from "react";
import AvailableClasses from "../AvailableClasses/AvailableClasses";
import Footer from "../../Components/Shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import chickenCoopLogo from "../../assets/images/logo.png";

const Home = () => {
    const [gitStars, setGitStars] = useState(0);
    useEffect(() => {
        fetch("https://api.github.com/repos/mahadihassanriyadh/chicken-coop")
            .then((res) => res.json())
            .then((data) => setGitStars(data.stargazers_count));
    }, [])
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <p className="my-4 bg-green-50 text-green-600 py-1.5 rounded">Updated till Fall 2023 ✅</p>
                <img className="mx-auto w-44" src={chickenCoopLogo} alt="" />
                <div className="mb-6 mt-4">
                    <h1 className="text-4xl text-gray-800 font-bold">
                        Chicken Coop!
                    </h1>
                    <a
                        href="https://github.com/mahadihassanriyadh/chicken-coop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="bg-gray-700 text-gray-200 inline-block my-3 px-6 py-2 border-2 border-gray-600 rounded shadow-2xl sm:text-lg hover:bg-white hover:text-gray-600 transition duration-300">
                            <div className="flex items-center space-x-2">
                                <span className="text-xl text-yellow-300">
                                    ★
                                </span>{" "}
                                <span>{gitStars} GitHub Stars</span>
                            </div>
                        </div>
                    </a>

                    <p className="mx-4 mt-2 text-gray-600">
                        You can find all the available classrooms of BRACU at
                        any given time, by selecting the day and time below.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 items-center justify-center mt-5 space-y-2 sm:space-y-0">
                        <div className="flex space-x-2 items-center">
                            <span className="w-5 h-5 border bg-gray-100 inline-block"></span>
                            <p>Regular Classrooms</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <span className="w-5 h-5 border bg-blue-100 inline-block"></span>
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
