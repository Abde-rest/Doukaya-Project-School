import Video from "next-video";
import React from "react";

// تستطيع ايضا تغير them الخاص بك عبر mui
// https://player.style/
const VedioComponet = ({ LinkVedioLessonWhenClick }) => {
  // Hide Menu when Click the Left Mouse
  // function HideContextMenu(e) {
  //   e.preventDefault();
  // }

  return (
    <div className="bg-black w-full  aspect-video">
      <Video
        // لكي يتم تحديث المكون لانه من طبيعة vdio يقهوم المتصفح بحفضه لذالك نضع
        // نضع Key  لاخبر reatc ان العنصر ليس نفسه ووجب تحديثه
        key={LinkVedioLessonWhenClick}
        src={LinkVedioLessonWhenClick}
        controls
        autoPlay
      />
    </div>
  );
};

export default VedioComponet;
