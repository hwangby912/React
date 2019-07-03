class Hello extends React.Component {
    render() {
        const helloStyle = {
            fontSize: 40,
            color: "red"
        };
        return (
            <div style={helloStyle}>Hello HBY</div>
        )
    }
}
class HelloBOX extends React.Component {
    render() {
        // css style
        const helloBoxStyle = {
            width: 200,
            height: 200,
            backgroundColor: "violet"
        };
        return (
            <div style = {helloBoxStyle}>
                <Hello />
                {this.props.children}
                <Hello />
                <Hello />
            </div>
        );
    }
}
function printHelloBox() {
    return <HelloBOX>Box is here</HelloBOX>;;
}

ReactDOM.render(
    printHelloBox()
    , document.querySelector("#container")
);