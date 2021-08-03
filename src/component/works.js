import React, { useEffect } from 'react';
import '../css/works.css'

const Works = function() {
    useEffect(() => {
        const worksWrapper = document.getElementById('worksWrapper');
        const textWorks = document.getElementById('textWorks');
        const worksContainer = document.getElementById('worksContainer');
        let isScrollOn = false;
        document.addEventListener('scroll', function(e) {
            // console.log('offset: ' + worksWrapper.offsetTop)
            // console.log('window: ' + window.pageYOffset);
            // console.log('top: ' + worksWrapper.getBoundingClientRect().top)
            if (window.pageYOffset >= worksWrapper.offsetTop /1.5 && isScrollOn == false) {
                window.scroll({top: worksWrapper.offsetTop, left: 0, behavior: 'smooth'})
                isScrollOn = true;
            }
            if (window.pageYOffset == worksWrapper.getBoundingClientRect().top)
            {
                isScrollOn = false;
            }
            if(worksWrapper.getBoundingClientRect().top <= 1)
            {
                textWorks.style.transform = 'translateY(20px)'
                textWorks.style.opacity = '1';
                setTimeout(function(){
                    textWorks.style.transform = 'translateY(0px)'
                    textWorks.style.opacity = '0';
                    setTimeout(function() {
                        textWorks.style.display = 'none';
                        worksContainer.style.display = 'flex';
                        setTimeout(function() {
                            worksContainer.style.opacity = '1';
                            worksContainer.scrollTo({left: -6000, behavior:'smooth'});
                        }, 1000)
                    }, 500);
                }, 1500);
            }
        })
        for (let i = 1; i < 38; i++) {
            const imgWrapper = document.createElement('div');
            const img = document.createElement('img');
            img.setAttribute('src', `imgs/${i}.jpeg`)
            imgWrapper.appendChild(img);
            worksContainer.appendChild(imgWrapper);
            if (i == 1) {
                imgWrapper.classList.add('first');
            }
            if (i == 37)
            {
                imgWrapper.classList.add('last');
                imgWrapper.setAttribute('id', 'last');
            }
        }
        const imgLast = document.getElementById('last');
        let isDown = false;
        let startX;
        let scrollLeft;
        worksContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - worksContainer.offsetLeft;
            worksContainer.classList.add('active');
            scrollLeft = worksContainer.scrollLeft;
        });
        worksContainer.addEventListener('mouseleave', () => {
            isDown = false;
            worksContainer.classList.remove('active');
        });
        worksContainer.addEventListener('mouseup', () => {
            isDown = false;
            worksContainer.classList.remove('active');
        });
        worksContainer.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - worksContainer.offsetLeft;
            const walk = (x - startX) * 3;
            worksContainer.scrollLeft = scrollLeft - walk;
        });
    }, []);
    return (
        <div id='worksWrapper' className='works_wrapper'>
            <div id='textWorks' className='text_works'>작품을,</div>
            <div id='worksContainer' className='works_container'>
                
            </div>
        </div>
    );
}

export default Works