import React from 'react'
import {Spring} from 'react-spring/renderprops'
import './Barnav2.css'
import logo from './medix.jpg'; 
import Ac from '@material-ui/icons/Search';
import Co from '@material-ui/icons/Contacts';
import Cc from '@material-ui/icons/CollectionsBookmark';
import Fo from '@material-ui/icons/FilterHdr';
import To from '@material-ui/icons/Tune';
export default function Barnav() {
    return (
        <Spring
        from={{ opacity : 0 ,marginTop : -500}}
        to={{ opacity : 1 ,marginTop : 0}} 
        config={{delay:1000, duration:1000}}
        >
            {props =>(
                <div style={props}>
                    <div class="nb">
                        <div id="im">
                            <img src={log}/>
                        </div>
                        <div id="im2">
                            <div id="se1">
                                <input id="p1" style={{background:"rgba(1,0,0,0.5)"}} type="text" placeholder="Search"/>
                                <Ac style={{fontSize:"25"}}/>
                            </div>
                            <Co style={{fontSize:"30"}}/>
                            <Cc style={{fontSize:"30"}}/>
                            <Fo style={{fontSize:"30"}}/>
                            <To style={{fontSize:"30"}}/>
                        </div>
                    </div>
                </div>
            )

            }
        </Spring>
    )
}
