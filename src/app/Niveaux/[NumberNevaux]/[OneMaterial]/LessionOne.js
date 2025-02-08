import Image from "next/image";

const LessionOne = ({ title, NumberIndex }) => {
  return (
    <div className=" flex items-center justify-between p-2 hover:bg-[#f7bc4b15]  border-b ">
      {/* Time */}
      <span className="text-[#33445780]">6:40</span>
      <div className=" cursor-pointer flex items-center justify-end  w-full   ">
        <h1 className="pr-2 py-2 flex-1 text-end text-[#33445780] ">
          الدرس {NumberIndex} : {title}
        </h1>
        <div>
          <Image
            className="w-8 h-8 "
            src={require("@/public/PageVedioLesson/VedioPlay.png")}
            alt="IconPlay Click Her to play Vedio"
          />
        </div>
      </div>
    </div>
  );
};

export default LessionOne;
