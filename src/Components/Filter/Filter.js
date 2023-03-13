import React from 'react';
import './styles.css';
import links from './imageList';

// Create a function component.
function Filter() {
  return (
    <div className='filter'>
        {links.map((item, i) => {
            return (
            <div key={i} className='filter-item'>
                <img src={item.imgSrc} className='filter-img' />
                <p className='filter-label'>{item.label}</p>
            </div>
            );
        })}
    </div>
  );
}

// Export the Filter component.
export default Filter;