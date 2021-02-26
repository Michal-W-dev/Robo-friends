import { Component } from 'react';
import './SearchBox.css';



class SearchBox extends Component {
    render() {
        return (
            <div className="SearchBox">
                <label htmlFor="search">Search friend:</label>
                <input id="search" type='text' placeholder=" name" onChange={this.props.inputChange} />
            </div>
        )
    }
}

export default SearchBox;
