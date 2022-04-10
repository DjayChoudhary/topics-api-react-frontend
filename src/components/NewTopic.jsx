import axios from "axios";
import React, { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

export const NewTopic = () => {
    const [topic, addTopic] = useState();

    const handleChange = (e) => {
        addTopic({
            ...topic,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();

        console.log(topic);
        axios.post(API_URL, topic);
    };
    return (
        <form className="container card card-body shadow-sm">
            <div className="mb-3">
                <label htmlFor="topic" className="topic-id">
                    Topic Id
                </label>
                <input
                    type="text"
                    name="id"
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Topic Name
                </label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Topic Description
                </label>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </form>
    );
};
