var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeather = require('openWeather');

var Weather = React.createClass({

    getInitialState: function(){
        return{
            isLoading: false
        }
    },

    handleSearch: function(location){

        var that = this; 

        this.setState({
            isLoading: true
        });

        openWeather.getTemp(location).then(function (temp){
            that.setState({ //this binding gets lost when we are inside of a funcion
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage){
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
        // this.setState({
        //     location: location,
        //     temp: 23
        // });
    },

    render: function(){

        var {isLoading, temp, location} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching data...</h3>;
            }else if(temp && location){
                return <WeatherMessage temp={temp} location={location} />;
            }
        }

        return(
            <div>
                <h4>Weather Component!!</h4>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>  
        );
    }
});

module.exports = Weather;