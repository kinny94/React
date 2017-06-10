var Greeter = React.createClass({

    getDefaultProps: function(){
        return{
            name: 'React!!',
            message: 'Default message!!',
            errorText: ''
        }
    },

    getInitialState: function (){
        return {
            name: this.props.name
        };
    },

    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';
        var errorText = '';

        if(typeof name === 'string' && name.length > 0){
            this.setState({
                name: name,
                errorText: ''
            });
        }else{
            this.setState({
                errorText: "Error Input"
            });
        }
    },

    render: function(){

        var name = this.state.name;
        var message = this.props.message;
        var errorText = this.state.errorText;

        return (
            <div>
                <h1>I am {name}!</h1>
                <p>{message}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" />
                    <button>Set Name </button>
                </form>
                <p>{errorText}</p>
            </div>    
        );
    }
});

var fullName = "Arjun Dass";

ReactDOM.render(
    <Greeter name={fullName}/>,
    document.getElementById('app')
);

