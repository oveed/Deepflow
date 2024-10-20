import React, { useState } from 'react';
import './WaterSection.css';
import { Input, ThemeProvider, createTheme } from '@mui/material';
import axios from 'axios';

const droplets = 250;

const WaterSection = () => {
    const [quantity, setQuantity] = useState({
        day1: 0.0,
        day2: 0.0,
        day3: 0.0,
        day4: 0.0,
        day5: 0.0, 
        day6: 1.4,
        day7: 2.0,
    });
    const [result, setResult] = useState(null);

    const handleQuantityChange = (event) => {
        const { name, value } = event.target;
        setQuantity((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setResult(null); // Reset result before new request
        try {
            const response = await axios.post('http://192.168.212.253:5000/predict_weather', {
                data: Object.values(quantity).map(Number), // Ensure it sends an array
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Response data:', response.data); // Log the response for debugging

            // Check if the response contains predicted_values and set it accordingly
            if (response.data.predicted_values) {
                setResult(response.data.predicted_values); // Set only the predicted values
            } else {
                setResult('Unexpected response format'); // Handle unexpected response
            }
        } catch (error) {
            console.error('Error response:', error.response ? error.response.data : error.message);
            setResult('Error fetching result'); // Handle errors
        }
    };



    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2',
            },
        },
    });

    const rainDrops = Array.from({ length: droplets }).map((_, r) => {
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        const o = Math.random();
        const a = Math.random() + 0.5;
        const d = (Math.random() * 2) - 1;
        const s = Math.random();

        return (
            <svg
                key={r}
                className="rain__drop"
                preserveAspectRatio="xMinYMin"
                viewBox="0 0 5 50"
                style={{
                    '--x': x,
                    '--y': y,
                    '--o': o,
                    '--a': a,
                    '--d': d,
                    '--s': s,
                }}
            >
                <path
                    stroke="none"
                    d="M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z"
                />
            </svg>
        );
    });

    return (
        <ThemeProvider theme={theme}>
            <section className="water-section section" id='2'>
                {rainDrops}
                <div className="card-element" style={{ zIndex: '10' }}>
                    <h3 style={{ margin: '170px 15px 10px 15px' }}>Enter recent rain precipitation values:</h3>
                    <div className="d-flex" style={{ display: 'flex', alignItems: "center", justifyContent: 'center', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexDirection: 'column' }}>
                            {['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'].map((day, index) => (
                                <span key={day}>
                                    <label htmlFor={day} style={{ fontWeight: 'bold' }}>Day {index + 1}:</label>
                                    <Input
                                        name={day}
                                        type="number"
                                        style={{
                                            backgroundColor: 'white',
                                            padding: '5px 10px',
                                            margin: '5px 7px',
                                            borderRadius: '15px',
                                        }}
                                        disableUnderline
                                        value={quantity[day]}
                                        onChange={handleQuantityChange}
                                        min={0}
                                        step={0.1}
                                    />
                                </span>
                            ))}
                        </div>
                        {result && (
                            <div className="result">
                                <h3>Result:</h3>
                                <p>{result.join(', ')}</p>                            </div>
                        )}
                        <button className="submit-btn" onClick={handleSubmit}>Submit</button>

                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
};

export default WaterSection;
