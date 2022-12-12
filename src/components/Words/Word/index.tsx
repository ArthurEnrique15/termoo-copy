import { useState } from "react";
import { Letter } from "./Letter";

const WORD_SIZE = 5;

const correctWord = ['a', 'p', 'i', 't', 'o']

export type WordStatus = 'active' | 'inactive' | 'done'

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

  function getWordStatus(): WordStatus {
    if (wordIsComplete) {
      return 'done'
    } else if (wordPosition === wordActive) {
      return 'active'
    } else {
      return 'inactive'
    }
  }

  return (
    <fieldset className="flex" { ...(wordPosition === wordActive) ? {disabled: false} : {disabled: true} }>
      {data.map((data, index) => (
        <div key={index}>
          <Letter 
            index={index} 
            wordStatus={getWordStatus()}
            correctWord={correctWord}
            handleLetterChange={handleLetterChange} 
            handleEnterPress={handleEnterPress}
          />
        </div>
      ))}
    </fieldset>
  )
}