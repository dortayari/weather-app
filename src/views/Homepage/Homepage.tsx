import React, { useEffect, useState } from "react";
import { Title, Wrapper } from "./styles";
import SearchBar from "../../cmps/SearchBar/SearchBar";
import { debounce } from "../../utils/debounce";
import WeatherPreview from "../../cmps/WeatherPreview/WeatherPreview";
import useWeatherQuery from "../../hooks/useWeatherQuery";
import Header from "../../cmps/Header/Header";
import History from "../../cmps/History/History";

type Props = {};

const Homepage = (props: Props) => {
  const [search, setSearch] = useState<string>("");

  const { weatherData, isLoading, isError, refetch } = useWeatherQuery(search);

  const debouncedSetSearch = debounce(setSearch, 1000);

  useEffect(() => {
    if (search) refetch();
  }, [search]);

  return (
    <Wrapper>
      <Header />
      <SearchBar setSearch={debouncedSetSearch} />
      <WeatherPreview weatherData={weatherData} search={search} />
      <History />
    </Wrapper>
  );
};

export default Homepage;
