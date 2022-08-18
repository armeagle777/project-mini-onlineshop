import React from "react";
import './App.css';
import Counters from "./counters/Counters";
import Navbar from "./Navbar";

class App extends React.Component {

  state = {
    counters: [
      { id: 1, value: 0, productName: 'Basic T-shirt',size:'M',color:'Grey', imgUrl: 'https://image.made-in-china.com/2f0j00gpLRHTArqFkt/Custom-T-Shirts-100-Cotton-Men-Tshirt-Tee-Shirt-Printing-T-Shirt-Polo-T-Shirt-for-Men-Women-Plain-T-Shirt.jpg', price: 22 },
      { id: 2, value: 2, productName: 'Jacket',size:'M',color:'Pink',imgUrl: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/429280/item/goods_16_429280.jpg?width=1600&impolicy=quality_75', price: 12 },
      { id: 3, value: 0, productName: 'Jumpsuit',size:'M',color:'Red',imgUrl: 'https://i.pinimg.com/564x/b5/01/a3/b501a3af3cb5d9ed4215dfb0f54d2d01.jpg', price: 13 },
      { id: 4, value: 3, productName: 'Sweater',size:'M',color:'White',imgUrl: 'https://cdn.shopify.com/s/files/1/2445/4975/products/1410039_outerknown_NostalgicSweater_OBR_F_pdp_590x712.jpg?v=1606366955', price: 10 },
      { id: 5, value: 0, productName: 'Blouse',size:'M',color:'Black',imgUrl: 'https://i0.codibook.net/files/1978071613838/eeac8a76815298a8/1204506282.jpg', price: 50 },
    ]
  }
  handleIncrement = ( counter ) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf( counter );
    counters[ index ] = { ...counter };
    counters[ index ].value++;
    this.setState( { counters } );
  }
  handleDecriment = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf( counter );
    counters[ index ] = { ...counter };
    if ( counters[ index ].value > 0 ) {
      counters[ index ].value--
    }

    this.setState( { counters } );
  }

  handleDelete = ( counterId ) => {
    const counters = this.state.counters.filter( c => c.id !== counterId );
    this.setState( { counters } );
  }
  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c;
    } );
    this.setState( { counters } );
  }

  render () {
    return (
      <React.Fragment>
        <Navbar totalCounters={ this.state.counters.filter( c => c.value > 0 ).length }/>
        <main className="container">
          <Counters
            counters={ this.state.counters }
            onReset={ this.handleReset }
            onDelete={ this.handleDelete }
            onIncrement={ this.handleIncrement }
            onDecriment={ this.handleDecriment }/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
