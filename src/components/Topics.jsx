import React, { useState, useEffect } from "react";
import axios from "axios";
import { TopicsList } from "../models/TopicsList";
// const currDate = () => {
//     return new Date().toString();
// };

const API_URI = "https://spring-boot-topics-app.herokuapp.com/api/v1/topics/";

const initialState = () => {
    // const topics = [
    //     {
    //         id: "ReactJS",
    //         name: "React 18",
    //         description: "React is awesome!!",
    //         // time: currDate(),
    //     },
    //     {
    //         id: "java",
    //         name: "Java 17",
    //         description: "Java Java!!",
    //         // time: currDate(),
    //     },
    // ];
    TopicsList.forEach((topic) => {
        axios.post(API_URI, topic);
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
        axios.delete(API_URI + currTopic.id);
    }
    function addTopic(currTopic) {
        // (oldArray) => [...oldArray, newElement];
        setTopics([
            ...topics,
            {
                id: "java",
                name: "Java 11",
                description: "Java 11 Java!!",
                // time: currDate(),
            },
        ]);
        axios.post(API_URI, currTopic);

        // setTopics([
        //     {
        //         id: "react",
        //         name: "React 18",
        //         description: "React is awesome!!",
        //         time: currDate(),
        //     },
        //     {
        //         id: "java",
        //         name: "Java 17",
        //         description: "Java Java!!",
        //         time: currDate(),
        //     },
        // ]);
    }
    const getTopics = () => {
        axios.get(API_URI).then((res) => {
            console.log(res);
            setTopics(res.data);
        });
    };

    useEffect(() => {
        getTopics();
    }, []);

    return topics.map((topic, index) => {
        return (
            <div className="card col-sm-6 text-center">
                <div
                    key={index}
                    // className="card card-body col-sm-6 w-50 shadow-sm col"
                    className="card-body shadow-sm"
                >
                    <button
                        type="button"
                        className="btn-close float-end"
                        aria-label="Close"
                        onClick={() => {
                            removeTopic(topic);
                        }}
                    ></button>
                    <h1
                        className="card-title text-primary"
                        onClick={() => {
                            addTopic(topic);
                        }}
                    >
                        {topic.id}
                    </h1>
                    <h2 className="card-subtitle mb-2 text-muted">
                        {topic.name}
                    </h2>
                    <p className="card-text">{topic.description}</p>
                    {/* <span className="card-text">{topic.time}</span> */}
                </div>
            </div>
        );
    });
};
