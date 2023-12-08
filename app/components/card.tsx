'use client'

import React, { useState } from 'react';

interface Phrase {
    phrase: string;
    response: boolean;
    message: string;
    image: string;
    callback?: () => void;
}

export const Card = ({ phrase, response, message, image, callback = undefined }: Phrase) => {
    const [isQuestion, setIsQuestion] = useState<boolean>(true);


    const onTouch = (side : string) => {
        console.log(side);
        const responseToString = response ? "right" : "left";
        if (side == "end") {
            setIsQuestion(true);
            if (callback != undefined) {
                callback();
            }
            return;
        }
        if (side == responseToString) {
            if (callback != undefined) {
                callback();
            }
            return;
        } else {
            setIsQuestion(false);
        }
    }

    if (isQuestion) {
        return (
            <div className="relative bg-white rounded-xl shadow-md m-4 w-[600px] h-[900px] overflow-hidden">
                <img
                    src={image}
                    alt={phrase}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <h1 className="text-4xl font-bold mx-5 text-white mb-10 text-center">{phrase}</h1>
                    <div className="flex flex-row justify-between w-5/6 mb-5">
                        <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onTouch("left")}>
                            <circle cx="43.5" cy="43.5" r="42.5" stroke="#D94A38" strokeWidth="0.671795" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.3447 27.5377C55.9616 26.1546 53.7192 26.1546 52.3361 27.5377L43.2759 36.5979L34.2157 27.5377C32.8325 26.1546 30.5901 26.1546 29.207 27.5377L27.5374 29.2073C26.1543 30.5904 26.1543 32.8328 27.5374 34.2159L36.5976 43.2761L27.5374 52.3363C26.1543 53.7194 26.1543 55.9619 27.5374 57.345L29.207 59.0145C30.5901 60.3977 32.8326 60.3977 34.2157 59.0145L43.2759 49.9544L52.336 59.0145C53.7191 60.3977 55.9616 60.3977 57.3447 59.0145L59.0143 57.345C60.3974 55.9619 60.3974 53.7194 59.0143 52.3363L49.9541 43.2761L59.0143 34.2159C60.3974 32.8328 60.3974 30.5904 59.0143 29.2073L57.3447 27.5377Z" fill="url(#paint0_linear_3_11)" />
                            <defs>
                                <linearGradient id="paint0_linear_3_11" x1="24.6647" y1="63.9741" x2="45.7765" y2="7.9412" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#EA4080" />
                                    <stop offset="1" stopColor="#EE805F" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onTouch("right")}>
                            <circle cx="43.5" cy="43.5" r="42.5" stroke="#6DE5B5" strokeWidth="0.671795" />
                            <path d="M52.9809 26.9916C46.3169 26.9916 43.5006 31.6272 43.5006 31.6272C43.5006 31.6272 40.6842 26.972 34.0202 26.972C28.3876 26.9916 23.6672 31.6272 23.6672 37.1625C23.6672 49.8567 43.5006 60.0276 43.5006 60.0276C43.5006 60.0276 63.3339 49.8567 63.3339 37.1625C63.3339 31.6272 58.6136 26.9916 52.9809 26.9916Z" fill="url(#paint0_linear_3_17)" />
                            <defs>
                                <linearGradient id="paint0_linear_3_17" x1="27.445" y1="43.4998" x2="70.8894" y2="31.4582" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6DE5B5" />
                                    <stop offset="1" stopColor="#73ECDD" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="relative bg-white rounded-xl shadow-md m-4 w-[600px] h-[900px] overflow-hidden">
                <img
                    src={image}
                    alt={phrase}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                    <h1 className="text-4xl mx-5 font-bold text-white mb-10 text-center">{message}</h1>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
                    <div className="flex flex-row justify-center w-5/6 mb-5">
                        <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onTouch("end")}>
                            <circle cx="43.5" cy="43.5" r="42.5" stroke="#6DE5B5" strokeWidth="0.671795" />
                            <path d="M52.9809 26.9916C46.3169 26.9916 43.5006 31.6272 43.5006 31.6272C43.5006 31.6272 40.6842 26.972 34.0202 26.972C28.3876 26.9916 23.6672 31.6272 23.6672 37.1625C23.6672 49.8567 43.5006 60.0276 43.5006 60.0276C43.5006 60.0276 63.3339 49.8567 63.3339 37.1625C63.3339 31.6272 58.6136 26.9916 52.9809 26.9916Z" fill="url(#paint0_linear_3_17)" />
                            <defs>
                                <linearGradient id="paint0_linear_3_17" x1="27.445" y1="43.4998" x2="70.8894" y2="31.4582" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6DE5B5" />
                                    <stop offset="1" stopColor="#73ECDD" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
};