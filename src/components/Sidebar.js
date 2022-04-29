import React, { useState } from "react";

import { HiSun, HiMoon } from "react-icons/hi";
import { GoSettings, GoFlame } from "react-icons/go";
import { BsHeadset, BsBatteryCharging } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";

import "../css/sidebar.css";
import User from "../assets/me.png";

export default function Sidebar({ setSelectedTheme }) {

    return (
        <section className="sidebar">
            <div className="sidebar-one">
                <span className="sidebar-one-options">
                    <HiSun onClick={() => setSelectedTheme('default')} />
                </span>
                <span className="sidebar-one-options">
                    <HiMoon onClick={() => setSelectedTheme('dark')} />
                </span>
                <span className="sidebar-one-options">
                    <GoFlame onClick={() => setSelectedTheme('fire')} />
                </span>
            </div>
            <div className="sidebar-two">
                <section className="sidebar-two-header">
                    <div className="sidebar-two-header-inner">
                        <GiOpenBook />
                        <span>Content</span>
                    </div>
                </section>
                <ul className="sidebar-two-routes">
                    <span>
                        About
                    </span>
                    <span>
                        Movement
                    </span>
                    <span>
                        <HiMoon /> Moon
                    </span>
                    <span>
                        <HiMoon /> Moon
                    </span>
                    <span>
                        <HiMoon /> Moon
                    </span>
                    <span>
                        <HiMoon /> Moon
                    </span>
                    <span>Insert</span>
                </ul>
                <section className="sidebar-two-footer">
                    <span>
                        <img src={User} alt="user" className="user-img" />
                    </span>
                    <div>
                        <GoSettings />
                        <BsHeadset />
                    </div>
                </section>
            </div>
        </section>
    )
}