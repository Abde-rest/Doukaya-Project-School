import Image from "next/image";

const LessionOne = ({ title, NumberIndex, MinutesVedio }) => {
  return (
    <div className=" p-2 hover:bg-[#f7bc4b15]  border-b ">
      {/* Time */}
      {/* <span className="text-[#33445780] pl-2 flex gap-1 items-center">
        <span> {MinutesVedio}</span>
      </span> */}
      <div className=" cursor-pointer flex items-center   w-full">
        <h1 className="pr-2 py-2 flex-1  text-[#04050680]    textEn text-start">
          الدرس {NumberIndex} :
          <span className="text-[#33445780]">
            {" "}
            {title.length > 30 ? title.slice(0, 30) + "..." : title}
          </span>
        </h1>

        <Image
          className="w-8 h-8 "
          src={require("@/public/PageVedioLesson/play.png")}
          alt="IconPlay Click Her to play Vedio"
        />
      </div>
    </div>
  );
};

export default LessionOne;
