import React from "react";
import AvailableClasses from "../AvailableClasses/AvailableClasses";
import Footer from "../../Components/Shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import chickenCoopLogo from "../../assets/images/logo.png";

const Home = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                {/* <img className="mx-auto w-44" src={chickenCoopLogo} alt="" />
                <div className="mb-6 mt-4">
                    <h1 className="text-4xl text-gray-800 font-bold">
                        Chicken Coop!
                    </h1>
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
                <AvailableClasses /> */}
            </div>
            <Footer />
            <Analytics mode={"production"} />
        </div>
    );
};

export default Home;
