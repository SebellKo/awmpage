import React, { useEffect } from 'react';
import '../css/goods.css'

const Goods = function() {
    useEffect(() => {
        const goodsWrapper = document.getElementById('goodsWrapper');
        const nineteenSS = document.getElementById('nineteenSS');
        const nineteenFW = document.getElementById('nineteenFW');
        const etc = document.getElementById('etc');
        const ssImgs = document.getElementById('ssImgs');
        const fwImgs = document.getElementById('fwImgs');
        const etcImgs = document.getElementById('etcImgs');
        const textGoods = document.getElementById('textGoods');
        const goodsContainer = document.getElementById('goodsContainer');

        let isSsClick = false;
        let isFwClick = false;
        let isEtcClick = false;
        let isScrollOn = false;
        nineteenSS.addEventListener('click', () => {
            if (isSsClick == false)
            {
                ssImgs.style.display = 'flex';
                setTimeout(() => {
                    ssImgs.style.transform = 'translateY(20px)'
                    ssImgs.style.opacity = '1';
                }, 500)
                
                isSsClick = true;
            }
            else if (isSsClick == true)
            {
                ssImgs.style.transform = 'translateY(0px)'
                ssImgs.style.opacity = '0';
                setTimeout(() => {
                    ssImgs.style.display = 'none'; 
                }, 500) 
                isSsClick = false; 
            }
        })
        nineteenFW.addEventListener('click', () => {
            if (isFwClick == false)
            {
                fwImgs.style.display = 'flex';
                setTimeout(() => {
                    fwImgs.style.transform = 'translateY(20px)'
                    fwImgs.style.opacity = '1';
                }, 500)
                isFwClick = true;
            }
            else if (isFwClick == true)
            {
                fwImgs.style.transform = 'translateY(0px)'
                fwImgs.style.opacity = '0';
                setTimeout(() => {
                    fwImgs.style.display = 'none'; 
                }, 1000)
                isFwClick = false; 
            }
        })
        etc.addEventListener('click', () => {
            if (isEtcClick == false)
            {
                etcImgs.style.display = 'flex';
                setTimeout(() => {
                    etcImgs.style.transform = 'translateY(20px)'
                    etcImgs.style.opacity = '1';
                }, 500)
                isEtcClick = true;
            }
            else if (isEtcClick == true)
            {
                etcImgs.style.transform = 'translateY(0px)'
                etcImgs.style.opacity = '0';
                setTimeout(() => {
                    etcImgs.style.display = 'none'; 
                }, 1000)
                isEtcClick = false; 
            }
        })
        document.addEventListener('scroll', function() {
            // console.log('window: ' + window.pageYOffset);
            // console.log('offset: ' + goodsWrapper.offsetTop);
            // console.log('top: ' + goodsWrapper.getBoundingClientRect().top);
            // console.log('bottom: ' + goodsWrapper.getBoundingClientRect().bottom);

            if (window.pageYOffset >= goodsWrapper.offsetTop/ 1.4 && isScrollOn == false) {
                window.scroll({top: goodsWrapper.offsetTop, left: 0, behavior: 'smooth'})
                isScrollOn = true;
            }
            if (window.pageYOffset == goodsWrapper.getBoundingClientRect().bottom)
            {
                isScrollOn = false;
            }
            if(goodsWrapper.getBoundingClientRect().top <= 0)
            {
                textGoods.style.transform = 'translateY(20px)'
                textGoods.style.opacity = '1';
                setTimeout(function(){
                    textGoods.style.transform = 'translateY(0px)'
                    textGoods.style.opacity = '0';
                    setTimeout(function() {
                        textGoods.style.display = 'none';
                        goodsContainer.style.display = 'block';
                        setTimeout(function() {
                            goodsContainer.style.opacity = '1';
                        }, 1000)
                    }, 500);
                }, 1500);
            }
        })
    }, [])
    return (
        <div id='goodsWrapper' className='goods_wrapper'>
            <div id='textGoods' className='text_goods'>만듭니다.</div>
            <div id='goodsContainer' className='goods_container'>
                <div className='sswrapper'>
                    <span id='nineteenSS'>19 S/S</span>
                    <div id='ssImgs'>
                        <img src='goods_imgs/ss/1.jpeg'></img>
                        <img src='goods_imgs/ss/2.jpeg'></img>
                        <img src='goods_imgs/ss/3.jpeg'></img>
                        <img src='goods_imgs/ss/4.jpeg'></img>
                    </div>
                </div>
                <div className='fwwrapper'>
                    <span id='nineteenFW'>19 F/W</span>
                    <div id='fwImgs'>
                        <img src='goods_imgs/fw/1.jpeg'></img>
                        <img src='goods_imgs/fw/2.jpeg'></img>
                        <img src='goods_imgs/fw/3.jpeg'></img>
                        <img src='goods_imgs/fw/4.jpeg'></img>
                        <img src='goods_imgs/fw/5.jpeg'></img>
                        <img src='goods_imgs/fw/6.jpeg'></img>
                    </div>
                </div>
                <div className='etcwrapper'>
                    <span id='etc'>ETC</span>
                    <div id='etcImgs'>
                        <img src='goods_imgs/etc/1.jpeg'></img>
                        <img src='goods_imgs/etc/2.jpeg'></img>
                        <img src='goods_imgs/etc/3.jpeg'></img>
                        <img src='goods_imgs/etc/4.jpeg'></img>
                        <img src='goods_imgs/etc/5.jpeg'></img>
                        <img src='goods_imgs/etc/6.jpeg'></img>
                        <img src='goods_imgs/etc/7.jpeg'></img>
                        <img src='goods_imgs/etc/8.jpeg'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goods