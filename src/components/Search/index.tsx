import React from 'react';
import './styles.scss';

export default class Search extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            city: '',
        };
        this.changeValue = this.changeValue.bind(this);
    }

    handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            console.log('hit enter: ' + this.state);
            this.props.onChange(this.state.city);
        }
    }

    changeValue(event: any) {
        this.setState({ city: event.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" className="search-tool" placeholder="Enter city" onChange={this.changeValue} onKeyPress={this.handleKeyPress} />
            </div >
        )
    }
}
