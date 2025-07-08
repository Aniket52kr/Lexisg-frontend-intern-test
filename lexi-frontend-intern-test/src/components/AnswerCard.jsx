import React from "react";

const AnswerCard = ({ answer }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-xl shadow-sm mb-3">
            <p className="text-gray-800 whitespace-pre-wrap">
                {answer}
            </p>
        </div>
    );
};

export default AnswerCard;