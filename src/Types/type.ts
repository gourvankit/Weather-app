export type optionType = {
  name: string
  lat: number
  lon: number
}
export type forecastType = {
  name: string
  country: string
  sunrise: number
  sunset: number
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_kf: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          icon: string
          description: string
          main: string
        }
      ]
      wind: {
        speed: number
        gust: number
        deg: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}
