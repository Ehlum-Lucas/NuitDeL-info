import React from 'react';
import Header from '../app/components/Header';
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <div>
      <ThemeProvider attribute='class'>
        <Header></Header>
      </ThemeProvider>
    </div>
  )
}
