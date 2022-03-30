import React from "react";
import { useEffect, useState } from 'react';
import './info.css'


const Info = () => {


    const [products, setProducts] = useState([])
    // const [userinfo, setUserInfo] = useState([])



    useEffect(() => {
        const url = "https://api.github.com/users/shariard58/repos";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setProducts(json)
            } catch (error) {
                console.log("error", error);
            }
        };




        fetchData();
    }, []);





    // useEffect(() => {
    //     const url1 = "https://api.github.com/users/shariard58";

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url1);
    //             const json = await response.json();
    //             // console.log(json)

    //             setUserInfo(json)
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };




    //     fetchData();

    // }, []);

    // console.log(userinfo.avatar_url);








    return (
        <div className="cardcontainer">
            <div className="row">
                {
                    products.map(post => {
                        return (
                            <div className="column">

                                <div className="card">

                                    <img src="/assests/CardImage.png" alt="Logo" />

                                    {/* <img src={userinfo.avatar_url} alt="Logo" /> */}

                                    <div className="card-body">

                                        <div className="card-title">
                                            <h3> {post.id}</h3>
                                            <h1>{post.name}</h1>
                                        </div>

                                        <div className="card-desc">
                                            <h2>
                                                <a href={post.clone_url}> github Link</a>
                                            </h2>
                                        </div>


                                    </div>

                                </div>
                            </div>

                        )
                    })
                }

            </div>



        </div >
    );
}

export default Info;