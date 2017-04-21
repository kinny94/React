import React, { Component } from 'react';

class Test extends Component{

    constructor(props){
        super(props);
        this.state = { value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setValue({value: event.target.value});
    }

    handleSubmit(event){
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render(){

        const MyComponents = {
            DatePicker: function(props){
                return <div>Imagine a {props.color} datepicker here.</div>;
            }
        }

        function BlueDatePicker() {
            return <MyComponents.DatePicker color="blue" />;
        }

        function tick() {
            const element = (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
            );
        setInterval(tick, 1000);
        }

        const test1 = "Testing 1";
        const insideTags = <h1>Printing text inside regular HTML tags</h1>;
        const add = () => {
            return 2 + 1;
        }
        
        var login = (user) => {
            if(user){
                return "Hello " + user;
            }else{
                return "HEllo Stranger";
            }
        }
        
        function Clock(props) {
            return (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {props.date.toLocaleTimeString()}.</h2>
                </div>
            );
        }

        const a = [1, 2, 3, 4, 5];
        const b = a.map((number) => number * 2);
        const c = a.map((number) => <li>{number}</li>);
        
        return(
            <div className="container">
                <div className="col-md-12">
                    <h2>This is my react webpage</h2>
                    <p>Someone teach me react plss.!</p>
                    <p>{test1}</p>
                    {insideTags}   
                    <h3>2 + 3 = {add()}</h3>
                    <h5>Authentication {login("dhruvin")}</h5>
                    <h2>It is {tick()}.</h2>
                    <h4>{b}</h4>
                    <h4>{c}</h4>
                    <h5>{BlueDatePicker()}</h5>
                    <form onSubmit={this.handleSubmit}>
                        <label>Pick your favorite La Croix flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Test;