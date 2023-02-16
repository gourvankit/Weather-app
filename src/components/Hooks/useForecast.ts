import { useState, useEffect, ChangeEvent } from "react";
import { forecastType, optionType } from "../../Types/type";

const useForecast = () => {
  const [text, SetText] = useState<string>("");
  const [options, SetOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  const getFetchOptions = async (value: string) => {
    await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => SetOptions(data));
  };
  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };
  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };
        setForecast(forecastData);
      });
  };
  const onSubmitHandler = () => {
    if (!city) return;
    getForecast(city);
  };
  useEffect(() => {
    if (city) {
      SetText(city?.name);
      SetOptions([]);
    }
  }, [city]);
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value === "") {
      return;
    }
    SetText(value);
    getFetchOptions(value);
  };
  return {
    options,
    text,
    forecast,
    onOptionSelect,
    searchHandler,
    onSubmitHandler,
  };
};
export default useForecast;
