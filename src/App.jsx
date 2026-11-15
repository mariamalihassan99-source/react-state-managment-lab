import { useState } from 'react'
import './App.css'

function App() {
  const allProducts = [
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
]

//Create a function called handleAddToCart(item) that should take in an item and remove it from the availableItems array (remember that availableItems is a state so we cannot modify it directly. use .filter() and set the state after filtering)
function handleAddToCart(product) {
  if (availableBalance >= product.price) {
    setShoppingCart([...shoppingCart, product])
    setAvailableBalance(availableBalance - product.price) // Deduct the price of the added item from the balance
    setAvailableItems(availableItems.filter(item => item.id !== product.id))
    setWarningMessage(" ") // Clear the warning message when an item is successfully added to the cart
  } else {
    setWarningMessage("Insufficient funds. Your balance is too low to purchase this item")
  }
}
//Now create a function handleRemoveFromShoppingCart. This should remove the item from the shopping cart and re add it to the availableItems and add back the price of it to the balance
function handleRemoveFromShoppingCart(product) {
  setShoppingCart(shoppingCart.filter(item => item.id !== product.id))
  setAvailableBalance(availableBalance + product.price) // Add back the price of the removed item to the balance
  setAvailableItems([...availableItems, product]) // Add the removed item back to the available items list
}

//Now declare another state called shoppingCart and initialize it to an empty array
  const [shoppingCart, setShoppingCart] = useState([])
//Declare a availableBalance state and initialize it to 0
  const [availableBalance, setAvailableBalance] = useState(100)
//Declare a availableItems state and initialize it to allProducts
  const [availableItems, setAvailableItems] = useState(allProducts)
//Declare a warningMessage state and initialize it to an empty string
  const [warningMessage, setWarningMessage] = useState("") 



  return (
    <div>
      <h1>Zaid's Closet</h1>
<button onClick={() => setAvailableBalance(100)}>Reset Balance</button>
<button onClick={() => setShoppingCart([])}>Clear Cart</button>
<button onClick={() => setAvailableItems(allProducts)}>Reset Available Items</button>
<h2>Your Balance: {availableBalance}</h2>
{warningMessage}


<h2>Available Items</h2>
      {availableItems.length === 0 ? (
        <p>No available items</p>
      ) : (
        availableItems.map((product) => (
          <div key={product.id}>
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => {
              handleAddToCart(product)
            }}>Add to Cart</button>
          </div>
        ))
      )}
      <h2>Shopping Cart</h2>
      {shoppingCart.length === 0 ? (  // Check if shopping cart is empty
        <p>Your shopping cart is empty</p>
      ) : (
        shoppingCart.map((product) => (
          <div key={product.id}>
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => {
              handleRemoveFromShoppingCart(product)
            }}>Remove from Cart</button>
          </div>
        ))
      )}
    </div>  
  )

  
}



export default App
