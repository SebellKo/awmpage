import React, { useEffect } from 'react';
import '../css/author.css'
import AuthorPageOne from './author_page_one';
import AuthorPageThree from './author_page_three';
import AuthorPageTwo from './author_page_two';

const Author = () => {
    // const pageWrapper = document.getElementById('pageWrapper');
    useEffect(() => {
        const textUs = document.getElementById('textUs');
        const authorWrapper = document.getElementById('authorWrapper');
        const page = document.getElementById('page');
        let isScrollOn = false;
        document.addEventListener('scroll', function() {
            // console.log('wrapperoffset: ' + authorWrapper.offsetTop)
            // console.log('wrapper: ' + authorWrapper.getBoundingClientRect().top)
            // console.log('window: ' + window.pageYOffset)
            if (window.pageYOffset >= authorWrapper.offsetTop / 5 && isScrollOn == false) {
                window.scroll({top: authorWrapper.offsetTop, left: 0, behavior: 'smooth'})
                isScrollOn = true;
            }
            if (window.pageYOffset == 0)
            {
                isScrollOn = false;
            }
            if(authorWrapper.getBoundingClientRect().top <= 0)
            {
                textUs.style.transform = 'translateY(20px)'
                textUs.style.opacity = '1';
                setTimeout(function(){
                    textUs.style.transform = 'translateY(0px)'
                    textUs.style.opacity = '0';
                    setTimeout(function() {
                        textUs.style.display = 'none';
                        page.style.display = 'block';
                        setTimeout(function() {
                            page.style.opacity = '1';
                        }, 1000)
                    }, 500);
                }, 1500);
            }
        })
    }, []);
    return (
        <div id='authorWrapper' className='author_wrapper'>
            <div id='textUs' className='text_us'>우리는,</div>
            <div id='page' className='page'>
                <AuthorPageOne></AuthorPageOne>
                <AuthorPageTwo></AuthorPageTwo>
                <AuthorPageThree></AuthorPageThree>
            </div>
        </div>
    );
}

export default Author