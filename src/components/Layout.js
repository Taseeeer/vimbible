import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";

import "../css/layout.css";
import User from "../assets/me.png";

import { GoPrimitiveDot } from "react-icons/go";
import { BsBatteryCharging } from "react-icons/bs";


export default function Layout() {

    const classRef = useRef(null);


    const setSelectedTheme = (color) => {

        switch(color) {
            case "purple":
                return classRef.current.className = "layout purple-mode";

            case "vim":
                return classRef.current.className = "layout vim-mode";

            case "basic":
                return classRef.current.className = "layout basic-mode";

            case "fire":
                return classRef.current.className = "layout fire-mode";

            case "dark":
                return classRef.current.className = "layout dark-mode";

            case "default":
                return classRef.current.className = "layout";
        }
    }

    return (
        <div className="layout" ref={classRef}>
            <h1 className="main-heading">YOUR HOLY PLACE TO LEARN VIM.</h1>
            <div className="nav-line">
                <BsBatteryCharging className="nav-dots battery" />
                <GoPrimitiveDot className="nav-dots purple" onClick={() => setSelectedTheme('purple')} />
                <GoPrimitiveDot className="nav-dots green" onClick={() => setSelectedTheme('vim')} />
                <GoPrimitiveDot className="nav-dots white" onClick={() => setSelectedTheme('basic')} />
            </div>
            <div className="outer-container">
                <div className="sidebar-container">
                    <Sidebar setSelectedTheme={setSelectedTheme} />
                </div>
                <div className="content-container">
                    <div className="content-outer">
                        <img src={User} alt="user" style={{width: "40px", height: "40px", borderRadius: "50%"}} /> 
                        <div className="content-info">
                            <div className="info-one">
                                <span className="content-name">Syed Taseer Shah</span>
                                <span className="content-time">Today at 2:24 PM</span>
                            </div>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                            <span className="content-words">Get the best Results for Harvard Leadership Certificate. Find what you are looking for! 99% Match on Harvard Leadership Certificate. Find Here - Free, Private and Secure. Unlimited Access. Results & Answers. Always Facts. The Best Resources. Privacy Friendly.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}