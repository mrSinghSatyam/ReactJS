import react from 'react';

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
      ];

    return (
        <>
        <ul>
            <h1>Product List Data</h1>
            {products.map((x) => (
            <li>
                <li key={x.id}>
                    <p>id: {x.id}</p>
                    <p>Name: {x.name}</p>
                    <p>Price: {x.price}</p>
                </li>
            </li>
            ))}
        </ul>
        </>
    );
};

export default ProductList;