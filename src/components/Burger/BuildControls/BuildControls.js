import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'



const controls = [

    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'}
]

const BuildControls = (props) => (
    
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)} </strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label}  
                        label={ctrl.label}
                            added={() => props.ingredientAdded(ctrl.type)}
                            removed={() => props.ingredientRemoved(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}/>
            ))}
            <button className="OrderButton" disabled={!props.purchasable}>ORDER NOW</button>
        </div>
  
);

export default BuildControls;
