type LetterProps = {
  index: number
  handleLetterChange: (value: any, index: number) => void
}

export function Letter({ index, handleLetterChange }: LetterProps) {
  const handleChange = (event: any) => {
    const { value } = event.target;
    handleLetterChange(value, index);
  };

  return (
    <div className="m-1">
      <input id="letter" autoComplete="off" onChange={handleChange} maxLength={1} className="text-center uppercase text-5xl w-20 h-20 border-4 border-brand-500 rounded-md text-white"/>
    </div>
  )
}