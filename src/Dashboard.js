// Dashboard.js
// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importing axios for API requests

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    // Fetch data function
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
            setData(response.data);
        } catch (err) {
            setError('Failed to fetch data.');
            console.error(err);
        }
    };

    // Fetch data periodically using useEffect
    useEffect(() => {
        fetchData(); // Initial call

        const interval = setInterval(() => {
            fetchData(); // Fetch data every 5 seconds
        }, 5000); // Adjust the time interval as needed

        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {error && <p>{error}</p>}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li> // Render data dynamically
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
