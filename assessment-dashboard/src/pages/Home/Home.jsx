import React from "react";
import "./Home.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";
import { FaBars } from "react-icons/fa";
import dollar_icon from "../../components/Assets/dollar_icon.png"
import like_icon from "../../components/Assets/like_icon.png"
import share_icon from "../../components/Assets/share_icon.png"
import star_icon from "../../components/Assets/star_icon.png"

const barData = [
    { "name": 2005, "detected": 860, "total": 1200 },
    { "name": 2006, "detected": 1130, "total": 1300 },
    { "name": 2008, "detected": 1154, "total": 1400 },
    { "name": 2010, "detected": 1162, "total": 1500 },
    { "name": 2011, "detected": 893, "total": 1000 },
    { "name": 2013, "detected": 945, "total": 1100 },
    { "name": 2015, "detected": 672, "total": 750 },
    { "name": 2017, "detected": 837, "total": 950 },
    { "name": 2018, "detected": 801, "total": 920 },
    { "name": 2020, "detected": 601, "total": 1400 },
    { "name": 2022, "detected": 869, "total": 1000 },
    { "name": 2024, "detected": 847, "total": 900 }
]



const areaData = [
    { name: "Jan", value1: 30, value2: 10 },
    { name: "Feb", value1: 70, value2: 50 },
    { name: "Mar", value1: 40, value2: 30 },
    { name: "Apr", value1: 99, value2: 60 },
    { name: "May", value1: 50, value2: 20 },
    { name: "Jun", value1: 95, value2: 80 },
    { name: "Jul", value1: 60, value2: 40 },
    { name: "Aug", value1: 80, value2: 70 },
    { name: "Sep", value1: 30, value2: 10 },
    { name: "Oct", value1: 75, value2: 55 },
    { name: "Nov", value1: 45, value2: 25 },
    { name: "Dec", value1: 90, value2: 85 },
];

const pieData = [
    { name: "Filled", value: 45 },
    { name: "Remaining", value: 55 },
];

const colors = ["#0D2C56", "#F5A623"];

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="header">
                <p className="user-dashboard-text">User Dashboard</p>
                <FaBars className="hamburger-icon" />
            </div>

            <div className="top-cards">
                <div className="card earning">
                    <div className="card-header">
                        <h3>Earning</h3>
                        <img src={dollar_icon} className="card-icon" alt="dollar_icon" />
                    </div>
                    <p className="card-value">$ 628</p>
                </div>

                <div className="card sharing">
                    <div className="card-header">
                        <h3>Share</h3>
                        <img src={share_icon} className="card-icon" alt="share_icon" />
                    </div>
                    <p className="card-value">2434</p>
                </div>

                <div className="card liking">
                    <div className="card-header">
                        <h3>Likes</h3>
                        <img src={like_icon} className="card-icon" alt="like_icon" />
                    </div>
                    <p className="card-value">1259</p>
                </div>

                <div className="card rating">
                    <div className="card-header">
                        <h3>Rating</h3>
                        <img src={star_icon} className="card-icon" alt="star_icon" />
                    </div>
                    <p className="card-value">8.5</p>
                </div>
            </div>

            <div className="chart">
                <div className="vertical-charts">
                    <div className="chart-container">
                        <h3>Result</h3>
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={barData}>
                                <XAxis dataKey="name" />
                                <YAxis domain={[0, 1600]} tickCount={5} />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" stroke="lightgrey" vertical={false} />
                                <Bar dataKey="detected" fill="rgba(0, 43, 91, 0.9)" name="Detected Phishing Emails" />
                                <Bar dataKey="total" fill="rgba(255, 159, 0, 0.9)" name="Total Emails Received" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart-container">
                        <h3>Analysis</h3>
                        <ResponsiveContainer width="100%" height={150}>
                            <AreaChart data={areaData}>
                                <defs>
                                    <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#002b5b" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#002b5b" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff9f00" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#ff9f00" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" stroke="lightgrey" vertical={false} />
                                <Tooltip />
                                <Area
                                    type="basis"
                                    dataKey="value1"
                                    fill="url(#colorValue1)"
                                    stroke="#002b5b"
                                    strokeWidth={2}
                                    strokeOpacity={0.9}
                                />
                                <Area
                                    type="basis"
                                    dataKey="value2"
                                    fill="url(#colorValue2)"
                                    stroke="#ff9f00"
                                    strokeWidth={2}
                                    strokeOpacity={0.9}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>


                <div className="side-chart">
                    {/* <h3>45%</h3>
                    <PieChart width={150} height={150}>
                        <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={50}>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} />
                            ))}
                        </Pie>
                    </PieChart> */}

                    <div className="ppie">
                        <PieChart width={120} height={120}>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius={30}
                                outerRadius={55}
                                startAngle={90}
                                endAngle={-270}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))}
                            </Pie>
                        </PieChart>

                    </div>
                    <div className="percentage-label">45%</div>

                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>

                    <button className="check-btn">Check Now</button>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;
