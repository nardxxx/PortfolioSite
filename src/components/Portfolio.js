import PortfolioCard from "./PortfolioCard.js"

import hr from "../assets/curve-hr.svg"
import images from "../images.js"

export default function Porftolio() {
    const projects = [
        {
            title: 'Marvel app',
            imgSrc: images.marvel,
            desc: 'Offers information and entertainment on the many Marvel characters and their stories, from superheroes to villains.',
            stack: 'React.js, Redux, Redux Toolkit, API calls',
            link: 'https://nardxxx.github.io/MarvelApp/'
        },
        {
            title: 'Netflix copy',
            imgSrc: images.netflix,
            desc: 'Allows users to manage their tasks by creating to-do lists, setting reminders, and tracking progress.',
            stack: 'React.js, Authentication, Redux, API calls',
            link: 'https://nardxxx.github.io/todo-list-app/'
        },
        {
            title: 'Todo app',
            imgSrc: images.todo,
            desc: 'Allows users to manage their tasks by creating to-do lists, setting reminders, and tracking progress.',
            stack: 'React.js, Material UI, LocalStorage',
            link: 'https://nardxxx.github.io/todo-list-app/'
        }

    ]

    return (
        <div id="portfolio" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-5">
                {projects.map((props) => {
                    const zoomed = props.title === 'Netflix copy' ? false : true;

                    return <PortfolioCard {...props} zoomed={zoomed} />
                })}
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
