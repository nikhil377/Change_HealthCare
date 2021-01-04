import './AsideResult.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Component } from 'react';

export default class AsideResult extends Component {
    constructor(props){
        super(props);
        this.state={
            data:""
        }
    }

    render(){
        console.log("this props patient data",this.props)
        return (
            this.props.activeComponent==="patient"? 
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
                <span className="no-records-text">No records to be displayed at this time</span>
                <Container>
                <Row>
                    <Col sm={2}>Name</Col>
                    <Col sm={2}>Patient ID</Col>
                    <Col sm={2}>Issuer &#x25B2;</Col>
                    <Col sm={2}>Status &#x25B2;</Col>
                    <Col sm={2}>Date of Birth &#x25B2;</Col>
                    <Col sm={2}>Gender</Col>
                </Row>
                </Container>
            </div>
            :this.props.activeComponent==="study"? <div className="aside-results-box">
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
            <span className="no-records-text">No records to be displayed at this time</span>
          
        </div>:null
        );
    }
    
}
