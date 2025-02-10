"use client";
import Video from "next-video";

// تستطيع ايضا تغير them الخاص بك عبر mui
// https://player.style/
const VedioComponet = ({ DataLesson, FisrtVedio }) => {
  // Hide Menu when Click the Left Mouse
  // function HideContextMenu(e) {
  //   e.preventDefault()
  // }
  return (
    <div className="  w-full ">
      <div className="bg-black/10">
        <Video
          // لكي يتم تحديث المكون لانه من طبيعة vdio يقهوم المتصفح بحفضه لذالك نضع
          // نضع Key  لاخبر reatc ان العنصر ليس نفسه ووجب تحديثه
          src={DataLesson ? DataLesson.link : FisrtVedio}
          controls
          autoPlay
        />
      </div>
      <div className=" mt-7 bg-[#F4F4F5] rounded-md flex items-center justify-around">
        <div className="text-end pt-2 px-2 pb-2 flex-1 bg-[#dcdcff] ">
          <h1 className="text-center font-semibold py-1 bg-inherit "> الوصف</h1>
        </div>
        <div className="text-end pt-2 px-2 pb-2  flex-1 hover:bg-black/5 cursor-pointer">
          <h1 className="text-center font-semibold py-1 ">تمارينات </h1>
        </div>
      </div>
      {/* Content  */}
      <div className="text-end mt-2 mb-3 lg:pr-14">
        <h2 className="text-xl mt-8 font-bold mb-4">
          عنوان الدرس :
          <span className="mx-1">
            {DataLesson ? DataLesson.title : FisrtVedio.title}
          </span>
        </h2>
        <p className="text-[#33445799] leading-relaxed">
          {DataLesson ? DataLesson.description : FisrtVedio.description}
        </p>
      </div>

      {/* Pdf Eexercice  */}
    </div>
  );
};

export default VedioComponet;
