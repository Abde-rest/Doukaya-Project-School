import React from "react";
import BoxNevaux from "./BoxNevaux";

const BoxsNevaux = () => {
  return (
    <div className="px-10 py-11 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 lg:grid-cols-4 text-end">
      <BoxNevaux
        image={require("@/public/Svg_NumberNeavaux/level1.png")}
        textNevaux={"السنة الأولى متوسط"}
        hrefLink={"1am"}
      />{" "}
      <BoxNevaux
        image={require("@/public/Svg_NumberNeavaux/level2.png")}
        textNevaux={"السنة الثانية متوسط"}
        hrefLink={"2am"}
      />{" "}
      <BoxNevaux
        image={require("@/public/Svg_NumberNeavaux/level3.png")}
        textNevaux={"السنة الثالثة متوسط"}
        hrefLink={"3am"}
      />{" "}
      <BoxNevaux
        image={require("@/public/Svg_NumberNeavaux/level4.png")}
        textNevaux={"السنة الرابعة متوسط"}
        hrefLink={"4am"}
      />
    </div>
  );
};

export default BoxsNevaux;
