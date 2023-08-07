import React, { useEffect, useMemo, useState } from 'react';
import './AboutMe.css';

function AboutMe({ about, data, images }) {

    const profilePicture = useMemo(() => {
        const profilePicture = images.find((image) => image.label === 'profile picture');
        if (profilePicture) {
            const buffer = profilePicture.serialized.data;
            const base64String = btoa(String.fromCharCode(...new Uint8Array(buffer)));
            return `data:${profilePicture.mimetype};base64,${base64String}`;
        }
        return null;
    }, [images]);

    return (
        <div id="about" style={about?.background}>
            <h2 style={about?.title}>About</h2>
            <div style={about?.content}>
                {profilePicture && <img style={about?.image} src={profilePicture} alt="profile" />}
                <p id="about-summary"style={{...about?.summary, width: profilePicture ? about?.summary?.width : "95%"}}>{data?.summary}</p>
            </div>
        </div>
    );
}

export default AboutMe;
