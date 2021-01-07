import './AsideResult.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import SampleDataPatient from './SampleDataPatient';
import SampleDataStudy from './SampleDataStudy';
import { MDBIcon} from "mdbreact";
import sample from './sample.pdf'
import success from './success.png'
import failure from './error.png';

const icon = [
    { id: 0, name: 'chevron-up' },
    { id: 1, name: 'chevron-down' }
  ];
export default class AsideResult extends Component {
    constructor(props){
        super(props);
        this.state={
            iconUp: 'chevron-up',
            showBanner:false,
            showFailureBanner:false,
            crossClicked: false,
            downloadText:"Download All",
            dataSorted:false,
            sortedValues:[],
            direction: 'asc'
        }
    }
    changeIcon=(id,direction,dataToSort)=>{
        console.log("id",id);
        this.setState(state => ({ [id]: !state[id] }));
        console.log("data to sort!!!",dataToSort);
        if(id==="name" && direction==="asc"){
           let dataSortedValues= dataToSort.sort((a, b) => a.name.localeCompare(b.name));
            console.log("data sorted!!",dataToSort)
            this.setState({
                dataSorted:true,
                sortedValues:dataSortedValues,
                direction:'dsc'
            })
        }
        if(id==="name" && direction==="dsc"){
            let dataSortedValues= dataToSort.sort((a, b) => b.name.localeCompare(a.name));
             console.log("data sorted!!",dataToSort)
             this.setState({
                 dataSorted:true,
                 sortedValues:dataSortedValues,
                 direction:'asc'
             })
         }
         if(id==="issuer" && direction==="asc"){
            let dataSortedValues= dataToSort.sort((a, b) => a.issuer.localeCompare(b.issuer));
             console.log("data sorted!!",dataToSort)
             this.setState({
                 dataSorted:true,
                 sortedValues:dataSortedValues,
                 direction:'dsc'
             })
         }
         if(id==="issuer" && direction==="dsc"){
             let dataSortedValues= dataToSort.sort((a, b) => b.issuer.localeCompare(a.issuer));
              console.log("data sorted!!",dataToSort)
              this.setState({
                  dataSorted:true,
                  sortedValues:dataSortedValues,
                  direction:'asc'
              })
          }
          if(id==="status" && direction==="asc"){
            let dataSortedValues= dataToSort.sort((a, b) => a.status.localeCompare(b.status));
             console.log("data sorted!!",dataToSort)
             this.setState({
                 dataSorted:true,
                 sortedValues:dataSortedValues,
                 direction:'dsc'
             })
         }
         if(id==="status" && direction==="dsc"){
             let dataSortedValues= dataToSort.sort((a, b) => b.status.localeCompare(a.status));
              console.log("data sorted!!",dataToSort)
              this.setState({
                  dataSorted:true,
                  sortedValues:dataSortedValues,
                  direction:'asc'
              })
          }
          if(id==="dob" && direction==="asc"){
            let dataSortedValues= dataToSort.sort((a, b) => a.dob.localeCompare(b.dob));
             console.log("data sorted!!",dataToSort)
             this.setState({
                 dataSorted:true,
                 sortedValues:dataSortedValues,
                 direction:'dsc'
             })
         }
         if(id==="dob" && direction==="dsc"){
             let dataSortedValues= dataToSort.sort((a, b) => b.dob.localeCompare(a.dob));
              console.log("data sorted!!",dataToSort)
              this.setState({
                  dataSorted:true,
                  sortedValues:dataSortedValues,
                  direction:'asc'
              })
          }
          if(id==="patientId" && direction==="asc"){
            let dataSortedValues= dataToSort.sort((a, b) => a.patientId.localeCompare(b.patientId));
             console.log("data sorted!!",dataToSort)
             this.setState({
                 dataSorted:true,
                 sortedValues:dataSortedValues,
                 direction:'dsc'
             })
         }
         if(id==="patientId" && direction==="dsc"){
             let dataSortedValues= dataToSort.sort((a, b) => b.patientId.localeCompare(a.patientId));
              console.log("data sorted!!",dataToSort)
              this.setState({
                  dataSorted:true,
                  sortedValues:dataSortedValues,
                  direction:'asc'
              })
          }
          if(id==="accessionNumber" && direction==="asc"){
            let dataSortedValues= dataToSort.sort((a, b) => a.accessionNumber.localeCompare(b.accessionNumber));
             console.log("data sorted!!",dataToSort)
             this.setState({
                 dataSorted:true,
                 sortedValues:dataSortedValues,
                 direction:'dsc'
             })
         }
         if(id==="accessionNumber" && direction==="dsc"){
             let dataSortedValues= dataToSort.sort((a, b) => b.accessionNumber.localeCompare(a.accessionNumber));
              console.log("data sorted!!",dataToSort)
              this.setState({
                  dataSorted:true,
                  sortedValues:dataSortedValues,
                  direction:'asc'
              })
          }
          if(id==="performedDate" && direction==="asc"){
            let dataSortedValues= dataToSort.sort((a, b) => a.performedDate.localeCompare(b.performedDate));
             console.log("data sorted!!",dataToSort)
             this.setState({
                 dataSorted:true,
                 sortedValues:dataSortedValues,
                 direction:'dsc'
             })
         }
         if(id==="performedDate" && direction==="dsc"){
             let dataSortedValues= dataToSort.sort((a, b) => b.performedDate.localeCompare(a.performedDate));
              console.log("data sorted!!",dataToSort)
              this.setState({
                  dataSorted:true,
                  sortedValues:dataSortedValues,
                  direction:'asc'
              })
          }
          
    }
    showDownloadBanner=()=>{
        this.setState({
            downloadText:"Downloading..."
        })
        setTimeout(()=>{
            this.setState({
                showBanner:true,
                crossClicked:false,
                downloadText: "Download All"
            })
        },5000)
    }
    showFailureBanner=()=>{
        this.setState({
            downloadText:"Downloading..."
        })
        setTimeout(()=>{
            this.setState({
                showFailureBanner:true,
                crossClicked:false,
                downloadText: "Download All"
            })
        },5000)
    }
    crossClicked=()=>{
        this.setState({
            crossClicked:true
        });
    }
    render(){
        const patientComponent= this.props.activeComponent==="patient";
        const StudyComponent = this.props.activeComponent==="study";
        const{dataToDisplay,submitClicked}=this.props;
        const {showBanner,showFailureBanner,crossClicked,sortedValues,dataSorted,direction}= this.state;
        console.log("sorted state values",sortedValues,dataSorted)
        let filteredDataToDisplay=[];
        if(submitClicked && patientComponent){
 //           console.log("data from parent compo", dataToDisplay)
            let switchCase= dataToDisplay[0];
            let firstName = switchCase.firstName.length>0;
            let lastName = switchCase.lastName.length>0;
            let patientId = switchCase.patientId.length>0;
            let internalId = switchCase.internalId.length>0;
            
            if(firstName){
                for(let i=0;i<SampleDataPatient.length;i++){
                    if(SampleDataPatient[i].firstName===switchCase.firstName){
                        filteredDataToDisplay.push(SampleDataPatient[i]);
                    }
                }
               // console.log("filtered data-->", filteredDataToDisplay);
            }
            if(lastName){
                for(let i=0;i<SampleDataPatient.length;i++){
                    if(SampleDataPatient[i].lastName===switchCase.lastName){
                        filteredDataToDisplay.push(SampleDataPatient[i]);
                    }
                }
            }
            if(patientId){
                for(let i=0;i<SampleDataPatient.length;i++){
                    if(SampleDataPatient[i].patientId===switchCase.patientId){
                        filteredDataToDisplay.push(SampleDataPatient[i]);
                    }
                }
            }
            if(internalId){
                for(let i=0;i<SampleDataPatient.length;i++){
                    if(SampleDataPatient[i].internalId===switchCase.internalId){
                        filteredDataToDisplay.push(SampleDataPatient[i]);
                    }
                }
            }

        }
        if(submitClicked && StudyComponent){
         //   console.log("data from parent compo", dataToDisplay)
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
              //  console.log("filtered data-->", filteredDataToDisplay);
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
       // console.log("finalcount",finalCount);
        return (
            patientComponent? 
            <div className="aside-results-box">
            {showBanner && !crossClicked?  <div className="success-banner">
                <img src={success} alt="success" width="45" height="45"/><div className="banner-text-error">All studies have been downloaded successfully `${finalCount/finalCount}`</div> <div className="cross-button" onClick={this.crossClicked}>X</div>
            </div>: showFailureBanner && !crossClicked ? 
            <div className="failure-banner">
                <img src={failure} alt="success" width="45" height="45"/><div className="banner-text-error">Download was unable to complete. Please try again </div> <div className="cross-button" onClick={this.crossClicked}>X</div>
            </div>
            :null}
            {submitClicked && finalCount>0? 
            <>
            <h2>Patient Search Results <span className="record-numbers">-  {finalCount} records found.</span>
            {finalCount>1? <button className="download-all-button" onClick={this.showDownloadBanner}> <a href={sample}download>{downloadText}</a></button>:
            // eslint-disable-next-line
            finalCount===1? <button className="download-all-button" onClick={this.showFailureBanner}> <a href="#">{downloadText}</a></button>:null}
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
                    <Col id={"name"} onClick={() => this.changeIcon("name", direction,filteredDataToDisplay)} sm={2}>Name  <MDBIcon icon={this.state["name"] ? "chevron-up" : "chevron-down"}/> </Col>
                    <Col sm={2}>Patient ID</Col>
                    <Col id={"issuer"} onClick={() => this.changeIcon("issuer", direction,filteredDataToDisplay)} sm={2}>Issuer  <MDBIcon icon={this.state["issuer"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={"status"} onClick={() => this.changeIcon("status", direction,filteredDataToDisplay)} sm={2}>Status <MDBIcon icon={this.state["status"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={"dob"} onClick={() => this.changeIcon("dob", direction,filteredDataToDisplay)} sm={2}>Date of Birth <MDBIcon icon={this.state["dob"] ? "chevron-up" : "chevron-down"} /></Col>
                    <Col sm={2}>Gender</Col>
                </Row>            
                </Container>
                {submitClicked && finalCount>0 && dataSorted===false?
                filteredDataToDisplay.map((value,index)=>{
                  //  console.log("valueeee-->",value);
                    return(
                    <Container className="filter-container filtered-display-data">
                    <Row>
                        <Col sm={2} key={Math.random()}>{value.firstName+" "+value.lastName}</Col>
                        <Col sm={2} key={Math.random()}>{value.patientId}</Col>
                        <Col sm={2} key={Math.random()}>{value.issuer}</Col>
                        <Col sm={2} key={Math.random()}>{value.status}</Col>
                        <Col sm={2} key={Math.random()}>{value.dob}</Col>
                        <Col sm={2} key={Math.random()}>{value.gender}</Col>
                    </Row>
                    </Container>
                    )
                })
                   :submitClicked && finalCount>0 && dataSorted?
                   sortedValues.map((value,index)=>{
                      //  console.log("valueeee-->",value);
                        return(
                        <Container className="filter-container filtered-display-data">
                        <Row>
                            <Col sm={2} key={Math.random()}>{value.firstName+" "+value.lastName}</Col>
                            <Col sm={2} key={Math.random()}>{value.patientId}</Col>
                            <Col sm={2} key={Math.random()}>{value.issuer}</Col>
                            <Col sm={2} key={Math.random()}>{value.status}</Col>
                            <Col sm={2} key={Math.random()}>{value.dob}</Col>
                            <Col sm={2} key={Math.random()}>{value.gender}</Col>
                        </Row>
                        </Container>
                        )
                    }):
                <span className="no-records-text">No records to be displayed at this time</span>
                }
            
            </div>
            :StudyComponent? 
            <div className="aside-results-box">
               {showBanner && !crossClicked?  <div className="success-banner">
                <img src={success} alt="success" width="45" height="45"/><div className="banner-text-success">All studies have been downloaded successfully {finalCount}<span>/{finalCount}</span></div> <div className="cross-button" onClick={this.crossClicked}>X</div>
            </div>: showFailureBanner && !crossClicked ? <div className="failure-banner">
                <img src={failure} alt="success" width="45" height="45"/><div className="banner-text-error">Download was unable to complete. Please try again </div> <div className="cross-button" onClick={this.crossClicked}>X</div>
            </div>:null}
            {submitClicked && finalCount>0? 
            <>
            <h2>Patient Search Results <span className="record-numbers">-  {finalCount} records found.</span>
            {finalCount>1? <button className="download-all-button" onClick={this.showDownloadBanner}> <a href={sample}download>{downloadText}</a></button>:
            // eslint-disable-next-line
            finalCount===1? <button className="download-all-button" onClick={this.showFailureBanner}> <a href="#">{downloadText}</a></button>:null}
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
                    <Col id={"name"} onClick={() => this.changeIcon("name", direction,filteredDataToDisplay)} sm={2}>Name <MDBIcon icon={this.state["name"] ? "chevron-up" : "chevron-down"}/> </Col>
                    <Col id={"patientId"} onClick={() => this.changeIcon("patientId", direction,filteredDataToDisplay)} sm={2}>Patient ID <MDBIcon icon={this.state["patientId"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={"accessionNumber"} onClick={() => this.changeIcon("accessionNumber", direction,filteredDataToDisplay)} sm={2}>Accession No.<MDBIcon icon={this.state["accessionNumber"] ? "chevron-up" : "chevron-down"}/></Col>
                    <Col id={"performedDate"} onClick={() => this.changeIcon("performedDate", direction,filteredDataToDisplay)} sm={2}>Performed Date <MDBIcon icon={this.state["performedDate"] ? "chevron-up" : "chevron-down"} /></Col>
                    <Col sm={1}>Modalities</Col>
                    <Col sm={2} className="col-no-objects">No. Objects</Col>
                    <Col sm={1} className="col-no-series">No. Series</Col>
            </Row>
            </Container>
            {submitClicked && finalCount>0 && dataSorted==false?
                filteredDataToDisplay.map((value,index)=>{
                 //   console.log("valueeee-->",value);
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
                }) :submitClicked && finalCount>0 && dataSorted?
                sortedValues.map((value,index)=>{
                 //   console.log("valueeee-->",value);
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
