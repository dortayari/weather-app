import { useQuery } from 'react-query';
import { WeatherData } from '../constants/types';
import { localStorageService } from '../services/storageService';

interface QueryResult {
  weatherData: WeatherData | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

const useWeatherQuery = (search: string): QueryResult => {
  const { data: weatherData, isLoading, isError, refetch } = useQuery<WeatherData>(
    ["weather", search],
    async () => {
      if (!search) return;
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2e06e45ba3f543fd97f120935240306&q=${search}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      localStorageService.set('history', search)
      return await response.json();
    }
  );

  return { weatherData, isLoading, isError, refetch };
};

export default useWeatherQuery;
