import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


export default function DashboardBookingBanner(props) {

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return (
        <div className="DashboardComponentWrappers DbbOuterWrapper">
            <h4>Plan your next visit</h4>
            <h5>Book a desk in 2 easy steps</h5>
            <Link to={'/booking'}>
                <button>Book a desk now</button>
            </Link>
        </div>
    );
}

