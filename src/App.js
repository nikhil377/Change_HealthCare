import './App.css';
import Header from './component/header/Header'
import PatientComponent from './component/aside-filter/PatientComponent';
import { Component } from 'react';
import StudyComponent from './component/aside-filter/StudyComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "patient",
      patientDataToDisplay: "",
      studyDataToDisplay:"",
      showBanner: false,
    }
    this.updatePatientData=this.updatePatientData.bind(this);
  }
  changeComponentView = (e) => {
    this.setState({
      active: e.target.value,
      showBanner:false
    });
  }
  updatePatientData(value) {
    console.log("show values",value)
    if(value==="show banner"){
      this.setState({
        showBanner:true
      });
    }
    if(value==="hide banner"){
        this.setState({
          showBanner:false
        });
    }
  }
  render() {
    const { active,showBanner } = this.state;
    // console.log("show banner--///.",showBanner)
    const headerClass= showBanner? "show-banner-header":""
    return (
      <div className="App">
        <Header className={headerClass} />
        <div className="aside-boxes">
          <div className="aside-filter-box">
            <div className="search-text">Search</div>
            <button className={active === "patient" ? "dark-grey-button" : "light-grey-button"} value="patient" onClick={this.changeComponentView}>PATIENT</button>
            <button className={active === "study" ? "dark-grey-button" : "light-grey-button"} value="study" onClick={this.changeComponentView}>STUDY</button>
            <p className="select-category-text">Select one of the category below:</p>
            {active === "patient" ? 
              <PatientComponent  activeComponent={active} data={this.updatePatientData} />
              : <StudyComponent activeComponent={active} data={this.updatePatientData} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
