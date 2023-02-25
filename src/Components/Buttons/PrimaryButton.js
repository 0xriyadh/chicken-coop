import React from "react";

const PrimaryButton = (props) => {
    return (
        <button
            {...props}
            className="mt-4 px-6 py-2 bg-white border border-orange-500 rounded text-orange-500"
        >
            {props?.label}
        </button>
    );
};

export default PrimaryButton;
