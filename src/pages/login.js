import React from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";

const loginPage = () => {
    return (
        <Layout>
            <section>
                <div>
                    <Login />
                </div>
            </section>
        </Layout>
    );
}

export default loginPage;

export const Head = () => <title>Login</title>