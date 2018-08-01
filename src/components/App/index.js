import React from 'react';
import Image from '../Image';
import Search from '../SearchBar';
import { inject, observer } from 'mobx-react';

@inject('imageStore')
@observer
class App extends React.Component {
    render() {
        const { imageStore } = this.props;
        return (
            <div>
                <Search />
                {imageStore.links.map(link => {
                    return <Image src={link} key={Math.random()}/>
                })}
            </div>
        )
    }
}

export default App;