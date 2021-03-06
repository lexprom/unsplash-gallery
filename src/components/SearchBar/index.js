import React from 'react';
import { inject, observer } from 'mobx-react';
import SearchBar from 'material-ui-search-bar';

@inject('imageStore')
@observer
class Search extends React.Component {
    onClick = () => {
        const { imageStore } = this.props;
        imageStore.fetchImages();
    }

    handleChange = (inputText) => {
        const { imageStore } = this.props;
        imageStore.setInput(inputText);
    }

    render() {
        const { imageStore } = this.props;
        return (
            <SearchBar value={imageStore.inputValue} onChange={this.handleChange} onRequestSearch={this.onClick} style={{
                margin: '0 auto'
              }}/>
        )
    }
}

export default Search;

