import React from 'react'
import {Spring} from 'react-spring/renderprops'
import './Barnav4.css'
export default function Barnav3() {
    return (
        <Spring
        from={{ opacity : 0 ,marginTop : -500}}
        to={{ opacity : 0.7 ,marginTop : -40}} 
        config={{delay:2000, duration:1000}}
        >
            {props =>(
                <div style={props}>
                    <div class="nb2">
                        <p id="tx2">There</p>
                    </div>
                </div>
            )

            }
        </Spring>
    )
}
