import React, { useState } from "react";
import QueryInput from "../components/QueryInput";
import AnswerCard from "../components/AnswerCard";
import CitationCard from "../components/CitationCard";
import Loader from "../components/Loader";
import { fetchLegalAnswer } from "../utils/mockApi";

const LegalAssistant = () => {
    const [query, setQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [citations, setCitations] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setAnswer(null);
        setCitations([]);
        setSubmittedQuery(query);
        setQuery("");

        try {
            const response = await fetchLegalAnswer(query);
            setAnswer(response.answer);
            setCitations(response.citations);
        } catch (error) {
            console.error("Error fetching answer:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-[#343541] text-white">
            {/* Header */}
            <header className="bg-[#40414f] p-4 text-center shadow-sm border-b border-[#2e2f3a]">
                <h1 className="text-lg font-semibold">Lexi Legal Assistant</h1>
            </header>

            {/* Message Area */}
            <main className="flex-1 overflow-y-auto py-6">
                <div className="max-w-3xl w-full mx-auto px-4">
                    {submittedQuery && (
                        <div className="mb-4 text-sm">
                            <div className="bg-[#40414f] p-4 rounded-lg shadow-sm">
                                <span className="font-medium text-gray-100">You:</span><br />
                                {submittedQuery}
                            </div>
                        </div>
                    )}

                    {loading && <Loader />}

                    {answer && (
                        <div className="mb-4">
                            <AnswerCard answer={answer} />
                        </div>
                    )}

                    {citations.length > 0 && (
                        <div className="space-y-4">
                            {citations.map((citation, index) => (
                                <CitationCard key={index} citation={citation} />
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Bottom Input Bar */}
            <footer className="bg-[#343541] border-t border-[#2e2f3a] p-4 fixed bottom-0 left-0 right-0">
                <div className="max-w-3xl w-full mx-auto px-4">
                    <QueryInput
                        query={query}
                        setQuery={setQuery}
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />
                </div>
            </footer>
        </div>
    );
};

export default LegalAssistant;
