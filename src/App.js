
import { useEffect, useState } from 'react';
import './App.css';
import Info from './components/info';
import Body from './components/Body/body';
import footer from './components/Footer/footer';
import Header from './components/Header/header';


function App() {


  // const getData = () => {
  //   fetch('https://api.github.com/users/shariard58')
  //     .then(function (res) {

  //       return res.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //     })


  // }


  // useEffect(() => {
  //   fetch('https://api.github.com/users/shariard58')
  //     .then(function (res) {

  //       return res.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //     })
  // }, []);



  return (


    <div className="App">
      <Header />
      <Info />
      <Body />
    </div>
  );
}

export default App;
