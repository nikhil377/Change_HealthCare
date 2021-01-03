import './App.css';
import Header from './component/header/Header'
import AsideFilter from './component/aside-filter/AsideFilter';
import AsideResult from './component/aside-results/AsideResult';
import { Component } from 'react';

 class App extends Component {
  constructor(props){
    super(props);
    this.state={
       active:"patient",
       dataToDisplay: ""
    }  
}
changeComponentView=(e)=>{
  console.log(e.target.value);
  this.setState({
      active:e.target.value
  });
}
updateData(value){
  console.log("value",value)
  return()=>{
    this.setState({
      dataToDisplay:value
    });
  }
}
   render(){
    const {active}=this.state;
    return (
      <div className="App">
          <Header/>
          <div className="aside-boxes">
          <div className="aside-filter-box">
          <div className="search-text">Search</div>
              <button className={active==="patient"? "dark-grey-button": "light-grey-button"} value="patient" onClick={this.changeComponentView}>PATIENT</button>
              <button className={active==="study"? "dark-grey-button": "light-grey-button"} value="study" onClick={this.changeComponentView}>STUDY</button>
            <AsideFilter activeComponent={active} data={this.updateData.bind(this)}/>
          </div>
            <AsideResult activeComponent={active} />
          </div>
      </div>
    );
   }
}

export default App;
