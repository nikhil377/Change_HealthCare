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
        if(submitClicked && patientComponent){
            Array.prototype.push.apply(dataToDisplay,SampleData); 
            console.log("final data to display",dataToDisplay);
        }
        if(submitClicked && StudyComponent){
            Array.prototype.push.apply(dataToDisplay,SampleDataStudy); 
            console.log("final data to display",dataToDisplay);
        }
        const finalCount= dataToDisplay.length;
        console.log("finalcount",finalCount);
        return (
            patientComponent? 
            <div className="aside-results-box">
            {submitClicked? 
            <h2>Patient Search Results <span className="record-numbers">-  {finalCount} records found.</span>
                <button className="download-all-button">Download All</button>
            </h2>: <h2>Patient Search Results <span className="record-numbers">-0 records found.</span>
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
                {submitClicked?
                dataToDisplay.map((value,index)=>{
                    console.log("valueeee-->",value);
                    return(
                    <Container className="filter-container">
                    <Row>
                        <Col sm={2} key={Math.random()}>{value.lastname}</Col>
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
             {submitClicked? 
            <h2>Patient Search Results <span className="record-numbers">-  {finalCount} records found.</span>
                <button className="download-all-button">Download All</button>
            </h2>: <h2>Patient Search Results <span className="record-numbers">-0 records found.</span>
                </h2>}
            <Container className="filter-container">
            <Row>
                    <Col id={icon.id+"name"} onClick={() => this.changeIcon(icon.id+"name")} sm={1}>Name <MDBIcon icon={this.state[icon.id+"name"] ? "chevron-up" : "chevron-down"}/> </Col>
                    <Col id={icon.id+"patientId"} onClick={() => this.changeIcon(icon.id+"patientId")} sm={2}>Patient ID <MDBIcon icon={this.state[icon.id+"patientId"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={icon.id+"accessionNo"} onClick={() => this.changeIcon(icon.id+"accessionNo")} sm={2}>Accession No. <MDBIcon icon={this.state[icon.id+"accessionNo"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={icon.id+"performedDate"} onClick={() => this.changeIcon(icon.id+"performedDate")} sm={2}>Performed Date <MDBIcon icon={this.state[icon.id+"performedDate"] ? "chevron-up" : "chevron-down"} /></Col>
                <Col sm={1}>Modalities</Col>
                <Col sm={2}>No. Objects</Col>
                <Col sm={2}>No. Series</Col>
            </Row>
            </Container>
            {submitClicked?
                dataToDisplay.map((value,index)=>{
                    console.log("valueeee-->",value);
                    return(
                    <Container className="filter-container">
                    <Row>
                        <Col sm={1} key={Math.random()}>{value.name}</Col>
                        <Col sm={2} key={Math.random()}>{value.patientId}</Col>
                        <Col sm={2} key={Math.random()}>{value.accessionNumber}</Col>
                        <Col sm={2} key={Math.random()}>{value.performedDate}</Col>
                        <Col sm={1} key={Math.random()}>{value.modalities}</Col>
                        <Col sm={2} key={Math.random()}>{value.noOfObjects}</Col>
                        <Col sm={2} key={Math.random()}>{value.noSeries}</Col>
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
