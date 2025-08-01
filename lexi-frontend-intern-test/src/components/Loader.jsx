import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div
        className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        aria-label="Loading"
      />
    </div>
  );
};

export default Loader;