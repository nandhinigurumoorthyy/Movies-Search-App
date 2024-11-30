import React from "react";

const Load = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-6">
      <div className="flex gap-5">
        <div className="animate-spin rounded-lg h-10 w-10 bg-sky-800"></div>
        <div className="animate-spin h-10 w-10 bg-sky-800 rounded-lg"></div>
        <div className="animate-spin h-10 w-10 bg-sky-800 rounded-lg"></div>
      </div>
      <div className="text-3xl font-semibold font-mono">Loading</div>
    </div>
  );
};

export default Load;
