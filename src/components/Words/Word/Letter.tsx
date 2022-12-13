import {useState } from "react"
import { WordStatus } from "."
import { checkIfIsValidLetter } from "../../../utils/check-if-is-valid-letter"


type LetterProps = {
  index: number
  wordStatus: WordStatus
  wordPosition: number
  correctWord: string[]
  handleLetterChange: (value: any, index: number) => void
  handleEnterPress: () => void
  changeFocusOnKeyPressed: (letterIndex: number, keyPressed: string) => void
}

export function Letter(props: LetterProps) {
  const { index, correctWord, wordPosition, wordStatus, handleLetterChange, handleEnterPress, changeFocusOnKeyPressed } = props

  const [letter, setLetter] = useState('')

  const handleKeyDown = (event: any) => {
    console.log('key down', event)

    if (checkIfIsValidLetter(event.key)) {
      setLetter(event.key)
      handleLetterChange(event.key, index)
    }

    if (event.key === 'Backspace') {
      setLetter('')
      handleLetterChange('', index)
    }

    if (event.key === 'Enter') {
      handleEnterPress()
    }

    changeFocusOnKeyPressed(index, event.key)
  };

  let className = `
    text-center uppercase text-5xl w-20 h-20 border-4 border-purple-900 rounded-md caret-transparent 
    focus:border-purple-600 focus:ring-purple-600 focus:ring-1 focus:outline-none
  `

  switch (wordStatus) {
    case 'done':
      const letterIsCorrect = letter === correctWord[index]
      const letterExistsInWord = correctWord.includes(letter)

      if (letterIsCorrect) {
        className = className + ' bg-green-500'
      } else if (letterExistsInWord) {
        className = className + ' bg-yellow-500'
      } else {
        className = className + ' bg-gray-900'
      }
      break;

    case 'active':
      className = className + ' bg-gray-700'
      break;

    case 'inactive':
      className = className + ' bg-gray-800'
      break;

    default:
      break;
  }

  return (
    <div className="m-1">
      <input 
        id={"word-" + wordPosition + "-letter-" + index}
        type="text"
        autoComplete="off" 
        value={letter}
        onKeyDown={handleKeyDown}
        maxLength={1} 
        className={className}
      />
    </div>
  )
}