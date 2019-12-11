import React from 'react';
import Seat from './seat/Seat';
import './Seats.scss'

class Seats extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { error, isLoaded, data, onItemClick } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="seats">
                    {
                        
                        data.map((items, key1) => {
                            console.log('123')
                            return (
                                <div className="seats" key={items.name}>
                                    <div className="row-name">{items.name}</div>
                                    {
                                        items['data'].map((item, key2) => {
                                            const available = item.available ? 'available' : 'not-available';
                                            const choose = item.choose ? 'choose' : '';
                                            console.log('123')
                                            return (
                                                <Seat
                                                    key1={key1}
                                                    row={items.name}
                                                    key2={key2}
                                                    clicked={item.available}
                                                    onClick={onItemClick}
                                                    choose={choose}
                                                    available={available} key={key2} type={item.type}></Seat>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
    }
}

export default Seats