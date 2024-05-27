import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h3>Why Planes?</h3>
                <p>  
                One night I was walking home from the Loyola Redline station, toward the lake, when my partner pointed out the lights floating over the lake.  The lights were the landing lights of planes flying in, and she thought this was cool looking.

                I had the idea that maybe I could show her where the planes are in the sky.  I bought a little software defined radio usb stick, downloaded (Put a link to dump-1090) the repo, 

                followed the documentation, ran the code, got her to look and she didn't care in the slightest.  However, I had just graduated from college and had my first full-time, non-intern job.  I needed something to do.
                </p>

                <p>
                    Thus, the plane project was born. 
                </p>
            </div>
        )
    }
}

export default About;
