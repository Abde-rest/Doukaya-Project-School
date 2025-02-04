"use client";
import { useState } from "react";
import {
  materialList,
  NevauxlList,
  ChapterList,
} from "../courses/componet/listFilter";
import CloseIocnFormAdd from "./CloseIocnFormAdd";
import StoreFormAdd from "@/store/StoreFormAdd";
import { useNotifecation } from "@/store/storeNotifaction";

// نصيحة : يجب فصل كل جزئية على حدا فمثلا في input title or user or chapter ...
// بحيث عندما تتغير الحالة في احدهم لا اتأثر على الاخرين
// ضع الحالة المتشركة في stroe => AllDataLesson
// وعندها عندما يحدث rendring يجدث فقط في المكون الذي  تتغير البيانات فيه
// الحقل الذي نريد الاضافة  فيه
const FormAdd = ({ nameFunc }) => {
  let { setIsOpen } = StoreFormAdd();
  let { IsSucOrLoseorNote, setIsSucOrLoseorNote } = useNotifecation();
  console.log({ ...IsSucOrLoseorNote });

  // All Date Lesson add
  let [AllDataLesson, setDateLesson] = useState({
    nameLesson: null,
    YeraLesson: null,
    ChapterLesson: null,
    MaterialLesson: null,
    DescriptionLesson: null,
    VedioLesson: null,
    ExerciceLesson: null,
  });
  let [Loding, SetLoding] = useState(false);
  console.log(AllDataLesson);
  // let [PreviewURL, setPreviewURL] = useState();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      // يتم إنشاء رابط مؤقت (object URL) للملف باستخدام الدالة URL.createObjectURL. هذا الرابط يُستخدم لاحقًا لعرض معاينة الفيديو قبل رفعه.
      //  باش ديرو في vedio Tag للتاكد
      // setPreviewURL(URL.createObjectURL(file));
      setDateLesson({ ...AllDataLesson, VedioLesson: file });
    } else {
      // state Notification
      setIsSucOrLoseorNote({
        // #9ae077 green
        // #FFC46A yellow
        // #FF7F7D red
        BgColor: "bg-red-400",
        TextNotifeaction: "!! يرجى رفع ملف فيديو فقط",
        Show: true,
      });
      console.log(file);
    }
  };

  async function SendDateLessonToDateBase() {
    if (
      AllDataLesson.nameLesson &&
      AllDataLesson.ChapterLesson &&
      AllDataLesson.MaterialLesson &&
      AllDataLesson.VedioLesson &&
      AllDataLesson.YeraLesson
    ) {
      // Uplode vedio to cloudinary
      SetLoding(true);
      const formData = new FormData();
      formData.append("file", AllDataLesson.VedioLesson);

      formData.append("upload_preset", "UplodeVedio_Dokaya"); // استبدل بـ Upload Preset الفعلي

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dkfhcfk3j/video/upload",
          {
            method: "POST",
            body: formData,
            // لا تحتاج إلى تحديد Content-Type
            // إذا قمت بتحديد Content-Type: multipart/form-data بنفسك، فسيؤدي ذلك إلى كسر الطلب لأنه لن يحتوي على boundary المطلوب بواسطة Cloudinary لمعالجة البيانات المرسلة
            // دعه فارغًا ليتم تعيينه تلقائيًا بواسطة المتصفح
            // headers: {
            //   "Content-Type": "multipart/form-data",
            // },
          }
        );
        const data = await response.json();

        // req To Date Base ||  api router

        try {
          let res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/AddLessonAndUplodeVedio`,
            {
              method: "POST",
              body: JSON.stringify({
                ...AllDataLesson,
                VedioLesson: data.secure_url,
              }),
              // لا تحتاج إلى تحديد Content-Type
              // إذا قمت بتحديد Content-Type: multipart/form-data بنفسك، فسيؤدي ذلك إلى كسر الطلب لأنه لن يحتوي على boundary المطلوب بواسطة Cloudinary لمعالجة البيانات المرسلة
              // دعه فارغًا ليتم تعيينه تلقائيًا بواسطة المتصفح
              // headers: {
              //   "Content-Type": "multipart/form-data",
              // },
            }
          );
          if (!res.ok) {
            return;
          }
          const addLessone = await res.json();
          console.log("Add lesson succ and dadate is Get  : ");
          console.log(addLessone.dataLessonFomApi);
          // Notinfiction Succ
          setIsSucOrLoseorNote({
            // #9ae077 green
            // #FFC46A yellow
            // #FF7F7D red
            BgColor: "bg-green-400",
            TextNotifeaction: "تم رفع  الدرس الى قاعدة البيانات بنجاح ",
            Show: true,
          });
        } catch (error) {
          setIsSucOrLoseorNote({
            // #9ae077 green
            // #FFC46A yellow
            // #FF7F7D red
            BgColor: "bg-red-400",
            TextNotifeaction: "حدث خطاء ما في رفع الدرس الى قاعدة البيانات ",
            Show: true,
          });
          console.log("Ther is poblem form page add lesson fecth 2" + error);
          // Notinfiction False
        }
      } catch (error) {
        setIsSucOrLoseorNote({
          // #9ae077 green
          // #FFC46A yellow
          // #FF7F7D red
          BgColor: "bg-red-400",
          TextNotifeaction: "حدث خطاء ما في رفع الفيديو الى السحابة ",
          Show: true,
        });
        console.error("حدث خطأ أثناء الرفع", error.message);
      } finally {
        setIsOpen(false);
      }

      // Get link vedio add in state date lesson
      // Set date to api route
    } else {
      setIsSucOrLoseorNote({
        // #9ae077 green
        // #FFC46A yellow
        // #FF7F7D red
        BgColor: "bg-red-400",
        TextNotifeaction: "يرجى ملء بيانات الدرس  بعناية",
        Show: true,
      });
    }
    // const formData = new FormData();
    // formData.append("nameLesson", AllDataLes son.nameLesson);
    // formData.append("YeraLesson", AllDataLesson.YeraLesson);
    // formData.append("ChapterLesson", AllDataLesson.ChapterLesson);
    // formData.append("MaterialLesson", AllDataLesson.MaterialLesson);
    // formData.append("DescriptionLesson", AllDataLesson.DescriptionLesson);
    // formData.append("VedioLesson", AllDataLesson.VedioLesson);
    // // formData.append("ExerciceLesson" , AllDataLesson.ExerciceLesson)
    // formData.append("VedioLesson", AllDataLesson.VedioLesson);
    // if (
    //   formData.get("nameLesson") &&
    //   formData.get("YeraLesson") &&
    //   formData.get("ChapterLesson") &&
    //   formData.get("MaterialLesson") &&
    //   formData.get("VedioLesson")
    // ) {
    //   let res = await fetch(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/api/AddLessonAndUplodeVedio`,
    //     {
    //       method: "POST",
    //       body: formData,
    //       headers:{
    //         "Content-Type": "multipart/form-data",
    //       }
    //     }
    //   );
    //   if (res.ok) {
    //     console.log("Respnes form Front page add lessone");
    //     // console.log(res.body);
    //   } else {
    //     console.log("Respnes form Front page add lessone Not Ok  ");
    //   }
    // } else {
    //   alert("Date add lesson Not found ");
    // }
  }

  return (
    <div
      className={` flex items-center top-1/2 justify-center -translate-y-1/2  relative`}>
      <div className=" min-w-52 min-h-52 flex justify-center items-center sm:w-fit px-6 py-4 bg-white rounded-lg shadow-lg  md:h-fit ">
        {Loding ? (
          <div className="text-center ">
            <div>
              <div class="loader"></div>
              <p className="text-center m-auto">
                جارى رفع الدرس الى قاعدة البيانات
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between">
              <CloseIocnFormAdd />
              <div className=" mb-6 text-end">
                {nameFunc === "addLessone" ? (
                  <h2 class="text-xl  ">أضافة درس </h2>
                ) : (
                  <h2 class="text-xl  ">أضافة مستخدم </h2>
                )}
                <p class="text-sm mt-2 text-black/80  ">
                  يرجى ملء الحقول بعناية
                </p>
              </div>
            </div>
            <form className="flex items-center justify-between md:flex-row flex-col-reverse  gap-4 ">
              {/* Uplode  */}
              {nameFunc === "addLessone" && (
                <div className=" w-full md:min-w-48 m-auto  flex items-center justify-center flex-col">
                  {/* Uplodae Vedio  */}
                  <div className="w-full">
                    <label
                      for="Title"
                      className="text-sm font-medium text-gray-600 mb-2 block text-end">
                      أرفع الفيديو
                    </label>
                    <div className=" cursor-pointer border-2 flex items-center justify-center  m-auto  rounded-md border-gray-600  p-2 text-sm">
                      <input
                        type="file"
                        className="w-full h-full"
                        onChange={
                          (e) => handleFileChange(e)
                          // setDateLesson({
                          //   ...AllDataLesson,
                          //   VedioLesson: e.target.files[0],
                          // })
                        }
                      />
                      <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M3 12C3 9.79086 4.79086 8 7 8C7.26483 8 7.52364 8.02574 7.77408 8.07484"
                          stroke="#333333"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 8C8.81364 5.65123 11.3744 4 14 4C17.3137 4 20 6.68629 20 10L20 12"
                          stroke="#333333"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 11L12 19"
                          stroke="#333333"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 11L15 13.5"
                          stroke="#333333"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 11L9 13.5"
                          stroke="#333333"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Uplodae Exexrci */}
                  <div className="mt-2 w-full">
                    <label
                      for="Title"
                      className="text-sm font-medium text-gray-600 mt-2 mb-2 block text-end">
                      أرفع تمارينات
                    </label>

                    <div className="cursor-pointer border-2 flex items-center justify-center  m-auto  rounded-md border-gray-600   p-2 text-sm">
                      {/* <input type="file" /> */}
                      <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 21L12 13M12 13L14.5 15.5M12 13L9.5 15.5"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Information  */}
              <div className="w-full sm:min-w-96">
                {/* عنوان  */}
                <div className=" text-end mb-4">
                  {nameFunc === "addLessone" ? (
                    <div>
                      <label
                        for="Title"
                        className="text-sm font-medium text-gray-600 mb-2 block">
                        عنوان الدرس
                      </label>
                      <input
                        id="Title"
                        className="w-full p-2 border border-gray-300 rounded-lg  mb-1"
                        type="text"
                        dir="rtl"
                        onChange={(e) =>
                          setDateLesson({
                            ...AllDataLesson,
                            nameLesson: e.target.value,
                          })
                        }
                      />
                    </div>
                  ) : (
                    <div>
                      <label
                        for="Title"
                        className="text-sm font-medium text-gray-600 mb-2 block">
                        اسم المستخدم
                      </label>
                      <input
                        id="Title"
                        className="w-full p-2 border border-gray-300 rounded-lg  mb-1"
                        type="text"
                        dir="rtl"
                      />
                    </div>
                  )}

                  {nameFunc === "addLessone" ? null : (
                    <div>
                      {/* Info User Email and password  */}
                      <div>
                        {" "}
                        <label
                          for="email"
                          className="text-sm font-medium text-gray-600 mb-2 block">
                          الأيميل
                        </label>
                        <input
                          id="email"
                          className="w-full p-2 border border-gray-300 rounded-lg mb-1"
                          type="email"
                          dir="rtl"
                        />
                      </div>
                      <div>
                        {" "}
                        <label
                          for="password"
                          className="text-sm font-medium text-gray-600 mb-2 block">
                          كلمة السر
                        </label>
                        <input
                          id="password"
                          className="w-full p-2 border border-gray-300 rounded-lg mb-1"
                          type="password"
                          dir="rtl"
                        />
                      </div>
                    </div>
                  )}
                </div>
                {/* <!-- Info lesson  --> */}
                {nameFunc === "addLessone" ? (
                  <div>
                    <div class="flex justify-between mb-4 gap-2 ">
                      {/* المادة */}
                      <div class="flex-1 ml-2">
                        <label
                          for="material"
                          className="text-sm font-medium text-gray-600  text-end ">
                          المادة
                        </label>
                        <select
                          id="material"
                          onChange={(e) =>
                            setDateLesson({
                              ...AllDataLesson,
                              MaterialLesson: e.target.value,
                            })
                          }
                          className="w-full cursor-pointer p-2 border border-gray-300 rounded-lg  text-end ">
                          <option hidden>أختر مادة</option>
                          {materialList.map((item, index) => {
                            return (
                              <option
                                className="px-2 w-24"
                                key={index}
                                value={item.nameEn}>
                                {item.nameAr}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      {/* chapter  */}
                      <div class="flex-1 mr-2">
                        <label
                          for="Chapter"
                          class="text-sm font-medium text-gray-600  text-end ">
                          الفصل
                        </label>
                        <select
                          id="Chapter"
                          onChange={(e) =>
                            setDateLesson({
                              ...AllDataLesson,
                              ChapterLesson: e.target.value,
                            })
                          }
                          className="w-full cursor-pointer p-2 border border-gray-300 rounded-lg  text-end ">
                          <option hidden>أختر فصل </option>
                          {ChapterList.map((item, index) => {
                            return (
                              <option
                                className="px-2 w-24"
                                key={index}
                                value={item.nameEn}>
                                {item.nameAr}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      {/* سنة  */}
                      <div class="flex-1 mr-2">
                        <label
                          for="Years"
                          className="text-sm font-medium text-gray-600  text-end ">
                          السنة
                        </label>
                        <select
                          id="Years"
                          onChange={(e) =>
                            setDateLesson({
                              ...AllDataLesson,
                              YeraLesson: e.target.value,
                            })
                          }
                          className="w-full cursor-pointer p-2 border border-gray-300 rounded-lg  text-end ">
                          <option hidden>أختر سنة</option>
                          {NevauxlList.map((item, index) => {
                            return (
                              <option
                                className="px-2 w-24"
                                key={index}
                                value={item.nameEn}>
                                {item.nameAr}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <textarea
                      dir="rtl"
                      onChange={(e) =>
                        setDateLesson({
                          ...AllDataLesson,
                          DescriptionLesson: e.target.value,
                        })
                      }
                      className="w-full border-2 outline-none rounded-md border-gray-600  h-32 p-2 text-sm"
                      placeholder="اضافة وصف للدرس (غير مطلوب )"></textarea>
                  </div>
                ) : (
                  <div>
                    <div
                      for="Title"
                      className="text-sm font-medium text-gray-600 mb-2 block">
                      الدور
                    </div>
                    <div className="flex items-center justify-around">
                      <div className="flex items-center gap-1 justify-end">
                        {" "}
                        <label
                          for="Title"
                          className="text-sm font-medium text-gray-600 mb-2 block">
                          مستخدم
                        </label>
                        <input
                          type="radio"
                          value={"user"}
                          // checked={selectedRole === "admin"}
                          // onChange={handleChange}
                        />
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        {" "}
                        <label
                          for="Title"
                          className="text-sm font-medium text-gray-600 mb-2 block">
                          مسؤول
                        </label>
                        <input type="radio" value={"admin"} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* <!-- Search Button --> */}
            </form>
            <button
              // disabled={Btndisbled}
              onClick={() => SendDateLessonToDateBase()}
              type="submit"
              className={`w-full py-2 
       
                bg-indigo-500 hover
            mt-2  text-white rounded-lg text-md font-medium`}>
              اضافة
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormAdd;
