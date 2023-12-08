'use client'
import React, { useEffect, useState } from 'react'

import { Card } from './component/card'

import jsonDataFile from '../public/message.json'


interface CardProps {
  message: string;
  response: boolean;
  explanation: string;
  lien: string;
}

export default function Home() {
  const [jsonData, setJsonData] = useState<CardProps[]>([]);
  const [index, setIndex] = useState<number>(0); // New state for index

  useEffect(() => {
    setJsonData(jsonDataFile);
    setIndex(Math.floor(Math.random() * jsonDataFile.length));
  }, []);


  const callback = () => {
    var tmp = Math.floor(Math.random() * jsonDataFile.length);
    while (tmp == index) {
      tmp = Math.floor(Math.random() * jsonDataFile.length);
    }
    setIndex(tmp);
  };

  return (
    <main>
      <div className="w-full h-full flex justify-center bg-amber-100">
        {jsonData.length != 0 && (
          <>
              <Card
                phrase={jsonData[index].message}
                response={jsonData[index].response}
                message={jsonData[index].explanation}
                image={jsonData[index].lien}
                callback={callback}
              />
          </>
        )}
      </div>
    </main>
  )
}