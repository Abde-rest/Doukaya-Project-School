import Image from "next/image";
import BoxMaterials from "../Componet/BoxMaterials/BoxMaterials";
import Link from "next/link";

const page = async ({ params }) => {
  // صفخة المواد
  let { NumberNevaux } = params;
  let Url = process.env.NEXT_PUBLIC_BASE_URL;

  let res = await fetch(`${Url}/api/GetMaterials`, {
    method: "POST",
    // اذا نزعتها سوف يجدث هاذا المشكل : Error: "[object Object]" is not valid JSON
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      NumberNevaux: `${NumberNevaux}`,
    }),
  });

  if (!res.ok) {
    return (
      <div className="text-center ">
        <Image
          className="w-64 h-64  m-auto"
          src={require("@/public/Problem/alert.png")}
          alt="Problem image "
        />
        <h1>هناك مشكلة غير متوقعة </h1>
      </div>
    );
  }
  res = await res.json();

  return (
    <div>
      {res ? (
        res.materials.length > 0 ? (
          <div className="mt-8 mx-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {res.materials.map((items, index) => (
              <Link key={index} href={`${NumberNevaux}/${items.nameEn}`}>
                <BoxMaterials
                  _id={items._id}
                  name={items.name}
                  Tolesson={items.Tolesson}
                />
              </Link>
            ))}
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
            ليست هناك دروس بعد .... سوف يام توفيرها مستقبلا
          </div>
        )
      ) : (
        <div className="text-center p-3  mt-4 ">
          <Image
            width={200}
            height={200}
            className="m-auto "
            src={require("@/public/Problem/alert.png")}
            alt="Problem Image "
          />
          حدثت مشكلة ما !!! رجاء اعد المحاولة{" "}
        </div>
      )}
    </div>
  );
};

export default page;
