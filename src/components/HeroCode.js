import React, { useEffect, useRef, useState } from 'react';

const HeroCode = () => {
    let codeBlockRef = useRef(null);

    const [width, setWidth] = useState('0px')

    const dotStyle = {
        width: '18px',
        height: '18px'
    }

    useEffect(() => {
        if (codeBlockRef.current !== null) {
            setWidth(codeBlockRef.current.offsetWidth + 0.8);
        }

        window.addEventListener('resize', () => {
            setWidth(codeBlockRef.current.offsetWidth + 0.5);
        })
    }, [codeBlockRef])

    return (
        <>
            <div
                aria-label='topShape'
                style={{
                    borderStyle: 'solid',
                    borderColor: 'rgb(63, 63, 105) transparent rgb(63, 63, 105) transparent',
                    borderWidth: `0px 0px 30px ${width + 'px'}`,
                    borderTopRightRadius: '20px',
                    borderBottomLeftRadius: '10px',
                    width: `${width}`,
                }}>
            </div>
            <div ref={codeBlockRef}
                className='p-12 w-full relative flex justify-center align-center'
                style={{
                    'backgroundColor': 'rgb(63, 63, 105)',
                    'borderRadius': '10px 0px 10px 0',
                }}>


                <div className="p-5 rounded w-full"
                    style={{ 'backgroundColor': 'rgb(1, 22, 39)', }}
                // data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"
                // 
                >
                    <div aria-label='dots' className="flex align-center gap-4 mb-8">
                        <div aria-label='dot' className="rounded-full" style={{
                            ...dotStyle,
                            'backgroundColor': 'rgb(255, 95, 86)'
                        }}></div>
                        <div aria-label='dot' className="rounded-full" style={{
                            ...dotStyle,
                            'backgroundColor': 'rgb(255, 189, 46)'
                        }}></div>
                        <div aria-label='dot' className="rounded-full" style={{
                            ...dotStyle,
                            'backgroundColor': 'rgb(39, 201, 63)'
                        }}></div>
                    </div>
                    <pre className="text-white">
                        <code className="font-mono text-xm">
                            <h1 className="text-gray-400">
                                <span style={{ fontStyle: 'italic', 'color': 'rgb(174, 130, 209)' }}>let </span>
                                <span style={{ 'color': 'rgb(114, 151, 227)' }}>{'me '}</span>
                                <span style={{ 'color': 'rgb(174, 130, 209)' }}>= </span>
                                <span>{`{`}</span>
                            </h1>
                            <p className="text-gray-300 pl-4">name: <span style={{ 'color': 'rgb(225, 188, 136)' }}>"Solodko Viacheslav"</span>,</p>
                            <p className="text-gray-300 pl-4">code: <span style={{ 'color': 'rgb(225, 188, 136)' }}>["JavaScript", "CMD"]</span>,</p>
                            <p className="text-gray-300 pl-4">web: <span style={{ 'color': 'rgb(225, 188, 136)' }}>["React.js", "Tailwind", "Material UI"]</span>,</p>
                            <p className="text-gray-300 pl-4">cloud: <span style={{ 'color': 'rgb(225, 188, 136)' }}>["Heroku", "GitHub pages"]</span>,</p>
                            <p className="text-gray-300 pl-4">devops: <span style={{ 'color': 'rgb(225, 188, 136)' }}>["Git", "GitHub", "Google Cloud Platform"]</span></p>
                            <h1 className="text-gray-400">{`}`}</h1>
                        </code>
                    </pre>

                </div>
            </div>
            <div
                aria-label='bottomShape'
                style={{
                    borderStyle: 'solid',
                    borderColor: 'rgb(63, 63, 105) transparent rgb(63, 63, 105) transparent',
                    borderWidth: `30px ${width + 'px'} 0px 0px`,
                    width: `${width}`,
                    borderBottomLeftRadius: '20px',
                    borderTopRightRadius: '10px',
                }}>

            </div>
        </>
    );
};

export default HeroCode;