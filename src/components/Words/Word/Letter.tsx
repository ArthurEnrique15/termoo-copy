type LetterProps = {
  index: number
  isActive: boolean
  handleLetterChange: (value: any, index: number) => void
  handleEnterPress: () => void
}

export function Letter({ index, isActive, handleLetterChange, handleEnterPress }: LetterProps) {
  const handleChange = (event: any) => {
    const { value } = event.target;
    handleLetterChange(value, index);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleEnterPress()
    }
  };

  return (
    <div className="m-1">
      <input 
        id="letter" 
        autoComplete="off" 
        { ...isActive ? {disabled: false} : {disabled: true} }
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
        maxLength={1} 
        className="text-center uppercase text-5xl w-20 h-20 border-4 border-brand-500 rounded-md text-white"
      />
    </div>
  )
}