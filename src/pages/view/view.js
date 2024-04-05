import Premium from "../../Components/Cards/Premium/Premium";
import Standard from "../../Components/Cards/Standard/Standard";
import PageView from "../../Components/Catalog/PageView/PageView";
import Carousal from "../../Components/Catalog/carousal/carousal";
import HorizontalNavBar from "../../Components/Navbars/HorizontalNavbar/HorizontalNavbar";
import VerticalNavBar from "../../Components/Navbars/VerticalNavbar/VerticalNavbar";
import { viewSelector } from "../../redux/viewReducer";
import { useSelector } from "react-redux";

export default function View() {
  const { nav, catalog } = useSelector(viewSelector);

  return (
    <>
      {nav == "Horizontal" ? <HorizontalNavBar /> : <VerticalNavBar />}
      {catalog == "Carousal" ? <Carousal /> : <PageView />}
    </>
  );
}
