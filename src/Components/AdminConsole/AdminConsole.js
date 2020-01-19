import React from 'react';
import ClassNames from "./AdminConsole.module.css";

const AdminConsole = () => {
    return (
        <div className={ClassNames.AdminConsole}>
            <div className={ClassNames.AdminButton}>
                Admin Console
            </div>
            <div className={ClassNames.AddVenue}>
                <div className={ClassNames.Add}>
                    <img src="" alt="Add"></img>
                </div>
                <div className={ClassNames.Update}>
                    <img src="" alt="Update"></img>
                </div>
            </div>
        </div>
    );
};


export default AdminConsole;