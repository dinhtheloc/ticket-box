import React from 'react';
import './Seat.scss'

class Seat extends React.PureComponent {

    render() {
        const { key1, key2, available, onClick, choose, type } = this.props;
        return <div onClick={() => { onClick(key1, key2) }}
            className={`seat-item ${type} ${available} ${choose}`}></div>;
    }
}

export default Seat