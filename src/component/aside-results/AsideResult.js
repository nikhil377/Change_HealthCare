import './AsideResult.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import SampleData from './SampleData';
import SampleDataStudy from './SampleDataStudy';
export default class AsideResult extends Component {
    render(){
        const patientComponent= this.props.activeComponent==="patient";
        const StudyComponent = this.props.activeComponent==="study";
        console.log("this props patient data",this.props)
        const{dataToDisplay,submitClicked}=this.props;
        console.log("data to display",dataToDisplay);
        if(submitClicked && patientComponent){
            Array.prototype.push.apply(dataToDisplay,SampleData); 
            console.log("final data to display",dataToDisplay);
        }
        if(submitClicked && StudyComponent){
            Array.prototype.push.apply(dataToDisplay,SampleDataStudy); 
            console.log("final data to display",dataToDisplay);
        }
        return (
            patientComponent? 
            <div className="aside-results-box">
                <h2>Patient Search Results <span className="record-numbers">-0 records found.</span></h2>
                <Container className="filter-container">
                <Row>
                    <Col sm={2}>Name &#x25B2;</Col>
                    <Col sm={2}>Patient ID</Col>
                    <Col sm={2}>Issuer &#x25B2;</Col>
                    <Col sm={2}>Status &#x25B2;</Col>
                    <Col sm={2}>Date of Birth &#x25B2;</Col>
                    <Col sm={2}>Gender</Col>
                </Row>            
                </Container>
                {submitClicked?
                dataToDisplay.map((value,index)=>{
                    console.log("valueeee-->",value);
                    return(
                    <Container className="filter-container">
                    <Row>
                        <Col sm={2}>{value.lastname}</Col>
                        <Col sm={2}>{value.patientId}</Col>
                        <Col sm={2}>{value.Issuer}</Col>
                        <Col sm={2}>{value.status}</Col>
                        <Col sm={2}>{value.dateOfBirth}</Col>
                        <Col sm={2}>{value.gender}</Col>
                    </Row>
                    </Container>
                    )
                })
                   :
                <span className="no-records-text">No records to be displayed at this time</span>
                }
            
            </div>
            :StudyComponent? <div className="aside-results-box">
            <h2>Patient Search Results <span className="record-numbers">-0 records found.</span></h2>
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
                        <Col sm={1}>{value.name}</Col>
                        <Col sm={2}>{value.patientId}</Col>
                        <Col sm={2}>{value.accessionNumber}</Col>
                        <Col sm={2}>{value.performedDate}</Col>
                        <Col sm={1}>{value.modalities}</Col>
                        <Col sm={2}>{value.noOfObjects}</Col>
                        <Col sm={2}>{value.noSeries}</Col>
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
