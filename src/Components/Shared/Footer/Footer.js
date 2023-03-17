import React from "react";
import gitHubLogo from "../../../assets/logos/github.svg";

const Footer = () => {
    return (
        <footer class="p-4 bg-gray-50 rounded shadow md:flex md:items-center md:justify-between md:p-6 mt-60">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a
                    href="https://github.com/mahadihassanriyadh"
                    class="hover:underline"
                >
                    Md. Mahadi Hassan Riyadh
                </a>{" "}
                &{" "}
                <a
                    href="https://www.facebook.com/tanzim.rahman.545"
                    class="hover:underline"
                >
                    Tanzim Rahman Sabib
                </a>
                <a
                    href="https://github.com/mahadihassanriyadh/chicken-coop/blob/main/LICENSE"
                    class="hover:underline"
                >
                    :: {" "}MIT license
                </a>
            </span>
            <ul class="flex flex-wrap items-center justify-center md:justify-end mt-3 text-sm text-gray-500 dark:text-gray-400 md:mt-0">
                <li>
                    <a
                        href="https://github.com/mahadihassanriyadh/chicken-coop"
                        class="mr-4 md:mr-6 flex items-center"
                    >
                        <span className="text-xl">★</span>{" "}
                        <img className="w-8 ml-2" src={gitHubLogo} alt="" />
                    </a>
                </li>
                {/* <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">
                        Licensing
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline">
                        Contact
                    </a>
                </li> */}
            </ul>
        </footer>
    );
};

export default Footer;
