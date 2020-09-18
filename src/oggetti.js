import React from 'react'

class Oggetti extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "oggettissimo"};
    }

    
    printaCiao = (x) => {
        alert(x);
        console.log(x);
    }

    componentDidMount() {
        setTimeout(this.props.numero, 1000);
    }

    static getDerivedStateFromProps(props, state) {
        alert('carico i props');
        return {name: props.cacca};
    }
    
    render() {
        return (
        <div>
            <h2>Hi, I am an object! {this.props.cacca + '   ' + this.props.numero} </h2>
            <button onClick={() => this.printaCiao('xciaoao')}>clicco</button>
        </div>
        );
    }

}

export default Oggetti;