const axios = require( 'axios' );

const API_URL = 'https://api.github.com/users/';

const fetchData = ( username ) => {
 
    const GITHUB_URL = `${ API_URL }${ username }`;
    const REPOS_URL = `${ API_URL }${ username }/repos`;

    let userData = {};

    return axios.get( GITHUB_URL ).then(( response ) => {

        if( response.data ){
            userData["userInfo"] = response.data;
            return axios.get( REPOS_URL ).then(( response ) => {
                userData["userRepos"] = response.data;

                return userData;
            });
        }else{
            throw new Error( "No Data!!" );
        }
    }, ( err ) => {
        console.log( err.message );
    });
}

module.exports = {
    fetchData
}