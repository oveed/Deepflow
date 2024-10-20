import React, { useState } from 'react'
import "./MainSection.css"
import "./PlantSection.css"
import axios from 'axios';

export default function PlantSection() {
    const [previewImage, setPreviewImage] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };
    const handleSubmit = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('https://api.apptap.tn/predict_plant_disease', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data); // Print the result
        } catch (error) {
            console.error('Error uploading the image:', error);
        }
    };

    return (
        <section className='plant-section section ' id='1'>
            <div className="base">
                <div className="flowerpot"></div>
                <div className="blade blade-center"></div>
                <div className="blade blade-left-s"></div>
                <div className="blade blade-right-s"></div>
                <div className="blade blade-left-l"></div>
                <div className="blade blade-right-l"></div>
            </div>
            <div className="card-element">
                <div className="upload-container">
                    <h3>Enter a picture of your crops:</h3>
                    <input
                        type="file"
                        className="file-input"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                    {/* <button className="submit-btn" onClick={handleSubmit}> */}
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Preview"
                            className="image-preview"
                            width={'100px'}
                        />
                    )}
                    <button className="submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
            <div className="base">
                <div className="flowerpot"></div>
                <div className="blade blade-center"></div>
                <div className="blade blade-left-s"></div>
                <div className="blade blade-right-s"></div>
                <div className="blade blade-left-l"></div>
                <div className="blade blade-right-l"></div>
            </div>
        </section>
    )
}
