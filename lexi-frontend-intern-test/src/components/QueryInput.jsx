import React from "react";

const QueryInput = ({ query, setQuery, handleSubmit, loading }) => {
    return (
        <form onSubmit={handleSubmit} className="flex gap-2 items-end">
            <textarea
                className="flex-1 p-3 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#40414f] text-white border border-[#555]"
                placeholder="Ask something legal..."
                rows={2}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button
                type="submit"
                disabled={loading || !query.trim()}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl disabled:opacity-50"
            >
                {loading ? "..." : "Send"}
            </button>
        </form>
    );
};

export default QueryInput;
