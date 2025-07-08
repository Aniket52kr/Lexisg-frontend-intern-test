import React from "react";

const CitationCard = ({ citation }) => {
    return (
        <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm mt-3">
            <p className="text-sm text-gray-700 italic mb-2">
                “{citation.text}” <span className="text-gray-500">(Para 7 of the document)</span>
            </p>
            
            <a
                href={citation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
            >
                View Source: {citation.source}
            </a>
        </div>
    );
};

export default CitationCard;
