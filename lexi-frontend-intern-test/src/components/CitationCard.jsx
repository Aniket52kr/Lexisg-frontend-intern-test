import { FileText } from "lucide-react";

const CitationCard = ({ citation }) => (
    <div className="bg-[#40414f] border border-gray-600 rounded-xl shadow-sm mt-4 p-5 space-y-3">
        <blockquote className="border-l-4 border-green-500 pl-4 text-sm italic text-gray-100">
            “{citation.text}”
        </blockquote>

        <a
            href={citation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-400 hover:underline text-sm font-medium"
        >
            <FileText className="w-4 h-4" />
            View Source: {citation.source}
        </a>
    </div>
);

export default CitationCard;