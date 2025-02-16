import react  from 'react';
import Person from './Component/Person';
import Product from './Component/Product';
function App() {
  return (
    <div>
      <Person name="Satyam" age="21" />
      <Product name="Laptop" price="$1200" />

      <Person name="Sundram" age="19" />
      <Product name="Mobile" price="$500" />
    </div>
  );
}

export default App;