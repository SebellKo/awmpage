import React from 'react';
import '../css/main.css'

const Main = function() {
    return (
        <div className='main_wrapper'>
            <div className='name'>
                <span>Allways</span>
                <span>Movement.</span>
            </div>
            <div id='logoWrapper' className='logo'>
                <img src='logo_imgs/awm_logo(1).png' alt='logo'></img>
            </div>
        </div>
    );
}

export default Main