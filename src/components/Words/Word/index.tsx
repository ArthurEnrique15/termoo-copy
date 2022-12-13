import { useState } from "react";
import { checkIfIsValidLetter } from "../../../utils/check-if-is-valid-letter";
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

  function changeFocusOnKeyPressed(letterIndex: number, keyPressed: string) {
    console.log('keyPressed', keyPressed)
    console.log('letterIndex', letterIndex)
    switch (keyPressed) {
      case 'ArrowLeft':
        goToPreviousLetter()
        break;

      case 'ArrowRight':
        goToNextLetter()
        break;

      case 'Backspace':
        goToPreviousLetter()
        break;

      default:
        if (keyPressed.length === 1 && checkIfIsValidLetter(keyPressed))
          goToNextLetter()
        break;
    }
    
    function goToPreviousLetter() {
      if (letterIndex > 0) {
        const previousLetter = document.getElementById(`word-${wordPosition}-letter-${letterIndex - 1}`)
        if (previousLetter) {
          previousLetter.focus()
        }
      }
    }

    function goToNextLetter() {
      const nextLetter = document.getElementById(`word-${wordPosition}-letter-${letterIndex + 1}`)
      if (nextLetter) {
        nextLetter.focus()
      }
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
            wordPosition={wordPosition}
            wordStatus={getWordStatus()}
            correctWord={correctWord}
            handleLetterChange={handleLetterChange} 
            handleEnterPress={handleEnterPress}
            changeFocusOnKeyPressed={changeFocusOnKeyPressed}
          />
        </div>
      ))}
    </fieldset>
  )
}