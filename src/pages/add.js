import React from "react";
import Layout from "../components/Layout";
import Form from "../components/Form";

const addPage = () => {
    return (
        <Layout>
            <section>
                <div>
                    <Form />
                </div>
            </section>
        </Layout>
    );
}

export default addPage;

export const Head = () => <title>Add Employee</title>