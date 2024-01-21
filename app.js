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
const jsxHeading = <h1>Helloaa Bhagya</h1>

const HeadingComponent = () => {

    return <h1>hello bhagya 12</h1>
} 
const Title = () =>(
    <div>
      <h1> hello bhagya , </h1>
    </div>  
  );
const HeadingComponent2 = () =>(

    <div id="heading">
            <Title />
            <h2> kindly update code</h2>
        </div>
) ;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);


