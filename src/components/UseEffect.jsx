import React, { useState, useEffect } from "react";

export const UseEffect = () => {
    const [resourceType, setResourceType] = useState("posts");

    useEffect(() => {
        console.log(resourceType);
    }, [resourceType]);

    return (
        <>
            <div>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>
                    Comments
                </button>
            </div>
            <h1>{resourceType}</h1>
        </>
    );
};
