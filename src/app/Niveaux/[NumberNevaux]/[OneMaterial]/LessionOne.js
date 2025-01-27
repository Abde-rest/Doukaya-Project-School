import Image from "next/image";

const LessionOne = ({ title, NumberIndex }) => {
  return (
    <div className="hover:bg-primaryV2/20 cursor-pointer flex items-center justify-end border-b">
      <h1 className="pr-2 py-2 flex-1 text-end ">
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
  );
};

export default LessionOne;
