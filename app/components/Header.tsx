import React from 'react';
import Themes from "../themes";

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center h-40 p-10">
                <button className="bg-zinc-800 hover:bg-green-700 text-white font-bold py-4 px-6 rounded">
                    <Themes />
                </button>
                <img src="/logo.svg" alt="logo" className="w-30"/>
                <div className="">
                    <img src="/switch.svg" alt="logo" className="w-30"/>
                </div>
        </header>
    );
};

export default Header;
