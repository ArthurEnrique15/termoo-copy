import { Words } from "./Words";

export function Game() {
  return (
    <>
      <h1 className="text-center text-5xl pt-10 mb-20">Guess the word</h1>
      <div className="flex justify-center"><Words/></div>
    </>
  )
}