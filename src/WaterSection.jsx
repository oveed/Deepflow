import React, { useState } from 'react';
import './WaterSection.css';
import { Grid, InputAdornment, TextField, Button, ThemeProvider, createTheme, Input } from '@mui/material';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import QuantityInput from './NumberInput';



const droplets = 250;


const WaterSection = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
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

    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976d2', // Adjust this color to your preference
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <section className="water-section section" id='2'>
                {rainDrops}
                <div
                    className="card-element"
                    style={{
                        zIndex: '10',
                    }}
                >
                    {/* <form>
                        <TextField
                            label="Title"
                            name="title"
                            variant="outlined"
                            required
                            fullWidth
                        />
                        <TextField
                            label="Teaser"
                            name="teaser"
                            variant="outlined"
                            multiline
                            required
                            fullWidth
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>

                    </form> */}
                    {/* <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Quantity:</label>
                        <QuantityInput
                            id="quantity" // associate the label with the input
                            aria-label="Quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            // value={quantity}
                            // onChange={handleQuantityChange}
                            min={1}
                            max={99}
                            step={0.1}
                        />
                    </div> */}
                    <h3 style={{marginTop: '120px'}}>Enter recent rain percipitation <br />values:</h3>
                    <div className="d-flex" style={{display: 'flex',alignItems: "center", justifyContent: 'center', flexDirection:'column'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexDirection:'column' }}>
                        

<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Day1:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '5px 7px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={0.0}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        /></span>

<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Day2:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 7px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={0}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        /></span>
<span>
<label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Day3:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 7px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={0}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        /></span>

<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Day4:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 7px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={0}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        />
</span>
<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Day5:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 7px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={1.4}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        /></span>

<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Day6:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 7px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={2.0}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        /></span>
                        <button>Submit</button>
                    </div>

                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
};

export default WaterSection;
