import React from 'react';

const SearchIcon = ({width = 24, height = 24, color = "#7890B4"}) => {
    return (
        <svg id="search" width={width} height={height} viewBox="0 0 24 24" fill={color}
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 19C12.775 18.9996 14.4988 18.4054 15.897 17.312L19.586 21.001C19.9765 21.3915 20.6095 21.3915 21 21.001C21.3905 20.6105 21.3905 19.9775 21 19.587L17.311 15.898C18.405 14.4997 18.9996 12.7754 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19ZM11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11C5 7.691 7.691 5 11 5Z"
                fill="currentColor"/>
        </svg>
    );
};

export default SearchIcon;
