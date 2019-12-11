import React from 'react';
import Seats from '../../components/seats/Seats';

import info from './info-button.svg';

import './BookTicket.scss';


class BookTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      error: null,
      countItem: 0,
      validateMsg: null
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
    let { data, countItem, validateMsg } = this.state;
    const { available, choose } = data[key1]['data'][key2];
    if ((available && countItem < 6) || choose) {
      data[key1]['data'][key2]['choose'] = !choose;
      if (choose) {
        countItem--;
      } else {
        countItem++;
      }
      this.setState({ data, countItem });
    } else if (countItem >= 6 && validateMsg === null) {
      validateMsg = 'Một người chỉ được chọn tối đa 6 ghế.';
      this.setState({ validateMsg }, () => {
        setTimeout(() => {
          validateMsg = null;
          this.setState({ validateMsg })
        }, 3000);
      });
    }
  }

  render() {
    const { data, error, isLoaded, validateMsg } = this.state;
    return (
      <div className="container">
        <div className="header">
          <p className="title">Spider-man: Người nhện xa nhà</p>
          <p className="sub-title">C13 | 2D Vietnam sub</p>
        </div>

        <div className="screen">
          {
            validateMsg ? <div className="text-error">{validateMsg}</div> : ''
          }
        </div>

        <Seats
          onItemClick={this.handleChoose}
          data={data}
          error={error}
          isLoaded={isLoaded}
        ></Seats>

        <div className="note">
          <div className="child col-1">
            <div>
              <div className="box-1"></div> <p>Đã đặt</p>
            </div>
            <div>
              <div className="box-2"></div> <p>Đang chọn</p>
            </div>
          </div>
          <div className="child col-2">
            <div>
              <div className="box-1"></div> <p>Standard - 60.000đ</p>
            </div>
            <div>
              <div className="box-2"></div> <p>VIP - 90.000đ</p>
            </div>
            <div>
              <div className="box-3"></div> <p>Deluxe - 110.000đ</p>
            </div>
          </div>
          <div className="child col-3">
            <h1 className="total">180.000 <span className="currency">đ</span><img className="icon-info" src={info} alt="info" ></img></h1>
            <p>CGV Crescent Mall</p>
            <p>09:10-11:10 | 08/07/2019</p>
          </div>
        </div>

        <div className="checkout">
          <a href="void()" className="button" >
            Chọn combo
          </a>
          <a href="void()" className="button" >
            Thanh toán
          </a>
        </div>
      </div>
    )
  }
}
export default BookTicket