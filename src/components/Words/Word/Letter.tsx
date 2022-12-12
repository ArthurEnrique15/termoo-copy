import { useState } from "react"
import { WordStatus } from "."


type LetterProps = {
  index: number
  wordStatus: WordStatus
  correctWord: string[]
  handleLetterChange: (value: any, index: number) => void
  handleEnterPress: () => void
}

export function Letter(props: LetterProps) {
  const { index, correctWord, wordStatus, handleLetterChange, handleEnterPress } = props

  const [letter, setLetter] = useState('')

  const handleChange = (event: any) => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
    setLetter(result);
    if (result) {
      handleLetterChange(result, index);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleEnterPress()
    }
  };

  let className = `
    text-center uppercase text-5xl w-20 h-20 border-4 border-purple-900 rounded-md 
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
        className = className + ' bg-purple-900'
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
        id="letter" 
        type="text"
        autoComplete="off" 
        value={letter}
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
        maxLength={1} 
        className={className}
      />
    </div>
  )
}