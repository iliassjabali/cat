import React from 'react';
import Cat from "./cat.js";

export default function App() {

    return (
        <div >
            <h1>WORKS?</h1>
            <Cat />
            <button onClick={() => window.location.reload(false)}
                    className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
                <svg width="24" height="24" ><path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z"/></svg>
                <span>&ensp;Click to new cat!</span>
            </button>
        </div>
    );
}

