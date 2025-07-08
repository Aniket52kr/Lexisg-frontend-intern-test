import React from "react";

const PdfViewerModal = ({ isOpen, onClose, link }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white w-[80%] h-[80%] rounded-xl overflow-hidden shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    aria-label="Close PDF Viewer"
                >
                    Close
                </button>
                <iframe
                    src={link}
                    title="PDF Viewer"
                    className="w-full h-full border-none"
                />
            </div>
        </div>
    );
};

export default PdfViewerModal;