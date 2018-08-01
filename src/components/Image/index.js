import React from 'react';
import { Img } from './styles';

export default class Image extends React.Component {
    render() {
        return (
            <Img src={this.props.src} />
        )
    }
}