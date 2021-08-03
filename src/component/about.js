import React, { useEffect } from 'react';
import '../css/about.css'

const About = function() {
    useEffect(() => {
        const aboutWrapper = document.getElementById('aboutWrapper');
        const textAbout = document.getElementById('textAbout');
        const aboutContainer = document.getElementById('aboutContainer');

        let isScrollOn = false;
        document.addEventListener('scroll', function() {
            console.log('window: ' + window.pageYOffset);
            console.log('offset: ' + aboutWrapper.offsetTop);
            console.log('top: ' + aboutWrapper.getBoundingClientRect().top);
            console.log('bottom: ' + aboutWrapper.getBoundingClientRect().bottom);
            if (window.pageYOffset >= aboutWrapper.offsetTop / 1.3 && isScrollOn == false) {
                window.scroll({top: aboutWrapper.offsetTop, left: 0, behavior: 'smooth'})
                isScrollOn = true;
            }
            if (aboutWrapper.getBoundingClientRect().top * 2 == aboutWrapper.getBoundingClientRect().bottom)
            {
                isScrollOn = false;
            }
            if(aboutWrapper.getBoundingClientRect().top <= 0)
            {
                textAbout.style.transform = 'translateY(20px)'
                textAbout.style.opacity = '1';
                setTimeout(function(){
                    textAbout.style.transform = 'translateY(0px)'
                    textAbout.style.opacity = '0';
                    setTimeout(function() {
                        textAbout.style.display = 'none';
                        aboutContainer.style.display = 'flex';
                        setTimeout(function() {
                            aboutContainer.style.opacity = '1';
                        }, 1000)
                    }, 500);
                }, 1500);
            }
        })
        
    }, [])
    return (
        <div id='aboutWrapper' className='about_wrapper'>
            <div id='textAbout' className='text_about'>Allways Movement.</div>
            <div id = 'aboutContainer'className='about_container'>
                <div className='img_wrapper'>
                    <img src='logo_imgs/1.jpeg'></img>
                </div>
                <div className='detail'>
                    <a href='https://www.instagram.com/allways_movement_official/'>
                        <p>𝐀𝐋𝐋𝐖𝐀𝐘𝐒 𝐌𝐎𝐕𝐄𝐌𝐄𝐍𝐓™</p>
                    </a>
                    <p>
                        “Always, All ways.”<br></br>
                        우린 멈추지 않고 항상 움직이며 다양한 방법으로 예술을 표현한다.<br></br>
                        We strive without rest in order to express our art in varieties of ways.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;