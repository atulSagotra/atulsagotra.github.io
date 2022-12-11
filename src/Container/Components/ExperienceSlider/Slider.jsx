import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import ExperienceCard from './ExperienceCard'
// import { useEffect } from 'react'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    // useEffect(() => {
    //     setTimeout(()=> {
    //         if(slideIndex !== dataSlider.length){
    //             setSlideIndex(slideIndex + 1)
    //         } 
    //         else if (slideIndex === dataSlider.length){
    //             setSlideIndex(1)
    //         }
    //     }, 3000)
    // }, [slideIndex])

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
        <div className="container-slider text-left">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim rounded-xl" : "slide rounded-xl"}
                    >
                        <ExperienceCard props = {obj}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        </div>
        <div className="container-dots">
            {Array.from({length: dataSlider.length}).map((item, index) => (
                <div 
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
        </div>
        </>
    )
}