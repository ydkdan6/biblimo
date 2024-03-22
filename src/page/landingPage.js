import React from 'react'
import HandleNextPage from '../component/redirect';
import image1 from './images/christ.jpg';
import '../Utility/style/style.css'


export default function LandingPage() {
    
    return (
        <div className= "wrapper w-76">
            <div className="flex justify-center items-center mt-2">
                <img src={image1} alt= "Banner-image" />
            </div>
            <section className="justify-center items-center mt-1">
                <div className="flex flex-col items-center">
                <h2 className="txt mt-3 text-bold text-2xl items-center font-black text-black ">Search Bible Verses,  Join Our Community.</h2>
                <p className=" txt2 justify-center w-80 mt-9">Join Us in Biblimo, Let us build a Christian Community,
                Where the knowledge of Christ can be spread.</p>
                <HandleNextPage />
                </div>
            </section>
        </div>
    )
}