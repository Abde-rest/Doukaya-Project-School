import React from "react";
import "@/app/globals.css";
import "./globals.css";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="container m-auto px-2 sm:px-10 ">
        <section className="text-center h-full mt-10 ">
          <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  md:w-3/4 m-auto leading-snug font_Kufam">
            بالعلم والمعرفة نبني
            <Image
              src={require("@/public/img1.png")}
              alt="ImageOne"
              className="inline-block w-10 h-10  md:w-20 md:h-20"
            />
            المستقبل
            <Image
              src={require("@/public/img2.png")}
              alt="ImageOne"
              className="inline-block w-10 h-10  md:w-20 md:h-20"
            />
            دروسنا طريقك نحو
            <Image
              src={require("@/public/book.png")}
              alt="ImageOne"
              className="inline-block w-10 h-10 md:w-20 md:h-20"
            />{" "}
            التميز
          </h1>

          <div className=" ">
            <p className="lg:w-1/2 m-auto my-3">
              نوفر لك أفضل الدروس التعليمية بطريقة مبتكرة وسهلة الفهم. هدفنا هو
              دعمك لتحقيق النجاح الأكاديمي والتميز في مسيرتك الدراسية
            </p>
            <div className=" flex  justify-center gap-4">
              {" "}
              <button className="click_button   font-bold mt-5  transition">
                اكتشف دوراتنا
              </button>
              <button className="click_button bg-primaryV2  font-bold mt-5 hover:bg-primaryV2/50 transition">
                ابدأ التعلم الأن
              </button>
            </div>
          </div>
        </section>

        <div className=" z-40 relative bg-primary h-full mt-10 ">
          <div className=" div_shdow px-3 py-5 rounded-md  flex  md:flex-row flex-col  items-center gap-3 justify-center">
            {/* card One  */}

            <div>
              <div className="flex flex-1  items-center text-end gap-5 md:pr-3 md:border-r-2 border-black">
                {" "}
                <div>
                  {" "}
                  <h1 className="font-bold mt-2 md:mb-3">دروسنا المتكاملة</h1>
                  <p>
                    مجموعة من الدروس المتنوعة التي تساعد الطلاب على فهم جميع
                    المواد بسهولة.
                  </p>
                </div>
                <div className="p-2 border-2 rounded border-black w-fit">
                  <Image
                    src={require("@/public/icons/IconsHomePage/books.png")}
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <span className="md:hidden h-0.5 mt-7  w-32 m-auto bg-black block"></span>
            </div>

            {/* card One  */}
            <div>
              <div className="flex flex-1 md:mt-0 mt-3 items-center text-end gap-5 md:pr-3 md:border-r-2 border-black">
                {" "}
                <div>
                  {" "}
                  <h1 className="font-bold mb-3">نحو تعليم أفضل</h1>
                  <p>
                    نحن نعمل على تحسين جودة التعليم وتوفير بيئة تعليمية مثالية
                    لجميع الطلاب.
                  </p>
                </div>
                <div className="p-2 border-2 rounded border-black w-fit">
                  <Image
                    src={require("@/public/icons/IconsHomePage/school.png")}
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <span className="md:hidden h-0.5 mt-7  w-32 m-auto bg-black block"></span>
            </div>

            {/* card One  */}
            <div>
              <div className="flex flex-1  md:mt-0  mt-3 items-center text-end gap-5  ">
                {" "}
                <div>
                  {" "}
                  <h1 className="font-bold mb-3">طلابنا في المقدمة</h1>
                  <p>
                    نهدف إلى تأهيل طلابنا ليكونوا قادة المستقبل في مجالاتهم
                    المختلفة.
                  </p>
                </div>
                <div className="p-2 border-2 rounded border-black w-fit">
                  <Image
                    src={require("@/public/icons/IconsHomePage/graduation.png")}
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className=" relative -top-20 h-screen   bg-Threecolor sm:px-10 ">
        <div className="container m-auto"></div>
      </section>
    </div>
  );
};

export default page;
