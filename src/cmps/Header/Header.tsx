import React, { useState } from "react";
import { NavItems, Title, Wrapper } from "./styles";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import History from "../History/History";
import NavBurger from "../NavBurger/NavBurger";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({setSearch}: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <Wrapper>
      <Title>Weather Everywhere</Title>
      <NavItems>
        <CurrentLocation />
        <History setSearch={setSearch} setIsOpen={setIsOpen} isOpen={isOpen}/>
        <NavBurger setIsOpen={setIsOpen} isOpen={isOpen}/>
      </NavItems>
    </Wrapper>
  );
};

export default Header;
