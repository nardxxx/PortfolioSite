import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"
import './slick.css'

import javascript from "../assets/skills/javascript.svg"
import tailwind from "../assets/skills/tailwind.svg"
import html from "../assets/skills/html5.svg"
import react from "../assets/skills/react.svg"
import css from "../assets/skills/css.svg"
import git from "../assets/skills/git.svg"

import hr from "../assets/curve-hr.svg"
import { useEffect, useState } from 'react';

export default function Skills() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slider = document.querySelector('.slick-slider');
        const slides = slider.querySelectorAll('.slick-slide');
        const lastSlide = slides[slides.length - 1];

        lastSlide.style.marginRight = currentSlide === slides.length - 1 ? '0' : '';
    }, [currentSlide]);

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        afterChange: (index) => {
            setCurrentSlide(index);
        },
    };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <SkillCard name="Tailwind" experience="1/2 year" img={tailwind} />
                    <SkillCard name="React.js" experience="1.5 years" img={react} />
                    <SkillCard name="HTML" experience="4 years" img={html} />
                    <SkillCard name="CSS" experience="4 years" img={css} />
                    <SkillCard name="JavaScript" experience="2 years" img={javascript} />
                    <SkillCard name="Git" experience="1 years" img={git} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}