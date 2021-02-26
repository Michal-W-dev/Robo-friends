import React, { Component } from 'react';
import Card from './Card';
import { Scroll } from './Scroll'
import './CardDeck.css';

const url = 'https://robohash.org/';

class CardDeck extends Component {
    render() {
        return (
            <Scroll>
                <div className="CardDeck">
                    {this.props.robots.map((el, i) => <Card key={i} src={url + (el.id + 60) + '?set=set3'} name={el.name} email={el.email} />)}
                </div>
            </Scroll>
        )
    }
}

export default CardDeck;