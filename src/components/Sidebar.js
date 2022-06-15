import React from "react";

import { HiSun, HiMoon } from "react-icons/hi";
import { GoSettings, GoFlame } from "react-icons/go";
import { BsHeadset } from "react-icons/bs";
import { DiVim } from "react-icons/di";

import "../css/sidebar.css";
import User from "../assets/me.png";
import { Link } from "gatsby";

export default function Sidebar({ setSelectedTheme, handleFireAudio }) {

    const setFireTheme = () => {
        setTimeout(() => {
            setSelectedTheme('fire');
        }, 300);
        handleFireAudio();
    }

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
                    <GoFlame onClick={setFireTheme} />
                </span>
            </div>
            <div className="sidebar-two">
                <section className="sidebar-two-header">
                    <div className="sidebar-two-header-inner">
                        <span>Content</span>
                    </div>
                </section>
                <ul className="sidebar-two-routes">
                    <Link to="/blog">
                        <span>Blog</span>
                    </Link>
                    <Link to="/about">
                        <span>About</span>
                    </Link>
                    <Link to="/insert">
                        <span>Insert</span>
                    </Link>
                    <Link to="/update">
                        <span>Delete</span>
                    </Link>
                    <Link to="/delete">
                        <span>Update</span>
                    </Link>
                    <Link to="/code">
                        <span style={{padding: "0.5rem 2rem"}}>
                                <DiVim style={{fontSize: "2rem"}} />
                        </span>
                    </Link>
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