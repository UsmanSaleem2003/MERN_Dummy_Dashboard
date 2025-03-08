import React from "react";
import "./Home.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, CartesianGrid, PieChart, Pie, Cell } from "recharts";

const barData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 28 },
    { name: "Apr", value: 35 },
    { name: "May", value: 50 },
    { name: "Jun", value: 42 },
];

const areaData = [
    { name: "Jan", value1: 30, value2: 20 },
    { name: "Feb", value1: 50, value2: 40 },
    { name: "Mar", value1: 45, value2: 30 },
    { name: "Apr", value1: 60, value2: 50 },
    { name: "May", value1: 80, value2: 70 },
    { name: "Jun", value1: 90, value2: 85 },
];

const pieData = [{ name: "Progress", value: 45 }, { name: "Remaining", value: 55 }];
const colors = ["#ff9f00", "#ddd"];

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="top-cards">
                <div className="card earning">
                    <h3>Earning</h3>
                    <p>$ 628</p>
                </div>
                <div className="card">
                    <h3>Share</h3>
                    <p>2434</p>
                </div>
                <div className="card">
                    <h3>Likes</h3>
                    <p>1259</p>
                </div>
                <div className="card">
                    <h3>Rating</h3>
                    <p>8.5</p>
                </div>
            </div>

            <div className="charts">
                <div className="chart-container">
                    <h3>Result</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={barData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#ff9f00" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-container">
                    <h3>45%</h3>
                    <PieChart width={150} height={150}>
                        <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={50}>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>

            <div className="bottom-chart">
                <h3>Analysis</h3>
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={areaData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" />
                        <Area type="monotone" dataKey="value1" fill="#ff9f00" stroke="#ff9f00" />
                        <Area type="monotone" dataKey="value2" fill="#00aaff" stroke="#00aaff" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
