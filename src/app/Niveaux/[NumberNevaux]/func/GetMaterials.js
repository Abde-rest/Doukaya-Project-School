// export default async function GetMaterials(NumberNevaux, Url) {
//   try {
//     let res = await fetch(`${Url}/api/GetMaterials`, {
//       method: "POST",
//       cache: "no-store",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         NumberNevaux: `${NumberNevaux}`,
//       }),
//     });
//     if (!res.ok) {
//       console.log("Not Ok res ");
//     }
//     console.log(res);

//     return res;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }
