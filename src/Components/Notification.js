import React from 'react';

const Notification = ({ backgroundColor, Color }) => {
    return (
        <div className="notification" style={{ backgroundColor }}>
            <p style={{ color: Color }}>
                Notifications are available here
            </p>
        </div>
    );
};

export default Notification;
