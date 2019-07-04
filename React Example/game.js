class Colorize extends React.Component {
    state = {
        color : '',
        bgColor : 'violet',
        positionX: 0,
        positionY: 0
    }

    colorValue = (e) => {
        this.setState({
            color : e.target.value
        });
    }

    setNewColor = (e) => {
        console.log('setNewColor');
        this.setState({
            bgColor : this.state.color
        });
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
        const circleStyle = {
            width : 200,
            height : 200,
            backgroundColor : this.state.bgColor,
            borderRadius : 100,
            position : 'relative',
            left : this.state.positionX,
            top : this.state.positionY
            
        };
        return(
            <div>
                <div onClick = {this.game} style = {circleStyle}></div>
                {/* form에서 submit button을 누르는 순간 해당 일을 수행한 뒤에 바로 refresh가 된다 */}
                <form onSubmit = {this.setNewColor}>
                    <textarea rows = '10' cols ='100' onMouseOver = {this.textField}></textarea>
                    <br/>
                    <input onChange = {this.colorValue}></input>
                    <button>Go</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <Colorize />,
    document.querySelector('#container')
);