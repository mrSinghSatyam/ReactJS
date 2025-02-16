import react from 'react'

function Info() {
    const product = {
        name: "Laptop",
        price: 65000,
        brand: "HP",
        available: true,
    };
    return (
        <div>
            <h1>Product Information</h1>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p>
                <strong>Status:</strong> {product.available ? "Available" : "Out of Stock"}
            </p>
        </div>
    )
}

export default Info