import { ChangeEvent, useEffect, useState } from 'react'
import { optionType } from '../Types/type'
type Props = {
  text: string
  options: []
  searchHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmitHandler: () => void
}
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const Search = ({
  text,
  searchHandler,
  options,
  onOptionSelect,
  onSubmitHandler,
}: Props): JSX.Element => {
  return (
    <main
      className="flex justify-center 
    items-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 h-[100vh] w-full"
    >
      <section className="w-full md:max-w-[600px] p-4 flex flex-col text-center items0center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-5xl font-thin">
          Weather <span className="font-black">Forecast</span>{' '}
        </h1>
        <p className="text-sm mt-2 text-xl">
          Enter the place where you want to know the Weather
        </p>
        <div className="relative flex ml-20 mt-5 md:mt-4">
          <input
            type="text"
            value={text}
            className="px-2 py-1 rounded-20-md border-2 border-white"
            onChange={searchHandler}
          />
          <ul className="absolute top-9 bg-white m1-1 rounded-b-md">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + '-' + index}>
                <button
                  className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onSubmitHandler}
            className="bg-whiteue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white-700 rounded"
          >
            Search
          </button>
        </div>
      </section>
    </main>
  )
}

export default Search
