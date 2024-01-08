import React, { useState } from "react";

const BookingForm=(props)=>{
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const [guests,setGuests]=useState(1);
    const [occasion,setOccasion]=useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.SubmitForm(e);
    };

    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e);
    };
    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" onChange={(e)=>{handleChange(e.target.value)}} value={date} type="date" required></input>
                        </div>

                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e)=>{setTime(e.target.value)}} required>
                                <option value="">Select a time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTime =>{
                                        return (
                                        <option key={availableTime}>{availableTime}</option>);
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of guests:</label>
                            <input id="book-guests" type="number" min={1} max={10} value={guests} required onChange={(e)=>{setGuests(e.target.value)}}></input>
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" key={occasion} value={occasion } onChange={(e)=>{setOccasion(e.target.value)}}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value="Make Your Reservation"></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;