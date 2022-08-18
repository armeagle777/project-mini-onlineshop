import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import './counter.css'

class Counter extends Component {
  render (  ) {
    const { color, price,id,value, imgUrl, productName, size } = this.props.counter
    return (
      <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
        <div className="mr-1"><img className="rounded" alt="img" src={ imgUrl } width="70"/>
        </div>
        <div className="d-flex flex-column align-items-center product-details"><span
          className="font-weight-bold">{ productName }</span>
          <div className="d-flex flex-row product-desc">
            <div className="size mr-1"><span className="text-grey">Size:</span><span
              className="font-weight-bold">&nbsp;{ size },</span></div>
            <div className="color"><span className="text-grey">Color:</span><span
              className="font-weight-bold">&nbsp;{ color }</span></div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center qty">
          <button onClick={ () => this.props.onDecriment( this.props.counter ) } className='btn btn-warning btn-sm'>
            <FontAwesomeIcon icon={ faMinus }/></button>
          <h5 className="text-grey mt-1 mr-1 ml-1">{ value }</h5>
          <button onClick={ () => this.props.onIncrement( this.props.counter ) } className='btn btn-success btn-sm'>
            <FontAwesomeIcon icon={ faPlus }/></button>
        </div>
        <div>
          <h5 className="text-grey">${ price }</h5>
        </div>
        <div className="d-flex align-items-center">
          <button onClick={ () => this.props.onDelete( id ) } className="btn btn-danger btn-sm">
            <FontAwesomeIcon icon={ faTrash }/></button>
        </div>
      </div>
    );
  }

}

export default Counter;

