import React from "react";
import { NavItems, Title, Wrapper } from "./styles";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import History from "../History/History";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({setSearch}: Props) => {
  return (
    <Wrapper>
      <Title>Weather Everywhere</Title>
      <NavItems>
        <CurrentLocation />
        <History setSearch={setSearch}/>
      </NavItems>
    </Wrapper>
  );
};

export default Header;
