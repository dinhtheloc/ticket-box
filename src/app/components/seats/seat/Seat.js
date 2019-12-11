import React from 'react';
import './Seat.scss'

class Seat extends React.PureComponent {

    render() {
        const { key1, key2, row, available, onClick, choose, type } = this.props;
        return <div onClick={() => { onClick(key1, key2) }}
            className={`seat-item ${type} ${available} ${choose}`}>
            {choose === '' ? '' : (<span>{row}{key2 + 1}</span>)}
        </div>;
    }
}

export default Seat