import React from "react";
import { Topics } from "./Topics";
import { UseEffect } from "./UseEffect";

// export const currDate = () => {
//     return new Date().toString();
// };
function App() {
    return (
        <div className="container">
            <div className="text-center mt-4 mb-4 d-grid gap-2 container">
                {/* <UseEffect /> */}
                <Topics />
            </div>
        </div>
    );
}

export default App;
