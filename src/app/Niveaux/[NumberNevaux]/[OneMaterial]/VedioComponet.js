"use client";

import React from "react";

const VedioComponet = ({ LinkVedioLessonWhenClick }) => {
  // Hide Menu when Click the Left Mouse
  function HideContextMenu(e) {
    e.preventDefault();
  }
  console.log(LinkVedioLessonWhenClick);

  return (
    <div className="bg-black w-full  aspect-video">
      <video
        // لكي يتم تحديث المكون لانه من طبيعة vdio يقهوم المتصفح بحفضه لذالك نضع
        // نضع Key  لاخبر reatc ان العنصر ليس نفسه ووجب تحديثه
        key={LinkVedioLessonWhenClick}
        onContextMenu={(e) => HideContextMenu(e)}
        controls
        disablepictureinpicture
        controlslist="nodownload"
        className="w-full h-full">
        <source src={LinkVedioLessonWhenClick} type="video/mp4" />
        إذا لم يتم تشغيل الفيديو، قد يكون المتصفح غير مدعوم أو أن الفيديو يحتوي
        على مشكلة في التنسيق. حاول تحديث الصفحة أو استخدام متصفح آخر.
      </video>
    </div>
  );
};

export default VedioComponet;
