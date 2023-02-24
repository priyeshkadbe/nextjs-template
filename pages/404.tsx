import Link from "next/link";
import React, { useState } from "react";
import { randomNumberText } from "../utils/utils";
import { useEffect } from "react";

function Page404() {
  const [num404, setNum404] = useState("0000");

  useEffect(() => {
    randomNumberText("404", setNum404);
  }, []);

  return (
    <>
      {num404 !== "0000" && (
        <div className="min-h-screen w-full flex items-center  md:justify-center flex-col bg-[#0F1425] ">
          <h1 className="text-5xl md:text-7xl text-white font-monospace font-bold opacity-100">{`{ error: ${num404} }`}</h1>
          <p className="text-gray-300 text-xl mt-4 md:mt-8 flex items-center flex-col gap-y-4 md:flex-row">
            Sorry, looks like that page is missing!&nbsp;&nbsp;
            <Link href="/">
              <span className="w-full sm:w-auto flex-shrink border  text-base px-4 py-1 rounded-xl  hover:text-white transition-colors cursor-pointer">
                Return Home
              </span>
            </Link>
          </p>
        </div>
      )}
    </>
  );
}

export default Page404;
