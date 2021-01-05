import './AsideResult.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import SampleData from './SampleData';
import SampleDataStudy from './SampleDataStudy';
import { MDBIcon} from "mdbreact";
export default class AsideResult extends Component {
    constructor(props){
        super(props);
        this.state={
            iconUp: 'chevron-up'
        }
    }
    changeIcon=()=>{
        if(this.state.iconUp==="chevron-up"){
        this.setState({
            iconUp:'chevron-down'
        })
    }
    if(this.state.iconUp==="chevron-down"){
        this.setState({
            iconUp:'chevron-up'
        })
    }
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
                    <Col key="name" onClick={this.changeIcon} sm={2}>Name  <MDBIcon icon={this.state.iconUp} /></Col>
                    <Col sm={2}>Patient ID</Col>
                    <Col onClick={this.changeIcon} sm={2}>Issuer <MDBIcon icon={this.state.iconUp} /></Col>
                    <Col onClick={this.changeIcon} sm={2}>Status <MDBIcon icon={this.state.iconUp} /></Col>
                    <Col onClick={this.changeIcon} sm={2}>Date of Birth <MDBIcon icon={this.state.iconUp} /></Col>
                    <Col sm={2}>Gender</Col>
                </Row>            
                </Container>
                {submitClicked?
                dataToDisplay.map((value,index)=>{
                    console.log("valueeee-->",value);
                    return(
                    <Container className="filter-container">
                    <Row>
                        <Col sm={2} key={Math.random()}>{value.firstname}{value.lastname}</Col>
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
                <Col sm={1}>Name&#x25B2;</Col>
                <Col sm={2}>Patient ID &#x25B2;</Col>
                <Col sm={2}>Accession No. &#x25B2;</Col>
                <Col sm={2}>Performed Date&#x25B2;</Col>
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
