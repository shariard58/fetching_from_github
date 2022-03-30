import React from 'react'
import './header.css';
import { useEffect, useState } from 'react';

export default function Header(props) {


    const [userinfo, setUserInfo] = useState([])


    useEffect(() => {
        const url1 = "https://api.github.com/users/shariard58";

        const fetchData = async () => {
            try {
                const response = await fetch(url1);
                const json = await response.json();
                // console.log(json)

                setUserInfo(json)
            } catch (error) {
                console.log("error", error);
            }
        };




        fetchData();

    }, []);

    console.log(userinfo.avatar_url);


    return (
        <div className='header'>




            <div className="navbar">

                <div className="nav-logo ">

                    <img src={userinfo.avatar_url} alt="Logo" />

                </div>

                <div className="nav-heading ">

                    <h1> Shariar Mahmud </h1>

                </div>

                <div className="navbar-menu ">

                    <a href="#">Home </a>
                    <a href="#about-me-id">About Me</a>
                    <a href="#">Skills</a>
                    <a href="#">Contact Me </a>
                    <a href="#">More</a>



                </div>


            </div>

        </div>
    )
}
