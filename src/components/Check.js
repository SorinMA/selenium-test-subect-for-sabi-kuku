import React, {useState} from "react";

function Check(props) {
    const [fighters, setFighters] = useState([]);
    const addRemoveFighter = (event) => {
        const {target} = event;

        if (target.checked)
            setFighters(oldFighters => ([
                ...oldFighters,
                target.value
            ]));
        else {
            setFighters(oldFighters => {
                var index = oldFighters.indexOf(target.value);
                var aux = [...oldFighters];
                if (index !== -1) {
                    aux.splice(index, 1);
                }
                return aux;
            });
        }
    };

    return (
        <>
                <p>Choose your fighters: {fighters}</p>
                <input 
                    type="checkbox" 
                    id="lie-nus" 
                    name="fighters" 
                    value="lie-nus"
                    onClick={addRemoveFighter}
                />
                <label for="lie-nus">lie-nus</label><br/>
                <input 
                    type="checkbox" 
                    id="sori-kuku" 
                    name="fighters" 
                    value="sori-kuku"
                    onClick={addRemoveFighter}
                />
                <label for="sori-kuku">sori-kuku</label><br/>
                <input 
                    type="checkbox" 
                    id="sori-kaka" 
                    name="fighters" 
                    value="sori-kaka"
                    onClick={addRemoveFighter}
                />
                <label for="sori-kaka">sori-kaka</label><br/>
        </>
        )
}

export default Check;
