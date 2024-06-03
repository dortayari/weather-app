import React, { useEffect, useState } from "react";
import { Position } from "../../constants/types";
import useWeatherQuery from "../../hooks/useWeatherQuery";
import { Wrapper } from "./styles";

type Props = {};

const CurrentLocation = (props: Props) => {
  const [position, setPosition] = useState<Position>({
    latitude: null,
    longitude: null,
  });
  const { weatherData, isLoading, isError, refetch } = useWeatherQuery(
    `${position.latitude},${position.longitude}`
  );

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  if (!weatherData) return <Wrapper>No data for current location</Wrapper>;

  const { location, current } = weatherData;
  const { name, country, region } = location;
  const { condition, temp_c, temp_f } = current;

  return (
    <Wrapper>
        {name}, {country} {temp_c}°C 
        <img alt="icon" src={condition.icon} />
    </Wrapper>
  )
};

export default CurrentLocation;
