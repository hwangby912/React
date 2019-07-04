class Colorize extends React.Component {
    state = {
        color : '',
        bgColor : 'violet'
    }

    colorValue = (e) => {
        this.setState({
            color : e.target.value
        });
    }

    componentDidUpdate(currentProps, currentState) {
        this.btnRef.innerText = this.state.color
    }

    setNewColor = (e) => {
        // console.log('setNewColor');
        this.setState({
            bgColor : this.state.color
        });
        this.inputRef.focus();
        this.inputRef.value = '';
        this.btnRef.innerText = this.state.bgColor;
        // form에서 완료된 후 자동 refresh를 막기 위한 수행문
        e.preventDefault();
    }
    
    textField = () => {
        console.log('This is textarea');
    }

    game = (e) => {
        // screenX도 같음
        this.setState({
            bgColor : '#' + Math.floor(Math.random() * 500000)
        });
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                positionX : Math.random() * 500,
                positionY : Math.random() * 400
            });
        }, 1000);
    }

    render() {
        const squareStyle = {
            width : 200,
            height : 200,
            backgroundColor : this.state.bgColor,
        };

        return(
            <div>
                <div style = {squareStyle}></div>
                {/* form에서 submit button을 누르는 순간 해당 일을 수행한 뒤에 바로 refresh가 된다 */}
                <form onSubmit = {this.setNewColor}>
                    <input ref = {ref => this.inputRef = ref} onChange = {this.colorValue}></input>
                    <button ref = {ref => this.btnRef = ref}>Go</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <Colorize />,
    document.querySelector('#container')
);