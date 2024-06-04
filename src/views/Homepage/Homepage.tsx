import React, { useEffect, useState } from "react";
import { Title, Wrapper } from "./styles";
import SearchBar from "../../cmps/SearchBar/SearchBar";
import { debounce } from "../../utils/debounce";
import WeatherPreview from "../../cmps/WeatherPreview/WeatherPreview";
import useWeatherQuery from "../../hooks/useWeatherQuery";
import Header from "../../cmps/Header/Header";
import History from "../../cmps/History/History";
import { localStorageService } from "../../services/storageService";
import { WeatherData } from "../../constants/types";

type Props = {};

const Homepage = (props: Props) => {
  const [search, setSearch] = useState<string>("");

  const { weatherData, isLoading, isError, refetch } = useWeatherQuery(search);
  const [lastData , setLastData] = useState<WeatherData>()
  const debouncedSetSearch = debounce(setSearch, 1000);

  useEffect(() => {
    if (search) refetch();
    if(!search && !weatherData) fetchLastData()
  }, [search]);

  const fetchLastData = async () => {
    if(weatherData) setLastData(weatherData)
    else if(!weatherData && !lastData) {

      const history = localStorageService.get('history')
      const lastSearch = history[history.length - 1]
      lastSearch ? setSearch(lastSearch) : setSearch('Tel Aviv')
  }
  }

  return (
    <Wrapper>
      <Header setSearch={setSearch}/>
      <SearchBar setSearch={debouncedSetSearch} />
      <WeatherPreview weatherData={weatherData ? weatherData : lastData} search={search} />
    </Wrapper>
  );
};

export default Homepage;
