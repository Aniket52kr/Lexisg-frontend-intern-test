import React from "react";

const PdfViewerModal = ({ isOpen, onClose, link }) => {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white w-[80%] h-[80%] rounded-xl overflow-hidden shadow-xl">
                <button
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
                    onClick={onClose}
                >  
                    Close
                </button>
                
                <iframe
                    src={link}
                    title="PDF Viewer"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default PdfViewerModal;