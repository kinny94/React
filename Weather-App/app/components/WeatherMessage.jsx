var React = require('react');

var WeatherMessage = ({temp, location}) => {    //used as props
    return(
        <div>
            <h4>It is {temp}F in {location}.</h4>
        </div>
    );
}
module.exports = WeatherMessage;