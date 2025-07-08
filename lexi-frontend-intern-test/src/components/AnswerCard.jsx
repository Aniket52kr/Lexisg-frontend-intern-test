import React from "react";

const AnswerCard = ({ answer }) => {
  return (
    <div className="bg-[#444654] p-4 rounded-xl shadow-sm mb-3">
        <p className="whitespace-pre-wrap text-gray-100">{answer}</p>
    </div>
  );
};

export default AnswerCard;