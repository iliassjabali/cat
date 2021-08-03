import React from 'react';
import Cat from "./cat.js";
// import '.index.css'

export default function App() {
    return (
        <div align="center"  height ="window.innerHeight" width= "window.innerWidth">
            <Cat width="600" />
            <div/>
            <h2>
                Cat pics are generated each 2s!
            </h2>
        </div>
    );
}

