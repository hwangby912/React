class LightningCounter extends React.Component {
    state = {
        strikes : 0,
        msg : 'lightning count'
    };

    timerTick = () => {
        this.setState({
            strikes : this.state.strikes + 100
        });
    }

    componentDidMount() { // render 뒤에 자동으로 호출
        // 호출하는 것이 아니고 지정하는 것이기에 함수에 ()를 붙이지 않는다. 
        setInterval(this.timerTick, 1000);
    }

    render() {
        return (
            <h1>{this.state.msg} {this.state.strikes}</h1>
        );
    }
}

class LightningCounterDisplay extends React.Component {
    render() {
        let divStyle = {
            width : 250,
            textAlign : 'center',
            backgroundColor : 'black',
            padding : 40,
            fontFamily : 'sans-serif',
            color : '#999',
            borderRadius : 10
        };

        return (
            <div style = {divStyle}>
                <LightningCounter />
            </div>
        );
    }
}

ReactDOM.render(
    <LightningCounterDisplay />,
    document.querySelector('#container')
);