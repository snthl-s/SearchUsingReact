import React from 'react';

export default function StudentTable(props){
    return(
        <table className="table">
            <thead className="table-heading">
                <tr>
                    <th>Name</th>
                    <th>
                        <button className="heading" onClick={() =>
                            props.sortBy('gender')
                        } >

                        Gender
                        </button>
                    </th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody className="table-content">
                {
                    props.data.map(row =>(
                        <tr key={row.index}>
                            <td >{row.name}</td>
                            <td >{row.gender}</td>
                            <td >{row.company}</td>
                            <td >{row.email}</td>
                            <td >{row.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}