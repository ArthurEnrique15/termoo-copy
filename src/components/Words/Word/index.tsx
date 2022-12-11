import { useState } from "react";
import { Letter } from "./Letter";

const WORD_SIZE = 5;

type WordProps = {
  handleWordComplete: (word: string[]) => void
}

export function Word({ handleWordComplete }: WordProps) {
  const [data] = useState([...Array(WORD_SIZE).keys()]);

  const word = ['', '', '', '', '']

  function handleLetterChange(value: string, index: number) {
    word[index] = value;
    console.log('word: ', word);
  }

  function handleEnterPress() {
    const wordIsComplete = word.every((letter) => letter !== '');
    if (wordIsComplete) {
      handleWordComplete(word);
    } else {
      console.log('only 5 letter words!')
    }
  }

  return (
    <div className="flex">
      {data.map((data, index) => (
        <div key={index}>
          <Letter index={index} handleLetterChange={handleLetterChange} handleEnterPress={handleEnterPress} />
        </div>
      ))}
    </div>
  )
}