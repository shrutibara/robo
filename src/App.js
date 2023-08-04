//import logo from './logo.svg';
import './App.css';
import List from './list';
import React from 'react';
// import imag from '/imag';


class App extends React.Component{
constructor() {
    super();
    this.state={chara:[]};
}

render(){
    return(<>
    <h1> ROBO </h1> 
    <div className='rob'><List userlist={this.state.chara}/></div> 
        
      </> );
}

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json();
    })
    .then(data=>this.setState({chara:data}));
}
}


export default App;
