import React from 'react';
import GetPlayer from '../../components/GetPlayer/GetPlayer';
import Nav from '../../components/Nav/Nav';
import './HomePage.scss'

const HomePage = () => {
    return (
        <div className='HomePage-container'>
            
            
            <header>This is Home Page</header>
            <div className='homePage-player'>
                <GetPlayer setPlayerID={undefined} />

            </div>
            
        </div>
    );
};

export default HomePage;