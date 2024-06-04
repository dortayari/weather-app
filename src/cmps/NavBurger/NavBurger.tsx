import React from "react";
import { Line, Wrapper } from "./styles";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const NavBurger = ({setIsOpen, isOpen}: Props) => {
  return (
    <Wrapper 
    className={isOpen ? 'open' : ''}
    onClick={() => setIsOpen((prevState: boolean) => !prevState)}>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  );
};

export default NavBurger;
