import React, {Component} from 'react';
import Counter from './counter/Counter';

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2">Reset
                </button>
                {this.props.counters.map(counter => (
                    <Counter
                        onIncrement={this.props.onIncrement}
                        onDecriment ={this.props.onDecriment}
                        onDelete={this.props.onDelete}
                        key={counter.id}
                        counter={counter}
                    />))}
            </div>
        );
    }
}

export default Counters;
