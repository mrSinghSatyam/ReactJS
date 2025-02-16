import React from 'react'

export default function Greeting() {
    const name = "Satyam"
    return (
        <>
        <h1>Hellooo, {name}</h1>
        <p>Date: {new Date().toLocaleDateString()}</p>
        </>
    )
}