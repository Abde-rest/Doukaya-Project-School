import React from "react";
import "@/app/globals.css";
import "./globals.css";
import Image from "next/image";
import Cards from "./Componet/Hedaer/CardsUiHomePage/Card";
import Categories from "./Componet/CategoriesUiHomePage/Categories";


const page = async () => {
  // افكار تطويرية في المتسقبل 
  // اضافة جلسة في قاعدة البيانات 




  // Response vs NextResponse: إذا كنت تستخدم Next.js 13 مع المجلد app, يفضل استخدام

  
  // color suscces
  // #5dd183

  //  Form Validtion  with formik yun zod or ...  // its  not Ues the Vliation with formi k or any wher
  // Ther is Mestakes in Login/SingUp  page Ther is Many Ui and state  Reused , So is low perfmormense

  // Create Paage Corse
  // redirect to page corse when login/singup susecc
  // show message when login/singup susecc
  // create store stat with zutend Have date use state

  return (
    <div>
      <div className="container m-auto px-2 sm:px-6 ">
        <section className="text-center h-full mt-10 ">
          <h1 className=" text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  md:w-3/4 m-auto leading-snug font_Kufam">
            بالعلم والمعرفة نبني
            <Image
              src={require("@/public/img1.png")}
              alt="ImageOne"
              className="inline-block w-14 h-14  md:w-20 md:h-20"
            />
            المستقبل
            <Image
              src={require("@/public/img2.png")}
              alt="ImageOne"
              className="inline-block w-14 h-14  md:w-20 md:h-20"
            />
            دروسنا طريقك نحو
            <Image
              src={require("@/public/book.png")}
              alt="ImageOne"
              className="inline-block w-14 h-14 md:w-20 md:h-20"
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
                  <h1 className="font-bold mt-2 md:mb-3  ">دروسنا المتكاملة</h1>
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

      <section className=" relative  px-2 sm:px-10  pt-28 pb-16 -top-20    bg-Threecolor ">
        <div className="container m-auto bg-primary div_shdow  p-2 md:p-10">
          <h1 className=" mb-6 flex items-center mt-2 justify-center flex-row-reverse text-base font-bold sm:text-2xl lg:text-3xl ">
            <span> - دروس</span>
            <span className=" md:mx-2"> استكشف الدروس التي وفرناها لك </span>
            <span className="">
              {" "}
              <Image
                className=" w-8 h-8 sm:w-10 sm:h-10  lg:w-14 lg:h-14"
                src={require("@/public/icons/IconsHomePage/stars1.png")}
                alt="Star"
              />
            </span>
          </h1>

          <p className="md:w-4/5  text-center m-auto  ">
            مجموعة واسعة من الدروس المميزة التي تم تصميمها بعناية لتناسب
            احتياجاتك التعليمية . استمتع بالتعلم بطريقة مبتكرة
          </p>

          {/* Card Corse  */}
          <Cards />
        </div>
      </section>

      {/* Categories Ui  */}
      <section>
        <Categories />
      </section>
    </div>
  );
};

export default page;
