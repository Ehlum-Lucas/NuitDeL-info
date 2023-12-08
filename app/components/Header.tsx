'use client'
import React, {useState} from 'react';
import { NextUIProvider} from "@nextui-org/react";
import Themes from "../themes";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "../icons/moonIcon";
import {SunIcon} from "../icons/sunIcon";

const Header: React.FC = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        console.log(theme);
    }

    return (
        <header className="flex h-40 py-5">
            <NextUIProvider>
                <div className="w-screen flex justify-between items-center">
                    <div className="w-10 h-10 p-8 flex items-start justify-center bg-zinc-800">
                        <Themes />
                    </div>
                    <img src="/logo.svg" alt="logo" className="w-30"/>
                    <div>
                        <Switch
                            defaultSelected={theme === 'dark'}
                            size="lg"
                            color="success"
                            startContent={<SunIcon />}
                            endContent={<MoonIcon />}
                            onChange={toggleTheme}
                        ></Switch>
                    </div>
                </div>
            </NextUIProvider>
        </header>
    );
};

export default Header;
