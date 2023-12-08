'use client'
import React, { useEffect, useState } from 'react'
import { NextUIProvider } from "@nextui-org/react";
import { Card } from './components/card'
import jsonDataFile from '../public/message.json'
import Header from './components/Header'
import { ThemeProvider } from 'next-themes'
import {useTheme} from "next-themes";
import { useDarkMode } from 'next-dark-mode'

interface CardProps {
  message: string;
  response: boolean;
  explanation: string;
  lien: string;
}

export default function Home() {
  const [jsonData, setJsonData] = useState<CardProps[]>([]);
  const [index, setIndex] = useState<number>(0); // New state for index
  const { darkModeActive } = useDarkMode()
  const [background, setBackground] = useState<string>('bg-amber-50'); // New state for background

  const handleThemeChange = (theme: string) => {
    setBackground(theme === 'dark' ? 'bg-neutral-800' : 'bg-amber-50')
    console.log(background)
  }

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
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme='light'>
        <Header onThemeChange={handleThemeChange}/>
        <main>
          <div className={`w-full h-screen flex justify-center ${background}`}>
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
      </ThemeProvider>
    </NextUIProvider>
  )
}