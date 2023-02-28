import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg';
import HeroCode from './HeroCode';

export default function Hero() {

    return (
        <>
            <div id="home" className="flex w-full md:h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative pt-16">
                <div className='md:w-3/6 z-10 flex flex-col items-center'>
                    <HeroCode />
                </div>
                <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                    <div className="flex flex-col w-full mt-8">
                        <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                        <h1 className="text-2xl font-bold">Solodko Viacheslav</h1>
                        <p className="text-xl font-bold text-gray-300">Front-end Developer</p>
                        <p className="text-md font-light text-gray-400 ">Enthusiastic and motivated self-learning in Information Technology. Interested in exploring about Computer Network, Cloud Computing, DevSecops, and Web Development. Now I am looking for more experience in my field.</p>
                    </div>

                    <ul className='flex mt-2 gap-4 items-center'>
                        <li>
                            <a href='https://github.com/nardxxx' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/slav.solodko' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/slava-solodko-b28457214' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center my-8 md-my-0'>
                <img src={hr} className="w-full h-2" alt="hr" />
            </div>
        </>
    )
}
