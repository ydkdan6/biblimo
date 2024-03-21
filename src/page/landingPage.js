import React from 'react'
import HandleNextPage from '../component/redirect';
import image1 from './images/Credit-card.jpg';


export default function LandingPage() {
    
    return (
        <div className= "container">
            <div className="flex justify-center items-center mt-2">
                <img src={image1} alt= "Banner-image" />
            </div>
            <section className="justify-center items-center mt-1">
                <div className="flex flex-col items-center">
                <h2 className="w-46 text-bold text-2xl font-black text-black ">Swift, seamless global <br/>financial transactions.</h2>
                <p className="justify-center w-80 mt-4">World's fastest payment method for swift</p>
                <p>and efficient transactions</p>
                <HandleNextPage />
                </div>
            </section>
        </div>
    )
}