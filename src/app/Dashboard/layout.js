
import StoreFormAdd from "@/store/StoreFormAdd";

import Sidbar from "./sidbar";

export default function DahLayout({ children }) {

  return (
    <div className="bg-primary">
      <div className="container  m-auto flex justify-end text-end ">
        <div className=" pl-2 md:pl-4  md:pr-4 mt-6 w-full overflow-x-auto ">
          {children}
        </div>
        <Sidbar />
      </div>
    </div>
  );
}
