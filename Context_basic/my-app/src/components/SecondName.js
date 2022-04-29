import { React, useState, useContext } from 'react';
import { MyNameContext } from "../contexts/MyName"

function SecondName() {

    const { myName } = useContext(MyNameContext);

    return (
        <div >
            <h1>Second Name: {myName}</h1>
        </div>
    );
}

export default SecondName;
