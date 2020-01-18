import React from 'react';
import SingleVenueCard from './SingleVenueCard/SingleVenueCard';
import { VenueDetails } from "../../mockData/mockVenue.js";

const VenueCards = () => {
    return (
        <div>
            {VenueDetails.length}
            {VenueDetails.map(VD => (
                <SingleVenueCard eachVenueDetail={VD} />
            ))}
        </div>
    );
};

export default VenueCards;