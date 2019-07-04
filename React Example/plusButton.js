class CounterParant extends React.Component {
    state = {
        count: 0
    }

    increase = () => {
        this.setState({
            count : this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <Counter display = {this.state.count}/>
                <PlusButton clickHandler = {this.increase}/>
            </div>
        );
    }
}
class PlusButton extends React.Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.clickHandler}>+</button>
            </div>
        );
    }
}
class Counter extends React.Component {
    render() {
        return (
            <div>
                {this.props.display}
            </div>
        );
    }
}

ReactDOM.render(
    <CounterParant/>,
    document.querySelector("#container")
);