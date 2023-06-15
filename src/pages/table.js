import React, {useState} from "react";
import axios from "axios";
import Layout from "../components/Layout";

const TablePage = () => {
    const [data, setData] = useState([]);

    axios.get('http://localhost:8080/api/employees').then(response => {
        setData(response.data);
    });


    return (
        <Layout>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.position}</td>
                                <td>{item.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
};

export default TablePage;

export const Head = () => <title>Employees</title>