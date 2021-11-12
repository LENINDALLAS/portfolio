import React, { useRef, useEffect } from 'react';
import about_pic from '../images/about_pic.JPG';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const data = {
    labels: ['Javascript', 'HTML', 'CSS/Sass', 'React JS/Redux', 'Firebase', 'Mongo DB', 'GIT', 'Node JS/Express', 'Heroku/Netlify'],

    datasets: [
        {
            label: '%',
            data: [97, 97, 97, 95, 70, 80, 90, 70, 80],
            backgroundColor: [
                'rgba(255, 255, 0, 1)',
                'rgba(255, 75, 0, 1)',
                'rgba(67, 73, 243, 1)',
                'rgba(30, 161, 181, 1)',
                'rgba(255, 114, 0, 1)',
                'rgba(0, 195, 67, 1)',
                'rgba(220, 4, 92, 1)',
                'rgba(190, 28, 28, 1)',
                'rgba(19, 169, 170, 1)',

            ],
            borderColor: [
                'rgba(255, 255, 0, 1)',
                'rgba(255, 75, 0, 1)',
                'rgba(67, 73, 243, 1)',
                'rgba(30, 161, 181, 1)',
                'rgba(255, 114, 0, 1)',
                'rgba(0, 195, 67, 1)',
                'rgba(220, 4, 92, 1)',
                'rgba(190, 28, 28, 1)',
                'rgba(19, 169, 170, 1)',


            ],

            borderWidth: 5,
        },
    ],
};

const options = {

    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
        bar: {
            borderWidth: 3,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    size: 20
                },
                color: '#000'
            },
        },

        title: {
            display: false,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};
function About(props) {

    const titleRef = useRef();

    const handleScroll = () => {
        titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const viewMyWork = useSelector(state => state.viewMyWork);

    useEffect(() => {
        handleScroll();
    }, [viewMyWork]);

    return (
        <div className="aboutContainer">
            <div className='flexedBox' ref={titleRef}>
                <div className="split1"></div>
                <div className="split2"></div>
                <div className="split3"></div>
            </div>
            <div className='modalContainer' >
                <h1 className='slideHeading' ><u>About</u></h1>
                <div className='aboutLeft'>
                    <div className='picContainer'>
                        <img src={about_pic} alt='self pic' className='pic' />

                    </div>
                    <p className='aboutIntro'>
                        I'm a MERN stack Developer from India,<br /><br />
                        I have serious passion for web development  <br /> making your
                        websites dynamic and user friendly<br /> for end users.<br />
                        Opt me, let's make something special.
                    </p>
                </div>
                <div className='aboutRight'>
                    <div className='graphHeading'>
                        <u>skills</u>
                    </div>
                    <div className='doughnutGraph'>
                        <Bar data={data} options={options} width={100} fontColor={'#000'}
                            height={60} />

                    </div>

                </div>

            </div>


        </div>
    );
}

export default About;