import { useState } from "react"

type LetterProps = {
  index: number
  isActive: boolean
  correctWord: string[]
  wordIsComplete: boolean
  handleLetterChange: (value: any, index: number) => void
  handleEnterPress: () => void
}

export function Letter(props: LetterProps) {
  const { index, isActive, correctWord, wordIsComplete, handleLetterChange, handleEnterPress } = props

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

  let className = 'text-center uppercase text-5xl w-20 h-20 border-4 border-brand-500 rounded-md text-white'

  if (!isActive && !wordIsComplete) {
    className = className + ' bg-gray-200'
  }

  if (wordIsComplete) {
    const letterIsCorrect = letter === correctWord[index]
    const letterExistsInWord = correctWord.includes(letter)

    if (letterIsCorrect) {
      className = className + ' bg-green-400'
    } else if (letterExistsInWord) {
      className = className + ' bg-yellow-400'
    } else {
      className = className + ' bg-gray-400'
    }
  }

  return (
    <div className="m-1">
      <input 
        id="letter" 
        type="text"
        autoComplete="off" 
        value={letter}
        { ...isActive ? {disabled: false} : {disabled: true} }
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
        maxLength={1} 
        className={className}
      />
    </div>
  )
}