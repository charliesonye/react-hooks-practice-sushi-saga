import React from 'react';

function AddMoney({onAddMoney}) {
 let addPrice = 5
 
    return(
        <div>
            <h3>Add Money</h3>
            <br />
            
            <button onClick = {() => onAddMoney(5)}> $5 </button>

            <hr />
            <button onClick = {() => onAddMoney(20)}> $20 </button>
            
            <hr />
            <button onClick = {() => onAddMoney(100)}> $100 </button>
            <hr />

        </div>

    )

}

export default AddMoney;