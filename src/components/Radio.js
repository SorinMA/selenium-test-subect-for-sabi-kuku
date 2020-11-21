import React, {useState} from "react";

function Radio(props) {
    const [sex, setSex] = useState("male");
    const radioCheck = (event) => {
        setSex(document.getElementById(event.target.id).value);
    }

    return (
        <>
                <p>Choose your sex: {sex}</p>
                <input 
                    type="radio" 
                    id="male" 
                    name="gender" 
                    value="male"
                    onClick={radioCheck}
                    checked={sex==="male"}
                />
                <label for="male">Male</label><br/>
                <input 
                    type="radio" 
                    id="female" 
                    name="gender" 
                    value="female"
                    onClick={radioCheck}
                    checked={sex==="female"}
                />
                <label for="female">Female</label><br/>
                <input 
                    type="radio" 
                    id="other" 
                    name="gender" 
                    value="other"
                    onClick={radioCheck}
                    checked={sex==="other"}
                />
                <label for="other">othersex</label><br/>
        </>
        )
}

export default Radio;
