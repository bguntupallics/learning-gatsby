import React from "react";
import Layout from "../components/Layout";
import Register from "../components/Register";

const loginPage = () => {
    return (
        <Layout>
            <section>
                <div>
                    <Register />
                </div>
            </section>
        </Layout>
    );
}

export default loginPage;

export const Head = () => <title>Register</title>