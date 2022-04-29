import { React, useState, useContext } from 'react';
import { MyNameContext } from "../contexts/MyName"

function Tittle() {

    const { myName } = useContext(MyNameContext);

    return (
        <div >
            <h1>Hello</h1>
            <h1>Name: {myName}</h1>
        </div>
    );
}

export default Tittle;
