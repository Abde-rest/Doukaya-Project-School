import Logo from "../Componet/Logo";
import HerderUiUserProfail from "./HerderUiUserProfaik/HerderUiUserProfaik";
import MenuBar from "@/app/Niveaux/Componet/MenuBar/MenuBar";

const HeaderUiCors = () => {
  return (
    <div className="z-50  w-full  flex items-center">
      <div className="bg-black  px-4 text-white flex-1 flex items-center justify-between">
        <Logo />

        <div className="flex items-center justify-center gap-3">
          <HerderUiUserProfail wImage={"w-10"} hImage={"h-10"} noHover={true} />
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default HeaderUiCors;
