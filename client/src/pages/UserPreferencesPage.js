import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";

export default function UserPreferencesPage(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return(
        <div>
            <Header />
            <h1>This page will contain options to change the user preferences</h1>
            <h2>Current Accessibility Settings : {globalUserDetails.accessibility.toString()}</h2>
            <button onClick={()=>setGlobalUserDetails({...globalUserDetails, accessibility : true})}> Accessibility = true</button>
            <button onClick={()=>setGlobalUserDetails({...globalUserDetails, accessibility : false})}>Accessibility = false</button>

            <Link to={'/dashboard'}>
                <button>Back to dashboard</button>
            </Link>
        </div>
    );
}
