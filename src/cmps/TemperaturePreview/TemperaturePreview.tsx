import React, { useState } from "react";
import thermometer from "../../assets/images/thermometer.png";
import wind from "../../assets/images/wind.png";
import { Wrapper, Image, Button, TempWrapper, TempPreview } from "./styles";
import { TempType } from "../../constants/types";

type Props = {
  temp_c: number;
  temp_f: number;
  wind_mph: number;
  wind_kph: number;
};

const TemperaturePreview = ({ temp_c, temp_f, wind_kph }: Props) => {
  const [tempType, setTempType] = useState<TempType>("celcius");

  return (
    <Wrapper>
      <TempWrapper>
        <TempPreview>
          <p>{tempType === "celcius" ? `${temp_c} °C` : `${temp_f} °F`}</p>
          <Image alt="weather" src={thermometer} />
        </TempPreview>
        <TempPreview>
          <p>{wind_kph} km/h</p>
          <Image alt="weather" src={wind} />
        </TempPreview>
      </TempWrapper>
      <Button
        onClick={() =>
          setTempType((prevState: TempType) =>
            prevState === "celcius" ? "farenheit" : "celcius"
          )
        }
      >
        Switch to {tempType === "celcius" ? "Farenheit" : "celcius"}
      </Button>
    </Wrapper>
  );
};

export default TemperaturePreview;
