import React from 'react';
import './Analytics.css';
import { LineChart, Line, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', tasks: 40, completed: 30 },
  { name: 'Week 2', tasks: 50, completed: 45 },
  { name: 'Week 3', tasks: 60, completed: 50 },
  { name: 'Week 4', tasks: 80, completed: 70 },
];

const pieData = [
  { name: 'Completed', value: 70 },
  { name: 'Remaining', value: 30 },
];

const COLORS = ['#00C49F', '#FF8042'];

const Analytics = () => {
  return (
    <div className="analytics-container">
      <h1 className="analytics-title">Project Analytics Dashboard</h1>
      
      {/* Task Completion and Progress Overview */}
      <div className="analytics-cards">
        <div className="analytics-card">
          <h3>Task Completion Rate</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-card">
          <h3>Team Productivity (Tasks Completed)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="completed" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active User Stats */}
      <div className="analytics-cards">
        <div className="analytics-card">
          <h3>Active Users</h3>
          <div className="user-stats">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Tasks Completed</th>
                  <th>Last Active</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>23</td>
                  <td>2 hours ago</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>45</td>
                  <td>30 mins ago</td>
                </tr>
                <tr>
                  <td>Mark Johnson</td>
                  <td>12</td>
                  <td>3 hours ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Project Progress (Bar)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tasks" fill="#82ca9d" />
              <Bar dataKey="completed" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Deadlines Section */}
      <div className="analytics-deadlines">
        <h3>Upcoming Deadlines</h3>
        <ul>
          <li>Project Alpha - 3 days remaining</li>
          <li>Task B - 5 days remaining</li>
          <li>Feature X - 7 days remaining</li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
