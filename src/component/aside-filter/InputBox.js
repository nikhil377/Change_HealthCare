import './InputBox.css'
export default function InputBox(props) {
    return (
        <div className="input-box">
            <label className="input-label" for="fname">{props.name}</label>
            {props.isMandatory? <span>&#42;</span> :null}
            <br/>
            <input type="text" id="fname" name="fname"/><br/>
        </div>
       
    )
}
