import React from 'react';

//create a new component. This compnent should create some HTML
const app =  function(){
	return <div>Hi!!</div>;
}

//Take this component's html an put it on the page (in the DOM)
React.render(app);