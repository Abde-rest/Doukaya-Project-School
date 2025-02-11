import Image from "next/image";
import BoxMaterials from "../Componet/BoxMaterials/BoxMaterials";
import Link from "next/link";
import TopHedingThepage from "../Componet/TopHedingThepage";
import NotFoundContent from "../Componet/HandelingError/NotFoundContent";
import MotionDev from "../Componet/Motion/motionDev";

const page = async ({ params }) => {
  // صفخة المواد
  let { NumberNevaux } = params;
  let res = [];
  res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/GetMaterials`, {
    method: "POST",
    // cache: "no-store",
    next: { revalidate: 60 },
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      NumberNevaux: `${NumberNevaux}`,
    }),
  });

  res = await res.json();

  return (
    <div>
      {res ? (
        res.materials.length > 0 ? (
          <div>
            <TopHedingThepage name={res.name} />
            <div className="mt-8 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {res.materials.map((items, index) => (
                <MotionDev
                  key={index}
                  initial={{ y: 70 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  className={"transition-opacity relative duration-100"}>
                  <Link href={`${NumberNevaux}/${items.nameEn}`}>
                    <BoxMaterials
                      _id={items._id}
                      name={items.name}
                      Tolesson={items.Tolesson}
                      LogoMat={items.LogoMat}
                    />
                  </Link>
                </MotionDev>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center 0 p-3  mt-4 ">
            <Image
              width={200}
              height={200}
              className="m-auto "
              src={require("@/public/Problem/alert.png")}
              alt="Problem Image "
            />
            ليست هناك مواد بعد .... نعمل عليها حاليا
          </div>
        )
      ) : (
        <NotFoundContent />
      )}
    </div>
  );
};

export default page;
