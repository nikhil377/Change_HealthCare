import './AsideResult.css'
import { Container, Row, Col } from 'react-bootstrap';

export default function AsideResult(props) {
    return (
        props.activeComponent==="patient"? 
        <div className="aside-results-box">
            <h2>Patient Search Results <span className="record-numbers">-0 records found.</span></h2>
            <Container className="filter-container">
            <Row>
                <Col sm={2}>Name</Col>
                <Col sm={2}>Patient ID</Col>
                <Col sm={2}>Issuer</Col>
                <Col sm={2}>Status</Col>
                <Col sm={2}>Date of Birth</Col>
                <Col sm={2}>Gender</Col>
            </Row>
            </Container>
            <span className="no-records-text">No records to be displayed at this time</span>
          
        </div>
        :props.activeComponent==="study"? <div className="aside-results-box">
        <h2>Patient Search Results <span className="record-numbers">-0 records found.</span></h2>
        <Container className="filter-container">
        <Row>
            <Col sm={1}>Name</Col>
            <Col sm={2}>Patient ID</Col>
            <Col sm={2}>Accession No.</Col>
            <Col sm={2}>Performed Date</Col>
            <Col sm={1}>Modalities </Col>
            <Col sm={2}>No. Objects</Col>
            <Col sm={2}>No. Series</Col>
        </Row>
        </Container>
        <span className="no-records-text">No records to be displayed at this time</span>
      
    </div>:null
    )
}
