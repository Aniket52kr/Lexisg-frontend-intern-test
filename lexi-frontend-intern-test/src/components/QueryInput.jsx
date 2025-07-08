import React from "react";

const QueryInput = ({query, setQuery, handleSubmit, loading}) => {
    return (
        <div className="w-full p-4 border-t border-gray-300 bg-white">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <textarea
                    className="flex-1 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ask a legal question..."
                    rows={2}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button 
                    type="submit"
                    disabled = {loading || !query.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl disabled:opacity-50" 
                >
                {loading ? "Loading..." : "submit"}
                </button>
            </form>
        </div>
    );
};

export default QueryInput;