import React from 'react';
import Seats from '../../components/seats/Seats';


import './BookTicket.scss';


class BookTicket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      error: null,
      countItem: 0
    };
  }

  componentDidMount() {
    fetch("/assets/dataSeats.json")
      .then(res => res.json())
      .then(
        (result) => {
          result.forEach(obj => {
            obj['data'].forEach(item => {
              item['choose'] = false
            });
          });
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  handleChoose = (key1, key2) => {
    let { data, countItem } = this.state;
    const { available, choose } = data[key1]['data'][key2];
    if (available && countItem < 6) {
      data[key1]['data'][key2]['choose'] = !choose;
      if (choose) {
        countItem--;
      } else {
        countItem++;
      }
      this.setState({ data, countItem });
    }
  }

  render() {
    const { data, error, isLoaded } = this.state;
    return (
      <div>
        <h1> BookTicket </h1>
        <div className="container">
          <div className="header">
            <p className="title">Spider-man: Người nhện xa nhà</p>
            <p className="sub-title">C13 | 2D Vietnam sub</p>
          </div>

          <div className="screen">
          </div>

          <Seats
            onItemClick={this.handleChoose}
            data={data}
            error={error}
            isLoaded={isLoaded}
          ></Seats>
        </div>
      </div>
    )
  }
}
export default BookTicket