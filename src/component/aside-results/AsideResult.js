import './AsideResult.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import SampleData from './SampleData';
import SampleDataStudy from './SampleDataStudy';
import { MDBIcon} from "mdbreact";

const icon = [
    { id: 0, name: 'chevron-up' },
    { id: 1, name: 'chevron-down' }
  ];
export default class AsideResult extends Component {
    constructor(props){
        super(props);
        this.state={
            iconUp: 'chevron-up'
        }
    }
    changeIcon=(id)=>{
        this.setState(state => ({ [id]: !state[id] }));
    }
     
    render(){
        const patientComponent= this.props.activeComponent==="patient";
        const StudyComponent = this.props.activeComponent==="study";
        const{dataToDisplay,submitClicked}=this.props;
        let filteredDataToDisplay=[];
        if(submitClicked && patientComponent){
            console.log("data from parent compo", dataToDisplay)
            let switchCase= dataToDisplay[0];
            let firstName = switchCase.firstName.length>0;
            let lastName = switchCase.lastName.length>0;
            let patientId = switchCase.patientId.length>0;
            let internalId = switchCase.internalId.length>0;
            
            if(firstName){
                for(let i=0;i<SampleData.length;i++){
                    if(SampleData[i].firstName===switchCase.firstName){
                        filteredDataToDisplay.push(SampleData[i]);
                    }
                }
                console.log("filtered data-->", filteredDataToDisplay);
            }
            if(lastName){
                for(let i=0;i<SampleData.length;i++){
                    if(SampleData[i].lastName===switchCase.lastName){
                        filteredDataToDisplay.push(SampleData[i]);
                    }
                }
            }
            if(patientId){
                for(let i=0;i<SampleData.length;i++){
                    if(SampleData[i].patientId===switchCase.patientId){
                        filteredDataToDisplay.push(SampleData[i]);
                    }
                }
            }
            if(internalId){
                for(let i=0;i<SampleData.length;i++){
                    if(SampleData[i].internalId===switchCase.internalId){
                        filteredDataToDisplay.push(SampleData[i]);
                    }
                }
            }

        }
        if(submitClicked && StudyComponent){
            console.log("data from parent compo", dataToDisplay)
            let switchCase= dataToDisplay[0];
            let accessionNumber = switchCase.accessionNumber.length>0;
            let performedEndDate = switchCase.performedEndDate.length>0;
            let performedStartDate = switchCase.performedStartDate.length>0;
            let sopInstanceUID = switchCase.sopInstanceUID.length>0;
            let studyUID = switchCase.studyUID.length>0;
            if(accessionNumber){
                for(let i=0;i<SampleDataStudy.length;i++){
                    if(SampleDataStudy[i].accessionNumber===switchCase.accessionNumber){
                        filteredDataToDisplay.push(SampleDataStudy[i]);
                    }
                }
                console.log("filtered data-->", filteredDataToDisplay);
            }
            if(performedEndDate){
                for(let i=0;i<SampleDataStudy.length;i++){
                    if(SampleDataStudy[i].performedEndDate===switchCase.performedEndDate){
                        filteredDataToDisplay.push(SampleDataStudy[i]);
                    }
                }
            }
            if(performedStartDate){
                for(let i=0;i<SampleDataStudy.length;i++){
                    if(SampleDataStudy[i].performedStartDate===switchCase.performedStartDate){
                        filteredDataToDisplay.push(SampleDataStudy[i]);
                    }
                }
            }
            if(sopInstanceUID){
                for(let i=0;i<SampleDataStudy.length;i++){
                    if(SampleDataStudy[i].sopInstanceUID===switchCase.sopInstanceUID){
                        filteredDataToDisplay.push(SampleDataStudy[i]);
                    }
                }
            }
            if(studyUID){
                for(let i=0;i<SampleDataStudy.length;i++){
                    if(SampleDataStudy[i].studyUID===switchCase.studyUID){
                        filteredDataToDisplay.push(SampleDataStudy[i]);
                    }
                }
            }

        }
        const finalCount= filteredDataToDisplay.length;
        console.log("finalcount",finalCount);
        return (
            patientComponent? 
            <div className="aside-results-box">
            {submitClicked && finalCount>0? 
            <>
            <h2>Patient Search Results <span className="record-numbers">-  {finalCount} records found.</span>
                <button className="download-all-button">Download All</button>
            </h2> 
            <div className="place-holder-patient">
                <span className="patient-name">Patient Name:<strong>{filteredDataToDisplay[0].lastName}</strong></span>
                <span className="patient-id">Patient ID:<strong>{filteredDataToDisplay[0].patientId}</strong> </span>
                <span className="patient-id">Date of Birth:<strong>{filteredDataToDisplay[0].dob}</strong></span>
                <span className="patient-id">Gender:<strong>{filteredDataToDisplay[0].gender}</strong></span>
            </div></>: <h2>Patient Search Results <span className="record-numbers">-0 records found.</span>
                </h2>}
                <Container className="filter-container">
                <Row>
                    <Col id={icon.id+"name"} onClick={() => this.changeIcon(icon.id+"name")} sm={2}>Name  <MDBIcon icon={this.state[icon.id+"name"] ? "chevron-up" : "chevron-down"}/> </Col>
                    <Col sm={2}>Patient ID</Col>
                    <Col id={icon.id+"issuer"} onClick={() => this.changeIcon(icon.id+"issuer")} sm={2}>Issuer  <MDBIcon icon={this.state[icon.id+"issuer"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={icon.id+"status"} onClick={() => this.changeIcon(icon.id+"status")} sm={2}>Status <MDBIcon icon={this.state[icon.id+"status"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={icon.id+"dob"} onClick={() => this.changeIcon(icon.id+"dob")} sm={2}>Date of Birth <MDBIcon icon={this.state[icon.id+"dob"] ? "chevron-up" : "chevron-down"} /></Col>
                    <Col sm={2}>Gender</Col>
                </Row>            
                </Container>
                {submitClicked && finalCount>0?
                filteredDataToDisplay.map((value,index)=>{
                    console.log("valueeee-->",value);
                    return(
                    <Container className="filter-container filtered-display-data">
                    <Row>
                        <Col sm={2} key={Math.random()}>{value.lastName}</Col>
                        <Col sm={2} key={Math.random()}>{value.patientId}</Col>
                        <Col sm={2} key={Math.random()}>{value.Issuer}</Col>
                        <Col sm={2} key={Math.random()}>{value.status}</Col>
                        <Col sm={2} key={Math.random()}>{value.dateOfBirth}</Col>
                        <Col sm={2} key={Math.random()}>{value.gender}</Col>
                    </Row>
                    </Container>
                    )
                })
                   :
                <span className="no-records-text">No records to be displayed at this time</span>
                }
            
            </div>
            :StudyComponent? <div className="aside-results-box">
             {submitClicked && finalCount>0? 
                <>
                <h2>Patient Search Results <span className="record-numbers">-  {finalCount} records found.</span>
                    <button className="download-all-button">Download All</button>
                </h2> 
                <div className="place-holder-patient">
                    <span className="patient-name">Patient Name:<strong>{filteredDataToDisplay[0].name}</strong></span>
                    <span className="patient-id">Patient ID:<strong>{filteredDataToDisplay[0].patientId}</strong> </span>
                    <span className="patient-id">Date of Birth:<strong>{filteredDataToDisplay[0].dob}</strong></span>
                    <span className="patient-id">Gender:<strong>{filteredDataToDisplay[0].gender}</strong></span>
                </div></>: <h2>Patient Search Results <span className="record-numbers">-0 records found.</span>
                </h2>}
            <Container className="filter-container">
            <Row>
                    <Col id={icon.id+"name"} onClick={() => this.changeIcon(icon.id+"name")} sm={2}>Name <MDBIcon icon={this.state[icon.id+"name"] ? "chevron-up" : "chevron-down"}/> </Col>
                    <Col id={icon.id+"patientId"} onClick={() => this.changeIcon(icon.id+"patientId")} sm={2}>Patient ID <MDBIcon icon={this.state[icon.id+"patientId"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={icon.id+"accessionNo"} onClick={() => this.changeIcon(icon.id+"accessionNo")} sm={2}>Accession No.<MDBIcon icon={this.state[icon.id+"accessionNo"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={icon.id+"performedDate"} onClick={() => this.changeIcon(icon.id+"performedDate")} sm={2}>Performed Date <MDBIcon icon={this.state[icon.id+"performedDate"] ? "chevron-up" : "chevron-down"} /></Col>
                <Col sm={1}>Modalities</Col>
                <Col sm={2} className="col-no-objects">No. Objects</Col>
                <Col sm={1} className="col-no-series">No. Series</Col>
            </Row>
            </Container>
            {submitClicked && finalCount>0?
                filteredDataToDisplay.map((value,index)=>{
                    console.log("valueeee-->",value);
                    return(
                    <Container className="filter-container filtered-display-data">
                    <Row>
                        <Col sm={2} key={Math.random()}>{value.name}</Col>
                        <Col sm={2} key={Math.random()}>{value.patientId}</Col>
                        <Col sm={2} key={Math.random()}>{value.accessionNumber}</Col>
                        <Col sm={2} key={Math.random()}>{value.performedDate}</Col>
                        <Col sm={1} key={Math.random()}>{value.modalities}</Col>
                        <Col sm={2} key={Math.random()} className="text-center">{value.noOfObjects}</Col>
                        <Col sm={1} key={Math.random()}>{value.noSeries}</Col>
                    </Row>
                    </Container>
                    )
                })
                   :
                <span className="no-records-text">No records to be displayed at this time</span>
                }
          
        </div>:null
        );
    }
    
}
