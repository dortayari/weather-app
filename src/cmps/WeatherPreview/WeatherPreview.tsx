import React from "react";
import { WeatherData } from "../../constants/types";
import { PreviewWrapper, Title, Wrapper, SubTitle } from "./styles";

type Props = {
  weatherData: WeatherData | undefined;
  search: string;
};

const WeatherPreview = ({ search,weatherData }: Props) => {

    if (!weatherData && !search) return (
        <Wrapper>
            Search for any city
        </Wrapper>
    )

    if (!weatherData) return (
        <Wrapper>
            No data for {search}
        </Wrapper>
    )
    

  const { location, current } = weatherData;
  const { name , country,region} = location;
  const { condition , temp_c, temp_f} = current;
  return (
    <Wrapper>
      <PreviewWrapper>
        <Title>{name} {region}, {country}</Title>
        <SubTitle>
        <p>{condition.text}</p>
        <img alt="weather" src={condition.icon} />
        </SubTitle>
        <p>Temperature: {temp_c}°C</p>
      </PreviewWrapper>
    </Wrapper>
  );
};

export default WeatherPreview;
