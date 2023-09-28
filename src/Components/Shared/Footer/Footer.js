import React from "react";
import gitHubLogo from "../../../assets/logos/github.svg";

const Footer = () => {
    return (
        <footer class="p-4 bg-gray-50 rounded shadow md:flex md:items-center md:justify-between md:p-6 mt-10 text-gray-600">
            <span></span>
            <span class="text-sm sm:text-center">
                <a
                    href="https://github.com/mahadihassanriyadh/chicken-coop#contributors"
                    class="hover:underline"
                >
                    Contributors
                </a>{" "}
                ::
                <a
                    href="https://github.com/mahadihassanriyadh/chicken-coop/blob/main/LICENSE"
                    class="hover:underline"
                >
                    {" "}
                    MIT license
                </a>
            </span>
            <ul class="flex flex-wrap items-center justify-center md:justify-end mt-3 text-sm text-gray-500 md:mt-0">
                <li>
                    <a
                        href="https://github.com/mahadihassanriyadh/chicken-coop"
                        class="mr-4 md:mr-6 flex items-center"
                    >
                        <span className="text-xl">★</span>{" "}
                        <img className="w-8 ml-2" src={gitHubLogo} alt="" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
