import React, { useEffect, useState } from "react";
import { localStorageService } from "../../services/storageService";
import { Button, ModalWrapper, Wrapper } from "./styles";
import HistoryPreview from "../HistoryPreview/HistoryPreview";
import useWeatherQuery from "../../hooks/useWeatherQuery";
import { useHistory } from "../../contexts/HistoryContext";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const History = ({ setSearch }: Props) => {
  const { state: history } = useHistory();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleHistoryClick = (city: string) => {
    setSearch(city);
  };

  return (
    <Wrapper>
      <Button onClick={() => setIsOpen(!isOpen)}>History</Button>
      <ModalWrapper className={!isOpen ? "hide" : ""}>
        {history.map((city: string) => (
          <HistoryPreview
            city={city}
            key={city}
            handleHistoryClick={handleHistoryClick}
          />
        ))}
      </ModalWrapper>
    </Wrapper>
  );
};

export default History;
