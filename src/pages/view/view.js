import PageView from "../../Components/Full_View/fullView";
import HorizontalNavBar from "../../Components/HorizontalNavbar/HorizontalNavbar";
import VerticalNavBar from "../../Components/VerticalNavbar/VerticalNavbar";
import Carousal from "../../Components/carousal/carousal";
import { viewSelector } from "../../redux/viewReducer";
import { useSelector } from "@reduxjs/toolkit";

export default function View() {
  const { nav, catalog, card } = useSelector(viewSelector);

  return (
    <>
      {nav == "Horizontal" ? <HorizontalNavBar /> : <VerticalNavBar />}
      {catalog == "Carousal" ? <Carousal /> : <PageView />}
      {card == "Standard" ? }
    </>
  );
}
