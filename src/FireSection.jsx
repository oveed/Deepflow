import React from 'react'
import "./MainSection.css"
import "./FireSection.css"
import { Input } from '@mui/material'
export default function FireSection() {
    return (
        <section className='fire-section' id='3'>
            <div className="fire">
                <div className="fire-left">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                </div>
                <div className="fire-center">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                </div>
                <div className="fire-right">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                </div>
                <div className="fire-bottom">
                    <div className="main-fire"></div>
                </div>
            </div>
            <div className="card-element">
            <h3 style={{marginTop: '120px',marginRight:'20px'}}>Enter these recent values:</h3>
                    <div className="d-flex" style={{display: 'flex',alignItems: "center", justifyContent: 'center', flexDirection:'column'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexDirection:'column' }}>
    <span>                    <label htmlFor="quantity" style={{ fontWeight: 'bold' }}>FFMC:</label>
                        <Input
                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 8px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={2.5}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        /></span>
<span>
<label htmlFor="quantity" style={{ fontWeight: 'bold' }}>DC:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 8px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={2.5}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        /></span>

<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>ISI:</label>
                        <Input
                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 8px',
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

<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Tempreture:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 8px',
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

<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>RH:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 8px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={0.5}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        />
</span>
<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Wind:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 8px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={2.5}
                            slotProps={{
                                input: {
                                    min: 1,
                                    max: 5,
                                    step: 0.1,
                                },
                            }}
                        /></span>

<span><label htmlFor="quantity" style={{ fontWeight: 'bold' }}>Rain:</label>
                        <Input

                            type="number"
                            style={{
                                backgroundColor: 'white',
                                padding: '5px 10px',
                                margin: '3px 8px',
                                borderRadius: '15px',

                            }}
                            disableUnderline
                            defaultValue={2.5}
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
            <div className="fire">
                <div className="fire-left">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                </div>
                <div className="fire-center">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                </div>
                <div className="fire-right">
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                </div>
                <div className="fire-bottom">
                    <div className="main-fire"></div>
                </div>
            </div>
        </section>
    )
}
