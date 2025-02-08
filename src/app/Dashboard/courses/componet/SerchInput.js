"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import React from "react";
import { useDebouncedCallback } from "use-debounce";

const SerchInput = () => {
  let SearchParams = useSearchParams();
  let { replace } = useRouter();
  let pathname = usePathname();

  let Handlinput = useDebouncedCallback((value) => {
    let params = new URLSearchParams(SearchParams);
    if (value) {
      params.set("Search", value);
    } else {
      params.delete("Search");
    }
    // بديل لمكتبة use

    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="أبحث عن عنوان درس"
        onChange={(e) => Handlinput(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full pr-9"
        defaultValue={SearchParams.get("Search")?.toString()}
      />
      {/* icons Serach  */}
      <svg
        className="absolute top-1/2 -translate-y-1/2 right-3"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_15_152)">
          <rect width="24" height="24" fill="white" />
          <circle
            cx="10.5"
            cy="10.5"
            r="6.5"
            stroke="#000000"
            stroke-linejoin="round"
          />
          <path
            d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
            fill="#000000"
          />
        </g>
        <defs>
          <clipPath id="clip0_15_152">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default SerchInput;
