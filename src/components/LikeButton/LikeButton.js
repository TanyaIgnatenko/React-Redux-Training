import React from 'react';
import './LikeButton.css';

export default class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    render() {
        const image = this.state.clicked ?
            require('../../assets/images/clicked-like.png') :
            require('../../assets/images/not-clicked-like.png');

        return (
            <input
                type='image'
                src={image}
                className='like'
                onClick={() => this.setState({clicked: !this.state.clicked})}
            />
        );
    }
}

