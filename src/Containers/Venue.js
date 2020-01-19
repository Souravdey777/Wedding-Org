import React, { Component } from 'react';
import VenueCards from '../Components/VenueCards/VenueCards';
import AdminConsole from '../Components/AdminConsole/AdminConsole';
//import PropTypes from 'prop-types';
let isAdmin = true;
class Venue extends Component {
    render() {
        return (
            <div>
                <VenueCards />
                {isAdmin ? <AdminConsole /> : null}
            </div>
        );
    }
}

// Venue.propTypes = {

// };

export default Venue;