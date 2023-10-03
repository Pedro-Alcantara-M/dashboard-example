import { useState } from "react";
import SideMenu from "./sideMenu";
import TopBar from "./topBar";
import RoutesElements from "@src/routes";
import { Main } from "./styles";

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <SideMenu open={open} setOpen={setOpen} />
      <div style={{ marginTop: "120px" }}>
        <TopBar setOpen={setOpen} open={open} />
        <Main open={open}>
          <RoutesElements />
        </Main>
      </div>
    </>
  );
};

export default MainLayout;
