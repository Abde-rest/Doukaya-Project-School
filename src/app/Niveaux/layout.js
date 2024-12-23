import HeaderUiCors from "../Componet/Hedaer/HeaderUiCors/HeaderUiCors";
import "../globals.css";

export default function NevauxLayout({ children }) {
  return (
    <div>
      <HeaderUiCors />
      {children}
    </div>
  );
}
