import React from 'react';

class App extends React.Component {
	sayHey(){
  	alert("hey");
  }
	
  render(){
    let text = "Today is Good day";
		let pStyle = {
    	color: 'aqua',
    	backgroundColor: 'black'
    };

    return (
			<div>
				{/* comment */}
			  <h1>Hello World</h1>
			  <h2>{text}</h2>
				<button onClick={this.sayHey}>Click me </button>
				<p style={pStyle}>{1 == 1 ? 'True' : 'False'}</p>
			</div>
    );
  }
}

export default App;