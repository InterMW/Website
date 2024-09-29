import React, { Component } from "react";

class Mission extends Component {
    render() {
        return (
            <div>
                <h3>Our Mission</h3>
                <p>The purpose of this website is to provide easy access to the
                    data that I have collected and to give me a reason to 
                    investigate different technologies and coding
                    methodologies.

                    Everything you see here is stored and documented in the
                    <a href="https://www.github.com/InterMW"> InterMW</a> github
                    repository, the latest chapter in my efforts to learn more 
                    about modern code and microservice architecture.  </p>
                <h3>Why Planes?</h3>
                <p>
                    One night I was walking home from the Loyola Redline station,
                    toward the lake, when my partner pointed out the lights
                    floating over the lake.  The lights were the landing lights of
                    planes flying in, and she thought this was cool looking.

                    I had the idea that maybe I could show her where the planes are
                    in the sky.  I bought a little software defined radio usb
                    stick, downloaded the repo,

                    followed the documentation, ran the code, got her to look and
                    she didn't care in the slightest.
                    However, I had just graduated from college and had my first
                    full-time, non-intern job.  I needed something to do.
                </p>

                <p> Thus, the plane project was born. </p>

                <h3>Want to help?</h3>

                <p>All growth is collaboration and there is so much yet to do!
                    If you want to host a node, contribute to the code base, or
                    want some of the data that I collect for non-commercial
                    purposes, please see the Contact Me page.</p>
            </div>
        )
    }
}

export default Mission;
