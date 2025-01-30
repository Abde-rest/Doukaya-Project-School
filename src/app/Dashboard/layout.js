import Sidbar from "./sidbar";

export default function DahLayout({ children }) {
  return (
    <div className="bg-primary overflow-hidden">
      <div className="container  m-auto flex justify-end text-end ">
        <div className=" pl-2 md:pl-4 pr-2 md:pr-4 mt-6 flex-1 overflow-x-auto">
          {children}
        </div>
        <Sidbar />
      </div>
    </div>
  );
}
