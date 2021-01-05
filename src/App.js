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
      studyDataToDisplay:""
    }
    this.updateStudyData=this.updateStudyData.bind(this);
    this.updatePatientData=this.updatePatientData.bind(this);
  }
  changeComponentView = (e) => {
    this.setState({
      active: e.target.value
    });
  }
  updatePatientData(value) {
    console.log("PatientData", value)
    return () => {
      this.setState({
        patientDataToDisplay: value
      },()=>{
        console.log("parent data",this.state.patientDataToDisplay);
      });
    }
  }
  updateStudyData(value){
    console.log("studyDataToDisplay", value)
    return () => {
      this.setState({
        studyDataToDisplay: value
      });
    }
  }
  render() {
    const { active,patientDataToDisplay } = this.state;
    console.log("updated state",patientDataToDisplay)
    return (
      <div className="App">
        <Header />
        <div className="aside-boxes">
          <div className="aside-filter-box">
            <div className="search-text">Search</div>
            <button className={active === "patient" ? "dark-grey-button" : "light-grey-button"} value="patient" onClick={this.changeComponentView}>PATIENT</button>
            <button className={active === "study" ? "dark-grey-button" : "light-grey-button"} value="study" onClick={this.changeComponentView}>STUDY</button>
            <p className="select-category-text">Select one of the category below:</p>
            {active === "patient" ? 
              <PatientComponent  activeComponent={active} data={this.updatePatientData} />
              : <StudyComponent activeComponent={active} data={this.updateStudyData} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
