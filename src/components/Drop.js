import React, {useState} from "react";

function Drop(props) {
    const [fighter, setFighter] = useState(undefined);

    const chooseIt = () => {
        setFighter(document.getElementById("fighters").value);
    }

    return (
        <>
            <p>Choose your fighter: {fighter}</p>
            
            <select name="cars" id="fighters" onChange={chooseIt}>
                <option value="Lie-nus">Lie-nus</option>
                <option value="Stefan-coiu">Stefan-coiu</option>
                <option value="Sori-Kuku">Sori-Kuku</option>
                <option value="Sori-Kaka">Sori-Kaka</option>
            </select>
        </>
        )
}

export default Drop;
