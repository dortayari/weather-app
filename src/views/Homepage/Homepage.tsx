import React, { useEffect, useState } from "react";
import { Title } from "./styles";
import SearchBar from "../../cmps/SearchBar/SearchBar";
import { useQuery } from "react-query";
import { debounce } from "../../utils/debounce";
import WeatherPreview from "../../cmps/WeatherPreview/WeatherPreview";

type Props = {};

const Homepage = (props: Props) => {
  const [weather, setWeather] = useState();
  const [search, setSearch] = useState<string>("");

  const {
    data: weatherData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["weather", search], async () => {
    if(!search) return
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=2e06e45ba3f543fd97f120935240306&q=${search}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  });

  const debouncedSetSearch = debounce(setSearch, 1000);

  useEffect(() => {
    if (search) refetch();
  }, [search]);

  useEffect(() => {
    console.log("weather", weatherData)
  }, [weatherData]);

  return (
    <div>
      <Title>Home Page</Title>
      <SearchBar setSearch={debouncedSetSearch} />
      <WeatherPreview weatherData={weatherData} search={search}/>
    </div>
  );
};

export default Homepage;
