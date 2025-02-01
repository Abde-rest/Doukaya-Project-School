import {
  materialList,
  NevauxlList,
  ChapterList,
} from "../courses/componet/listFilter";
import CloseIocnFormAdd from "./CloseIocnFormAdd";
// الحقل الذي نريد الاضافة  فيه
const FormAdd = ({ nameFunc }) => {
  return (
    <div
      className={` flex items-center top-1/2 justify-center -translate-y-1/2  relative`}>
      <div className=" w-full sm:w-fit px-6 py-4 bg-white rounded-lg shadow-lg h-4/5 md:h-fit overflow-y-auto ">
        <div className="flex items-center justify-between">
          <CloseIocnFormAdd />
          <div className=" mb-6 text-end">
            {nameFunc === "addLessone" ? (
              <h2 class="text-xl  ">أضافة درس </h2>
            ) : (
              <h2 class="text-xl  ">أضافة مستخدم </h2>
            )}
            <p class="text-sm mt-2 text-black/80  ">يرجى ملء الحقول بعناية</p>
          </div>
        </div>
        <form className="flex items-center justify-between md:flex-row flex-col-reverse  gap-4 ">
          {/* Uplode  */}
          {nameFunc === "addLessone" && (
            <div className=" w-full md:min-w-48 m-auto  flex items-center justify-center flex-col">
              {" "}
              {/* Uplodae Vedio  */}
              <div className="w-full">
                <label
                  for="Title"
                  className="text-sm font-medium text-gray-600 mb-2 block text-end">
                  أرفع الفيديو
                </label>
                <div className=" cursor-pointer border-2 flex items-center justify-center  m-auto  rounded-md border-gray-600  p-2 text-sm">
                  {/* <input type="file" /> */}
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
                <label
                  for="Title"
                  className="text-sm font-medium text-gray-600 mb-2 block">
                  عنوان الدرس
                </label>
              ) : (
                <label
                  for="Title"
                  className="text-sm font-medium text-gray-600 mb-2 block">
                  اسم المستخدم
                </label>
              )}
              <input
                id="Title"
                className="w-full p-2 border border-gray-300 rounded-lg  mb-1"
                type="text"
                dir="rtl"
              />
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
                      class="text-sm font-medium text-gray-600  text-end ">
                      المادة
                    </label>
                    <select
                      id="material"
                      class="w-full cursor-pointer p-2 border border-gray-300 rounded-lg  text-end ">
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
                      class="w-full cursor-pointer p-2 border border-gray-300 rounded-lg  text-end ">
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
                      class="text-sm font-medium text-gray-600  text-end ">
                      السنة
                    </label>
                    <select
                      id="Years"
                      class="w-full cursor-pointer p-2 border border-gray-300 rounded-lg  text-end ">
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
          type="submit"
          class="w-full py-2 bg-indigo-500 mt-2 hover:bg-indigo-800 text-white rounded-lg text-md font-medium">
          اضافة
        </button>
      </div>
    </div>
  );
};

export default FormAdd;
