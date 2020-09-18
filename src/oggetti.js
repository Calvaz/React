import React from 'react'
import RitornaStato from './ritorna.js'

class Oggetti extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "oggettissimo"};
        this.state = {xy: true};
    }

    printaCiao(x) {
        alert(x);
    }

    componentDidMount() {
        setTimeout(this.props.numero, 1000);
    }

    static getDerivedStateFromProps(props, state) {
        alert('carico i props');
        return {name: props.cacca};
    }

    tolgoCase = () => {
        this.setState({xy : false})
    }
    
    render() {
        let cose;
        if (this.state.xy) {
            cose = <Casa />
        };

        return (
            <div>
                {cose}
            <button onClick={() => this.printaCiao("1")}>tolgooo</button>
            </div>
        );
    }

}

class Casa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "casa"};
    }

    componentWillUnmount = () => {
        alert('sto togliendo!!!!!');
        console.log('sto togliendo');
    }
    
    render () {
        return true;
    };
    
}
export default Oggetti;
