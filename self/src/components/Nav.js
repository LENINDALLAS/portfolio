import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CONTACT, PORTFOLIO } from '../redux/constants';

function Nav() {

    const dispatch = useDispatch();

    const scrollFocus = (e) => {
        switch (e) {
            case 'portfolio':
                dispatch({
                    type: PORTFOLIO,
                    payload: true
                });
                break;
            case 'contact':
                dispatch({
                    type: CONTACT,
                    payload: true
                })
                break;
            default:
                return
        }

    }

    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(true);
    }

    const handleNone = () => {
        setVisible(false);
    }

    // console.log(visible)
    return (
        <nav className='navContainer'>
            {
                (visible === false) ?
                    (<i class="fas fa-bars" onClick={handleVisible}></i>) :
                    (<i class="fas fa-times" onClick={handleNone}></i>)
            }

            <Link to='/contact' className='text-link' onClick={() => scrollFocus('contact')}>
                <a href className={visible === false ? 'nav__about' : 'nav_about_visible'}>Contact</a>
            </Link>
            <Link to='/portfolio' className='text-link' onClick={() => scrollFocus('portfolio')}>
                <a href className={visible === false ? 'nav__about' : 'nav_about_visible'}>Portfolio</a>
            </Link>
            <Link to='/about' className='text-link'>
                <a href className={visible === false ? 'nav__about' : 'nav_about_visible'}>About</a>
            </Link>
            <Link to='/' className='text-link'>
                <a href className={visible === false ? 'nav__about' : 'nav_about_visible'}>Home</a>
            </Link>

        </nav>
    )
}

export default Nav