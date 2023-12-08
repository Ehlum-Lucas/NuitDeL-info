'use client'
import React from 'react';
import { NextUIProvider} from "@nextui-org/react";
import Themes from "../themes";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center h-40 p-10">
            <NextUIProvider>
                <div className="w-10 h-10 p-8 flex items-start justify-center bg-zinc-800">
                    <Themes />
                </div>
            </NextUIProvider>
                <img src="/logo.svg" alt="logo" className="w-30"/>
                <div className="">
                    <img src="/switch.svg" alt="logo" className="w-30"/>
                </div>
        </header>
    );
};

export default Header;
