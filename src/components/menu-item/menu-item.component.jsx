import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (  //history and match prop came from 'withRouter' higher order component
    <div className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} >
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='title'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);