import React from 'react'; 
import App from './App';
import './homepage.style.scss';

const HomePage=()=>(

<div className='homepage'>
    <div className='directory-menu'>
        
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>Laptops</h1>
                <span className='subtitles'>shop now</span>
            </div>
        </div>





        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>Cellphones</h1>
                <span className='subtitles'>shop now</span>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>DIY</h1>
                <span className='subtitles'>shop now</span>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>Desktops and NUC</h1>
                <span className='subtitles'>shop now</span>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>Parts</h1>
                <span className='subtitles'>shop now</span>
            </div>
        </div>



    </div>
</div>


);

export default HomePage;