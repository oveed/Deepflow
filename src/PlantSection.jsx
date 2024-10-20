import React, { useState } from 'react'
import "./MainSection.css"
import "./PlantSection.css"
import axios from 'axios';

export default function PlantSection() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);

    const [previewImage, setPreviewImage] = useState(null);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);  // Save the file in state
            setPreviewImage(URL.createObjectURL(selectedFile));
        }
    };

    const handleSubmit = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://192.168.212.253:5000/predict_plant_disease', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data); // Print the result
        } catch (error) {
            console.error('Error response:', error.response ? error.response.data : error.message);
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
                    {result && (
                        <div className="result">
                            <h3>Result:</h3>
                            <p>{result}</p>
                        </div>
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
