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
        setResult(null); // Reset result before new request
        if (!file) return;
    
        const formData = new FormData();
        formData.append('file', file); // Ensure the key matches your backend expectation
    
        try {
            const response = await axios.post('http://192.168.212.253:5000/predict_plant_disease', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log('Response data:', response.data); // Log the response for debugging
    
            // Check if the response contains the expected values and set accordingly
            if (response.data.prediction) {
                setResult([response.data.prediction]); // Wrap the prediction in an array
            } else {
                setResult(['Unexpected response format']); // Handle unexpected response
            }
        } catch (error) {
            console.error('Error response:', error.response ? error.response.data : error.message);
            setResult(['Error fetching result']); // Handle errors
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
                            <p>{result.join(', ')}</p>                           </div>
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
