import { Component } from 'react';
import React from 'react';
import  './PatientComponent.css'
import InputBox from './InputBox';
import MultiSelectAll from './MultiSelectAll.js'

export default class PatientComponent extends Component {
    constructor(props){
        super(props);
        this.initialState={
           value:"Patient Name",
           component:"patient",
           filteredData:[{
                firstName:"",
                lastname:"",
                patientId:"",
                internalId:"",
                Issuer:"Change Health-care",
                status: "On track",
                dateOfBirth:"12 Nov, 1997",
                gender:"Male"
           }]
        } 
        this.state=JSON.parse(JSON.stringify(this.initialState))
    
    }
    enableFields=(e)=>{
        this.setState({
            value:e.target.value
        });
    }
    submitData=()=>{
        this.props.data(this.state.filteredData)
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
            filteredData[0].lastname = value[1];
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
        if(value.includes("Internal Id")){
            value=value.split("Internal Id");
            const filteredData = this.state.filteredData.slice();
                filteredData[0].internalId = value[1];
            return()=>{
                this.setState({ filteredData });
        }
        }
    }
    // resetFields=(e)=>{
    //     e.preventDefault();
    //     const initialData= this.initialState.filteredData;
    //     console.log("inital state", this.initialState.filteredData);
    //     this.setState({
    //         initialData
    //     })
    // }
    render(){
         const {value,filteredData}=this.state;
         console.log("updated state in patient ", filteredData);
         const disabledSumbit= filteredData[0].firstName.length<=0 && filteredData[0].patientId.length<=0 && filteredData[0].internalId.length<=0
        return (
        <div>  
            <form onSubmit={this.submitData()}>
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
                <MultiSelectAll />
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
                <button type="submit" className="disabled-search-button" disabled={disabledSumbit}>SEARCH</button>
                <button className="clear-all-button">CLEAR ALL</button>
                </div>
                </form>    
            </div>
      
        )
    }

}