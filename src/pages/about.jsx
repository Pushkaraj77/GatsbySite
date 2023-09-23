import React from "react";
import {Link} from "gatsby";

const AboutPage = () => {
    return (
        <main>
            <h1>About me</h1>
            <Link to = "/">Return to Home page</Link>
            <p>Hi there I'm Pushkaraj!</p>
        </main>
    )
}

export const Head = () => <title>About me</title>

export default AboutPage