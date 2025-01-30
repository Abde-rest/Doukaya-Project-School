import React from "react";

const SkeltoneBox = () => {
  return (
    <div
      role="status"
      class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
      <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700"></div>
    </div>
  );
};

export default SkeltoneBox;
