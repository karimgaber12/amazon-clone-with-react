import React from "react";
import Product from './Product'
import './Home.css'

function Home(){
        return(
            <div className="home">
                <div className="home_container">
                     <img className="home_image" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="new in amazon"></img>
                </div>

                <div className="home_row">
                    <Product id="6876" title = 'Playstation 5:This stand allows you to place your PS5This stand allows you to place your PS5 dissipation.' price = {1000} rating = {2} image = 'https://m.media-amazon.com/images/I/510uy80pN3S._AC_SX466_.jpg'/>
                    <Product id="5345" title = 'xbox 360:This stand allows you to place your PS5This stand allows you to place your PS5sipation.' price = {99.00} rating = {5} image = 'https://m.media-amazon.com/images/I/61yx3uRbbnL._SX522_.jpg'/>
                </div>
                <div className="home_row">
                <Product id="4324" title = 'xbox one:This stand allows you to place your PS5This stand allows you to place your PS5issipation.' price = {1000} rating = {4} image = 'https://m.media-amazon.com/images/I/61hnKcgB10L._SX522_.jpg'/>
                <Product id="12312" title = 'Playstation 1:This stand allows you to place your PS5This stand allows you to place your PS5dissipation.' price = {100} rating = {10} image = 'https://m.media-amazon.com/images/I/41X0WGDS5YL.jpg'/>
                <Product id="3123" title = 'Playstation 3:This stand allows you to place your PS5This stand allows you to place your PS5dissipation.' price = {123} rating = {5} image = 'https://m.media-amazon.com/images/I/31avPwAS-tL.jpg'/>
                </div>
                <div className="home_row">
                <Product id="2354" title = 'Playstation 2:This stand allows you to place your PS5This stand allows you to place your PS5' price = {1.22} rating = {3} image = 'https://m.media-amazon.com/images/I/41CXTY0481L.jpg'/>
                </div>

            </div>
        )
}

export default Home