import react from 'react';

const UserList = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];

    return (
        <>
        <ul>
            <h1>Users List Data</h1>
            {users.map((x) => 
                <li key={x.id}>
                    <p>id: {x.id}</p>
                    <p>Name: {x.name}</p>
                    <p>Age: {x.age}</p>
                </li>
            )}
        </ul>
        </>
    );
};

export default UserList;