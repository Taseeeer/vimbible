import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";

import "../css/layout.css";
import User from "../assets/me.png";

import { useWindowSize } from "../lib/useWindowResize";

import chargingAudio from "../../public/charging.mp3";
import fireAudio from "../assets/fire.wav";

import { GoPrimitiveDot } from "react-icons/go";
import { BsBatteryCharging, BsBatteryHalf } from "react-icons/bs";
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";

export default function Layout({ children }) {

    const [ showMobView, setShowMobView ] = useState(false);

    let width = useWindowSize();

    const classRef = useRef();
    const audioRef = useRef(null);
    const firAudioRef = useRef(null);

    const [ charging, setCharging ] = useState(false);


    const handleAudio = () => {
        audioRef.current.play();
        setCharging(!charging);
    }

    const handleFireAudio = () => firAudioRef.current.play();

    let persistedTheme = localStorage.getItem('theme');

    useEffect(() => {
        if(persistedTheme) classRef.current.className = persistedTheme;
    }, []);
    

    const setSelectedTheme = (color) => {
        switch(color) {
            case "purple": {
                localStorage.setItem("theme", "layout purple-mode"); 
                return classRef.current.className = "layout purple-mode";
            }

            case "vim": {
                localStorage.setItem("theme", "layout vim-mode"); 
                return classRef.current.className = "layout vim-mode";
            }

            case "basic": {
                localStorage.setItem("theme", "layout basic-mode"); 
                return classRef.current.className = "layout basic-mode";
            }

            case "fire": {
                localStorage.setItem("theme", "layout fire-mode"); 
                return classRef.current.className = "layout fire-mode";
            }

            case "dark": {
                localStorage.setItem("theme", "layout dark-mode"); 
                return classRef.current.className = "layout dark-mode";
            }

            case "default":
                return classRef.current.className = "layout";
        }
    };

    return (
        <>
        <div className="layout" ref={classRef}>
            <div>
                <audio id="charging" style={{visibility: "hidden"}} ref={audioRef}>
                    <source src={chargingAudio}></source>
                </audio>
                <audio id="fireaudio" style={{visibility: "hidden"}} ref={firAudioRef}>
                    <source src={fireAudio}></source>
                </audio>
            </div>
            <div className="main-heading-outer">
                <h1 className="main-heading">YOUR HOLY PLACE TO LEARN VIM.</h1>
            </div>
            <div className="nav-line">
                { charging ? 
                    <BsBatteryCharging className="nav-dots battery" onClick={handleAudio} />
                    :
                    <BsBatteryHalf className="nav-dots battery" onClick={handleAudio} />
                }
                <GoPrimitiveDot className="nav-dots purple" onClick={() => setSelectedTheme('purple')} />
                <GoPrimitiveDot className="nav-dots green" onClick={() => setSelectedTheme('vim')} />
                <GoPrimitiveDot className="nav-dots white" onClick={() => setSelectedTheme('basic')} />
            </div>
            <div className="outer-container">
                <div className="sidebar-mobview" style={{display: `${width[0] < 750 ? "block" : "none"}`}}>
                    <span style={{fontSize: "2rem"}} onClick={() => setShowMobView(!showMobView)}>
                        {showMobView ? <BiCaretLeft /> : <BiCaretRight />}
                    </span>
                    <div style={{display: `${showMobView ? "block": "none"}`}}>
                        <Sidebar setSelectedTheme={setSelectedTheme} handleFireAudio={handleFireAudio} />
                    </div>
                </div>
                <div className="sidebar-container">
                    <Sidebar setSelectedTheme={setSelectedTheme} handleFireAudio={handleFireAudio} />
                </div>
                <div className="content-container">
                    <div className="content-outer">
                        <img src={User} alt="user" className="user-image" /> 
                        <div className="content-info">
                            <div className="info-one">
                                <span className="content-name">Syed Taseer Shah</span>
                                <span className="content-time">Today at 2:24 PM</span>
                            </div>
                            <span className="content-words">{ children }</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}