import React from "react";
import { useState, useEffect } from "react";
import templateData from "./../data/bookings.json";
import Moment from 'react-moment';
import moment from 'moment';


export default function DashboardUpcomingBookings(props) {

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails.user_id);

    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    const [bookingArray, setBookingArray] = useState([]);
    

    // FETCH FOR BOOKINGS:
    useEffect(() => {
    // GET request using fetch inside useEffect React hook
        fetch(`http://localhost:3100/api/user-bookings/${globalUserDetails.user_id}`, {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                console.log("User bookings from API :")
                console.log(data);

                if (data.name != "error"){
                    setBookingArray(data);
                } else {
                    setBookingArray(templateData)
                }
            })
    }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)


    const [loadTo, setLoadTo] = useState(2);

    
    return (
        <div className="DashboardComponentWrappers">
            <h1>Your Upcoming Bookings</h1>
            <div>
                {bookingArray.map((element, index) =>{
                    console.log(bookingArray);

                    if (bookingArray.length > 1){

                        if (index < loadTo){
                            let timings;

                            if ((element.am) && (element.pm)){
                                timings = "9.00am - 17.00pm";
                            } else if (element.am){
                                timings = "9.00am - 13.00pm";
                            } else {
                                timings = "13.00pm - 17.00pm";
                            }

                            return (
                                <div>
                                    <h2>{element.date_booked} : {timings}</h2>
                                </div>
                            )
                        } else if (index == loadTo){
                            return (
                                <button onClick={()=>setLoadTo(loadTo + 2)}>Load More Booking</button>
                            )
                        } 
                    } else {
                        return (
                                <div>
                                    <h2>No Bookings Found</h2>
                                </div>
                            )
                    }

                })
                }
            </div>
        </div>
    );
}

