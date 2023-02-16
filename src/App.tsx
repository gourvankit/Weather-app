import { ChangeEvent, useEffect, useState } from 'react'
import Forecast from './components/Forecast'
import useForecast from './components/Hooks/useForecast'
import Search from './components/Search'
import { optionType } from './Types/type'
const App = (): JSX.Element => {
  const {
    options,
    text,
    forecast,
    onOptionSelect,
    searchHandler,
    onSubmitHandler,
  } = useForecast()
  return (
    <main
      className="flex justify-center 
    items-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 h-[100vh] w-full"
    >
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          text={text}
          onSubmitHandler={onSubmitHandler}
          options={options}
          searchHandler={searchHandler}
          onOptionSelect={onOptionSelect}
        />
      )}
    </main>
  )
}

export default App
