import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import shape1 from '../images/blob1.svg';
import shape2 from '../images/blob2.svg';
import shape3 from '../images/blob3.svg';
import shape5 from '../images/blob5.svg';
import shape6 from '../images/blob6.svg';
import shape7 from '../images/blob6.svg';
import { VIEWMYWORK } from '../redux/constants';



function Welcome(props) {

    // console.log(props, 'props')
    const dispatch = useDispatch();

    const [hoverIcon, setHoverIcon] = useState('');


    const handleHover = () => {
        // console.log('working');
        setHoverIcon(<i class="fas fa-arrow-down"></i>);
    }

    const handleLeave = () => {
        setHoverIcon('')
    }

    const handleView = () => {
        // console.log('clicke')
        dispatch({
            type: VIEWMYWORK,
            payload: true
        })
    }

    return (
        <div className='welcome'>
            <img src={shape1} alt='shape1' className='blob1' />
            <img src={shape5} alt='shape5' className='blob5' />
            <img src={shape6} alt='shape6' className='blob6' />
            <img src={shape7} alt='shape7' className='blob7' />


            <span className='welcome-text'>
                <p>Hello, I'm <a href className='name-color'>Lenin Dallas L,</a></p><br />
                <p>I'm a MERN stack developer.</p><br />
                <Link to='/about' className='text-link' >
                    <span className='view-button' onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleView}>View my work </span><br /><br />
                </Link>
                {hoverIcon}
            </span>

            <img src={shape3} alt='shape3' className='blob3' />

            <img src={shape2} alt='shape2' className='blob2' />
        </div>
    );
}

export default Welcome;