import React from "react";
import ReactDOM from "react-dom"; 

const parent = React.createElement("div",
{id:"parent"},[
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"I am learning react js"),
React.createElement("h2",{},"I am learning react js new") ]
),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"This is h1 tag"),
    React.createElement("h2",{},"This is h1 tag") ]
    )
]
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

