export default function PortfolioCard({ title, desc, imgSrc, stack, link, zoomed }) {

    return (
        <a href={link}>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
                <div
                    aria-label="image"
                    className="wrap overflow-hidden" style={{
                        background: `no-repeat url(${imgSrc}) center top/cover`,
                        backgroundSize: zoomed === true ? '130%' : '100% 105%',
                        padding: '0 0 55% 0',
                    }}>
                </div>
                <div className="mt-2">
                    <h1 className="font-bold md:text-xl">{title}</h1>
                    <p className="font-light md:text-lg md:leading-tight  ">{desc}</p>
                    <hr className="bg-zinc-400 mt-3 h-px border-none" />
                    <p className="font-light text-gray-400">{stack}</p>
                </div>
            </div>
        </a >
    )
}
