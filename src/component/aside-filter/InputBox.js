import React,{ Component } from 'react';
import './InputBox.css'
export default class InputBox extends Component {
    constructor(props){
        super(props);
        this.state={
            inputBoxValue:""
        }  
    }
    getChangedValue=(e)=>{
        this.setState({
            inputBoxValue:e.target.value
        },()=>{
            this.props.data(this.props.name+this.state.inputBoxValue)
        })
    }
    render(){
        const {inputBoxValue}=this.state;
        return (
            <div className="input-box">
                <label className="input-label" for={this.props.name}>{this.props.name}</label>
                {this.props.isMandatory? <span>&#42;</span> :null}
                <br/>
                {this.props.type==="date"?  
                
                <input id={this.props.name} name={this.props.name}  type="text"  className="date-input"
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                placeholder="MM/DD/YYYY" disabled={this.props.disabled} value={inputBoxValue} onChange={this.getChangedValue}/>
                :
                <input type="text" id={this.props.name} name={this.props.name} disabled={this.props.disabled} value={inputBoxValue} onChange={this.getChangedValue}/>}<br/>
            </div>
           
        )
    }
   
}
 