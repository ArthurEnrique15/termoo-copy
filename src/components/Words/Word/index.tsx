import { useState } from "react";
import { Letter } from "./Letter";

const WORD_SIZE = 5;

const correctWord = ['a', 'p', 'i', 't', 'o']

type WordProps = {
  wordPosition: number
  wordActive: number
  handleWordComplete: (word: string[]) => void
}

export function Word({ wordPosition, wordActive, handleWordComplete }: WordProps) {
  const [data] = useState([...Array(WORD_SIZE).keys()]);
  const [wordIsComplete, setWordIsComplete] = useState(false);

  const word = ['', '', '', '', '']

  function handleLetterChange(value: string, letterIndex: number) {
    word[letterIndex] = value;
    console.log('word: ', word);
  }

  function handleEnterPress() {
    const wordIsComplete = word.every((letter) => letter !== '');
    if (wordIsComplete) {
      setWordIsComplete(true);
      handleWordComplete(word);
    } else {
      console.log('only 5 letter words!')
    }
  }

  return (
    <div className="flex">
      {data.map((data, index) => (
        <div key={index}>
          <Letter 
            index={index} 
            isActive={wordPosition === wordActive} 
            correctWord={correctWord}
            wordIsComplete={wordIsComplete}
            handleLetterChange={handleLetterChange} 
            handleEnterPress={handleEnterPress}
          />
        </div>
      ))}
    </div>
  )
}