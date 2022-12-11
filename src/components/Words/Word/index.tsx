import { useState } from "react";
import { Letter } from "./Letter";

const WORD_SIZE = 5;

export function Word() {
  const [data] = useState([...Array(WORD_SIZE).keys()]);

  const word = ['', '', '', '', '']

  function handleLetterChange(value: string, index: number) {
    word[index] = value;
    const wordIsComplete = word.every((letter) => letter !== '');

    console.log('word: ', word);
    console.log('wordIsComplete: ', wordIsComplete);
  }

  return (
    <div className="flex">
      {data.map((data, index) => (
        <div key={index}>
          <Letter index={index} handleLetterChange={handleLetterChange} />
        </div>
      ))}
    </div>
  )
}