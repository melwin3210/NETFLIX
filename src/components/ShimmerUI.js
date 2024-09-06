import React from "react";
import Header from "./Header";

const ShimmerUI = () => {
  return (
    <div className=" bg-gradient-to-b from-black">
        <Header />
      <div class="flex space-x-2 justify-center items-center  h-screen dark:invert">
        <span class="sr-only">Loading...</span>
        <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div class="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div class="h-8 w-8 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default ShimmerUI;
