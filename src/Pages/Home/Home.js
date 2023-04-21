import React from "react";
import AvailableClasses from "../AvailableClasses/AvailableClasses";
import Footer from "../../Components/Shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import chickenCoopLogo from "../../assets/images/logo.png";

const Home = () => {
    return (
        <div>
            <img className="mx-auto w-44" src={chickenCoopLogo} alt="" />
            <div className="mb-6 mt-4">
                <h1 className="text-4xl text-gray-800 font-bold">
                    Chicken Coop!
                </h1>
                <p className="mx-4 mt-2 text-gray-600">
                    You can find all the available classrooms of BRACU at any
                    given time, by selecting the day and time below.
                </p>
            </div>
            <AvailableClasses />
            <Footer />
            <Analytics mode={"production"} />
        </div>
    );
};

export default Home;
