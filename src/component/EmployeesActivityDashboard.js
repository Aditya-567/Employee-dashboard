import React, { useState } from "react";


const Employee = ({ rank, name, designation, hoursWorked, changes }) => {
    const getRankIcon = (rank) => {
        switch (rank) {
            case 1:
                return "🥇";
            case 2:
                return "🥈";
            case 3:
                return "🥉";
            default:
                return rank;
        }
    };

    const renderChanges = (changes) => {
        const changeValue = changes.slice(2);
        const changeSymbol = changes.slice(0, 1);
        return (
            <span>
                <span style={{ color: changeSymbol === '▲' ? 'green' : 'red' }}>{changeSymbol}</span>
                {changeValue}
            </span>
        );
    };

    return (
        <tr>
            <td>{getRankIcon(rank)}</td>
            <td>{name}</td>
            <td>{designation}</td>
            <td>{hoursWorked}</td>
            <td>{renderChanges(changes)}</td>
        </tr>
    );
};

const EmployeesActivityDashboard = () => {
    const [employees, setEmployees] = useState([
        {
            rank: 1,
            name: "Rakesh Sharma",
            designation: "UI/UX Designer",
            hoursWorked: "7(42)",
            changes: "▲ 1.5 hrs",
        },
        {
            rank: 2,
            name: "Ankita Thakur",
            designation: "HR Recruiter",
            hoursWorked: "7(41)",
            changes: "▼ 1.5 hrs",
        },
        {
            rank: 3,
            name: "Sarah Yadav",
            designation: "Product Manager",
            hoursWorked: "7(40)",
            changes: "▲ 1.5 hrs",
        },
        {
            rank: 4,
            name: "Harsha Shivhare",
            designation: "Designer",
            hoursWorked: "7(37)",
            changes: "▲ 1.5 hrs",
        },
        {
            rank: 5,
            name: "Vanhi Rai",
            designation: "Video Editor",
            hoursWorked: "7(37)",
            changes: "▼ 1.5 hrs",
        },
        {
            rank: 6,
            name: "Bhanu Sharma",
            designation: "Business Analyst",
            hoursWorked: "7(32)",
            changes: "▼ 1.5 hrs",
        },
        {
            rank: 8,
            name: "Sunil Yadav",
            designation: "Developer",
            hoursWorked: "7(24)",
            changes: "▲ 1.5 hrs",
        },
        {
            rank: 9,
            name: "Akash Roy",
            designation: "Business Analyst",
            hoursWorked: "7(21)",
            changes: "▼ 1.5 hrs",
        },
        {
            rank: 10,
            name: "Rohit Soni",
            designation: "Developer",
            hoursWorked: "7(20)",
            changes: "▼ 1.5 hrs",
        },
        {
            rank: 11,
            name: "Suraj Chauhan",
            designation: "Developer",
            hoursWorked: "7(18)",
            changes: "▼ 1.5 hrs",
        },
    ]);

    return (
        <div className="container">
            <div className="dashboard">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>No. of hours worked</th>
                                <th>Changes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <Employee
                                    key={employee.rank}
                                    {...employee}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeesActivityDashboard;
