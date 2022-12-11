import { useState } from "react";
import { Word } from "./Word";

const WORDS_AMOUNT = 6

export function Words() {
  const [data] = useState([...Array(WORDS_AMOUNT).keys()]);

  const [wordActive, setWordActive] = useState(0);

  function handleWordComplete(word: string[]) {
    setWordActive(wordActive + 1);
    console.log('complete word: ', word);
  }
  
  return (
    <div className="flex flex-col">
      {data.map((data, index) => (
        <div key={index}>
          <Word wordPosition={index} wordActive={wordActive} handleWordComplete={handleWordComplete} />
        </div>
      ))}
    </div>
  )
}