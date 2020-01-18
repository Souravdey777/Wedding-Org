import React from 'react';
import ClassNames from "./SingleVenueCard.module.css";

const SingleVenueCard = props => {
    var eachVenueDetail = props.eachVenueDetail;
    return (
        <div className={ClassNames.card}>
            <div className={ClassNames.imageContainer}>
                <img className={ClassNames.image} src={eachVenueDetail.imageURL} alt="Image will go here" />
            </div>
            <div className={ClassNames.dataContainer}>
                <div className={ClassNames.VenueName}>{eachVenueDetail.Name}</div>
                <div>Capacity: {eachVenueDetail.Capacity}</div>
                <div style={{display: "flex",width:"100%",justifyContent:"space-between"}}>
                    <div>{eachVenueDetail.AddressDetails.locality}</div>
                    <div>Rating: {eachVenueDetail.Rating}</div>
                </div>
            </div>
        </div>
    );
};

export default SingleVenueCard;