import React from "react";
import {Link} from "gatsby";
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle = 'About Page'>
            <p>Hi there I'm Pushkaraj!</p>
        </Layout>

    )
}

export const Head = () => <title>About me</title>

export default AboutPage