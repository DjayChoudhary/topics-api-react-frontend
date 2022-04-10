import React, { useState, useEffect } from "react";
import axios from "axios";
import { TopicsList } from "../models/TopicsList";

const API_URL = process.env.REACT_APP_API_URL;

const initialState = () => {
    TopicsList.forEach((topic) => {
        axios.post(API_URL, topic);
    });
    return TopicsList;
};

export const Topics = (props) => {
    // https://stackoverflow.com/a/54677026 link to pushing data
    const [topics, setTopics] = useState(initialState);

    function removeTopic(currTopic) {
        // setTodos(todos.filter(todo => todo.id !== id));
        setTopics(topics.filter((topic) => topic != currTopic));
        console.log(currTopic.id);
        axios.delete(API_URL + currTopic.id);
    }

    const getTopics = () => {
        axios.get(API_URL).then((res) => {
            console.log(res);
            setTopics(res.data);
        });
    };

    useEffect(() => {
        getTopics();
    }, []);

    return topics.map((topic, index) => {
        return (
            <div className="card text-center mb-4">
                <div key={index} className="card-body shadow-sm w-100">
                    <button
                        type="button"
                        className="btn-close float-end"
                        aria-label="Close"
                        onClick={() => {
                            removeTopic(topic);
                        }}
                    ></button>
                    <h1 className="card-title text-primary">{topic.id}</h1>
                    <h2 className="card-subtitle mb-2 text-muted">
                        {topic.name}
                    </h2>
                    <p className="card-text">{topic.description}</p>
                </div>
            </div>
        );
    });
};
