import './App.css';
import Header from './Components/Header/Header';
import Filter from './Components/Filter/Filter';
import Card from './Components/Card/Card';
import list from '../src/Components/Card/cardItems';
import Footer from './Components/Footer/Footer';

// Create a function that maps through an array (list) to return information from it.
function addItems(items) {
  let myItems = items.map((item) => {
    return (
      <div>
        <Card 
          image={item.imgSrc} 
          title={item.title} 
          rating={item.rating} 
          description={item.desc} 
          date={item.date} 
          price={item.price}
        />
      </div>
    );
  });
  return myItems;
}

// Create a function component that returns all components.
function App() {
  let myItems = addItems(list);
  return (
    <div>
      <Header />
      <Filter />
      <div className='card-box'>{myItems}</div>
      <Footer />
    </div>
  );
}

// Export the App component that will be imported and rendered in the index.js file.
export default App;
