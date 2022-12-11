import { useState } from "react";
import { Word } from "./Word";

const WORDS_AMOUNT = 6

export function Words() {
  const [data] = useState([...Array(WORDS_AMOUNT).keys()]);

  function handleWordComplete(word: string[]) {
    console.log('complete word: ', word);
  }
  
  return (
    <div className="flex flex-col">
      {data.map((data, index) => (
        <div key={index}>
          <Word handleWordComplete={handleWordComplete} />
        </div>
      ))}
    </div>
  )
}