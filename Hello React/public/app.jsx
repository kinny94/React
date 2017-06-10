var GreeterMessage = React.createClass({
    render: function(){

    var name = this.props.name;
    var p = this.props.message;

        return(
            <div>
                <h1>Hello {name} !!</h1>
                <p>{p} </p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    
    onFormSubmit: function(e){
        e.preventDefault(); 

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if(name.length > 0){
            this.refs.name.value = '';
            updates.name = name;
        }

        if(message.length > 0){
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    },

    render: function(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref= "name" />
                    <input type="text" ref="message" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
});

var Greeter = React.createClass({

    getDefaultProps: function(){
        return{
            name: 'React!!',
            message: 'Default message!!',
        }
    },

    getInitialState: function (){
        return { 
            name: this.props.name,
            message: this.props.message
        };
    },

    handleUpdatedData: function (updates) {
        this.setState(updates);
    },

    render: function(){

        var name = this.state.name;
        var message = this.state.message;

        return (
            <div> 
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleUpdatedData}/>
            </div>    
        );
    }
});

var fullName = "Arjun Dass";

ReactDOM.render(
    <Greeter name={fullName}/>,
    document.getElementById('app')
);

