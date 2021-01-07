import { Component } from 'react';
import React from 'react';
import  './PatientComponent.css'
import InputBox from './InputBox';
import MultiSelectAll from './MultiSelectAll.js'
import AsideResult from '../aside-results/AsideResult'

export default class PatientComponent extends Component {
    constructor(props){
        super(props);
        this.initialState={
           value:"Patient Name",
           component:"patient",
           filteredData:[{
                firstName:"",
                lastName:"",
                patientId:"",
                internalId:""
           }],
           submitClicked:false
        } 
        this.state=JSON.parse(JSON.stringify(this.initialState))
    
    }
    enableFields=(e)=>{
        this.setState({
            value:e.target.value
        });
    }
    submitData=()=>{
       // this.props.data(this.state.filteredData)
    }
    getInputFilteredData(value){
        if(value.includes("First Name")){
            value=value.split("First Name");
            const filteredData = this.state.filteredData.slice();
            filteredData[0].firstName = value[1];
            return()=>{
                this.setState({ filteredData });
        }
        }
        if(value.includes("Last Name")){
            value=value.split("Last Name");
            const filteredData = this.state.filteredData.slice();
            filteredData[0].lastName = value[1];
            return()=>{
                this.setState({ filteredData });
        }
        }
        if(value.includes("Patient Id")){
            value=value.split("Patient Id");
            const filteredData = this.state.filteredData.slice();
                filteredData[0].patientId = value[1];
            return()=>{
                this.setState({ filteredData });
        }
        }
        if(value.includes("Internal ID")){
            value=value.split("Internal ID");
            const filteredData = this.state.filteredData.slice();
                filteredData[0].internalId = value[1];
            return()=>{
                this.setState({ filteredData });
        }
        }
    }
    submitClicked=(e)=>{
        e.preventDefault()
        this.setState({
            submitClicked:true
        })
    }
    render(){
         const {value,filteredData,submitClicked}=this.state;
        return (
        <div className="patient-container">  
            <form onSubmit={this.submitData()} className="patient-form">
                <div>
                <input 
                        type="radio" 
                        id="patient-name" 
                        name="patient-name"
                        value="Patient Name" 
                        checked={value==="Patient Name"} 
                        onChange={this.enableFields}/>
        
                <label for="patient-name">Patient Name</label>
                <InputBox name="Last Name" isMandatory="true" disabled={value!=="Patient Name"} data={this.getInputFilteredData.bind(this)}/>
                <InputBox name="First Name" disabled={value!=="Patient Name"} data={this.getInputFilteredData.bind(this)}/>
                <hr/>
    
                <input 
                    type="radio" 
                    id="patient-id" 
                    name="patient-id" 
                    value="Patient ID & Issuer"
                    checked={value==="Patient ID & Issuer"}  
                    onChange={this.enableFields} />
        
                <label for="patient-id">Patient ID & Issuer</label>
                <InputBox name="Patient Id" isMandatory="true"  disabled={value!=="Patient ID & Issuer"} data={this.getInputFilteredData.bind(this)}/>
                <label className="issuer-label" for="issuer">Issuer</label>
                <MultiSelectAll  active={value==="Patient ID & Issuer"} />
                <hr/>
    
                <input 
                    type="radio" 
                    id="internal-id" 
                    name="internal-id" 
                    value="Internal ID" 
                    checked={value==="Internal ID"} 
                    onChange={this.enableFields}/>

                <label for="internal-id">Internal ID</label>
                <InputBox name="Internal ID" isMandatory="true" disabled={value!=="Internal ID"}  data={this.getInputFilteredData.bind(this)}/>
                <button type="submit" className="disabled-search-button" onClick={this.submitClicked}>SEARCH</button>
                <button className="clear-all-button">CLEAR ALL</button>
                </div>
                </form>    
                <AsideResult activeComponent={this.props.activeComponent} dataToDisplay={filteredData} submitClicked={submitClicked} data={this.props.data}/>
        </div>
      
        )
    }

}