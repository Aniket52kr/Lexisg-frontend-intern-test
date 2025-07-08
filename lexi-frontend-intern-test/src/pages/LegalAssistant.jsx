import React, { useState } from "react";
import QueryInput from "../components/QueryInput";
import AnswerCard from "../components/AnswerCard";
import CitationCard from "../components/CitationCard";
import Loader from "../components/Loader";

const LegalAssistant = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [citations, setCitations] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulated API response (from assignment)
        const response = {
            answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
            citations: [
                {
                    text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
                    source: "Dani_Devi_v_Pritam_Singh.pdf",
                    link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
                },
            ],
        };

        // Simulate delay
        setTimeout(() => {
            setAnswer(response.answer);
            setCitations(response.citations);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-start py-6 px-4">
            <div className="max-w-2xl w-full mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Lexi Legal Assistant
                </h1>

                <div className="mb-6">
                    <QueryInput
                        query={query}
                        setQuery={setQuery}
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />
                </div>

                {loading && <Loader />}

                {query && !loading && (
                    <div className="mb-4 bg-white p-4 rounded-lg shadow text-sm text-gray-600">
                        <span className="font-semibold text-gray-800">You asked:</span><br />
                        {query}
                    </div>
                )}

                {answer && <AnswerCard answer={answer} />}

                {citations.length > 0 && (
                    <div className="mt-4 space-y-4">
                        {citations.map((c, index) => (
                            <CitationCard key={index} citation={c} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LegalAssistant;
