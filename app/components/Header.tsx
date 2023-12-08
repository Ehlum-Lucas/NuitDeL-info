'use client'
import React, {useState} from 'react';
import {useTheme} from "next-themes";
import Themes from "../themes";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "../icons/moonIcon";
import {SunIcon} from "../icons/sunIcon";

interface HeaderProps {
    onThemeChange: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({onThemeChange}) => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            onThemeChange('light');
        } else {
            setTheme('dark');
            onThemeChange('dark');
        }
    };

    return (
        <div className={`flex justify-between items-center h-30 p-10 ${theme === 'dark' ? 'bg-neutral-800' : 'bg-amber-50'}`}>
            <div></div>
            <img src="/logo.svg" alt="logo" className="w-30 pl-10"/>
            <div>
                <Switch
                    defaultSelected={theme === 'light'}
                    size="lg"
                    color="success"
                    startContent={<SunIcon />}
                    endContent={<MoonIcon />}
                    onChange={toggleTheme}
                ></Switch>
            </div>
        </div>
    );
};

export default Header;
