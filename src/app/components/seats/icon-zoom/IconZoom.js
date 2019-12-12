import React from 'react';

function IconZoom(props) {
    const { onExpandClick, icon } = props;
    return <img onClick={() => { onExpandClick() }} src={icon} alt="icon" className="icon-zoom"></img>;
}


export default IconZoom