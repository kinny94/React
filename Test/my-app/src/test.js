import React, { Component } from 'react';

class Test extends Component{
    render(){
        const test1 = "Dhruvin Chutiya";
        const insideTags = <h1>Dhruvin Heading mein bhu Chutiya hai</h1>;
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

        const obj2 = [
            {
                "name": "Arjun",
                "course": "MS in CS",
                "nick" : "Bhadwa",
                "courses": [
                    "CS546",
                    "CS561",
                    "CS 545"
                ]
            },
            {
                "name": "Dhruvin",
                "course": "MS in CS",
                "nick": "Gandu",
                "courses": [
                    "CS546",
                    "CS573",
                    "SSW 555"
                ]
            },
            {
                "name": "Akshay Mullay",
                "course": "MS in CS",
                "nick": "Chutiya",
                "courses": [
                    "CS546",
                    "CS561",
                    "CS 545"
                ]
            }
        ];

        let temp = [];
        let everything = () => {
            obj2.forEach(function(element){
                if(name === "Dhruvin"){
                    let result = <h1>Name: {element.name}</h1>
                    let result2 = <h1>Major: {element.course}</h1>
                    let result3 = <h1>Nick: {element.nick}</h1>
                    let result4 = <h1>Courses: {element.courses.toString()}</h1>
                    temp.push(result);
                    temp.push(result2);
                    temp.push(result3);
                    temp.push(result4);           
                }
            }, this);
            return temp.toString();
        };
        return(
            <div className="container">
                <div className="col-md-12">
                    <h2>This is my react webpage</h2>
                    <p>/bhaiya!! Koi react sikha do!!</p>
                    <p>{test1}</p>
                    {insideTags}   
                    <h3>2 + 3 = {add()}</h3>
                    <h5>Authentication {login("dhruvin")}</h5>
                    {everything()}
                </div>
            </div>
        );
    }
}

export default Test;