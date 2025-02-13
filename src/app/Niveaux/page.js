import { getServerSession } from "next-auth";
import BoxNevaux from "./Componet/BoxNevaux/BoxNevaux";
import TopHedingThepage from "./Componet/TopHedingThepage";

const page = async () => {
  let data = await getServerSession();
  console.log(data);

  return (
    <div>
      <div className={`bg-[#FCFAEF] z-40  antialiased `}>
        <div className="h-full w-full container m-auto ">
          <TopHedingThepage name={" المستويات التعليمية"} />
          {/* Box  Nevaux  */}
          <div className="px-10 py-11 grid grid-cols-1 sm:grid-cols-2   gap-4 lg:grid-cols-3 text-end">
            {/* <MotionDev
            
            ></MotionDev> */}
            <BoxNevaux
              image={require("@/public/Svg_NumberNeavaux/level1.png")}
              textNevaux={"السنة الأولى متوسط"}
              hrefLink={"1am"}
              description={"دروس للسنة الاولى "}
            />{" "}
            <BoxNevaux
              image={require("@/public/Svg_NumberNeavaux/level2.png")}
              textNevaux={"السنة الثانية متوسط"}
              hrefLink={"2am"}
              description={"دروس للسنة الثانية "}
            />{" "}
            <BoxNevaux
              image={require("@/public/Svg_NumberNeavaux/level3.png")}
              textNevaux={"السنة الثالثة متوسط"}
              hrefLink={"3am"}
              description={"دروس للسنة الثالثة "}
            />{" "}
            <BoxNevaux
              image={require("@/public/Svg_NumberNeavaux/level4.png")}
              textNevaux={"السنة الرابعة متوسط"}
              hrefLink={"4am"}
              description={"دروس للسنة الرابعة "}
            />
          </div>
          <div className="glass rounded-2xl p-8 mb-12 w-5/6 m-auto">
            <blockquote className="text-center">
              <p className="text-[#66748399] mb-4">
                قال رسول الله صلى الله عليه وسلم:
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4 text-[#334457]">
                إن الله لا يقبض العلم انتزاعًا ينتزعه من العباد، ولكن يقبض العلم
                بقبض العلماء، حتى إذا لم يبق عالمًا، اتخذ الناس رؤوسًا جهالاً،
                فسئلوا، فأفتوا بغير علم، فضلوا وأضلوا
              </p>
              <div className="text-[#66748399]">رواه الإمام البخاري</div>
            </blockquote>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <button className="px-4 py-2 rounded-lg glass hover:bg-[#f7bc4b33] transition-colors text-[#334457]">
                عرض المزيد
              </button>
              <h2 className="text-2xl font-bold text-[#334457] ">
                آخر الأخبار
              </h2>
            </div>
            <div className="h-40 flex items-center justify-center text-[#66748399]/90">
              قريباً...
            </div>
          </div>
          {/* هنا نضع الاخبار */}
        </div>
      </div>
    </div>
  );
};

export default page;
