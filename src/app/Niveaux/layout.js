import HeaderUiCors from "../Componet/Hedaer/HeaderUiCors/HeaderUiCors";
import "../globals.css";

export default function NevauxLayout({ children, params }) {
  let { NumberNevaux } = params;
  console.log(NumberNevaux);

  return (
    <div>
      <HeaderUiCors />
      <div className="bg-backGround z-40 ">
        <div className="h-full w-full container m-auto ">
          <h1 className=" text-center rounded-md shadow-black  shadow p-x2 py-3 relative bg-white m-auto top-3  w-fit block px-3 ">
            الموقع الرسمي لمتوسطة المجاهد دقية بليخر التعليمي
          </h1>
          <h1 className="bg-primaryV2 text-center text-black shadow-black shadow mt-3 font-bold relative top-3 p-x2 py-3 ">
            {NumberNevaux} المستويات التعليمية
          </h1>

          {/* Box  Nevaux  */}
          {children}

          <h1 className=" flex items-center flex-col w-full  text-center rounded-md shadow-black shadow  py-3 relative bg-white m-auto top-3  ">
            <i className="text-xs mb-1">قال رسول الله صلى الله عليه وسلم: </i>
            <span>
              `&quot;`إن الله لا يقبض العلم انتزاعًا ينتزعه من العباد، ولكن يقبض
              العلم بقبض العلماء، حتى إذا لم يُبق عالمًا، اتخذ الناس رؤوسًا
              جهالًا، فسُئلوا، فأفتوا بغير علم، فضلوا وأضلوا.`&quot;`
            </span>
            <i className="text-xs mb-1">رواه الإمام البخاري </i>
          </h1>

          <h1 className="bg-primaryV2 text-center text-black rounded-md  shadow-black shadow mt-3 font-bold relative top-3 p-x2 py-3 ">
            أخر الأخبار
          </h1>
          {/* هنا نضع الاخبار */}
        </div>
      </div>
    </div>
  );
}
