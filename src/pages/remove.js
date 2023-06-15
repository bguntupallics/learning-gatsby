import React from "react";
import Remove from "../components/Remove";
import Layout from "../components/Layout";

const removePage = () => {
    return (
        <Layout>
            <section>
                <div>
                    <Remove />
                </div>
            </section>
        </Layout>
    );
}

export default removePage;

export const Head = () => <title>Remove Employee</title>