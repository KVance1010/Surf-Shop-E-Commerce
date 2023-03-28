
# SurfShop

## An e-commerce app for selling surf-related items.
This application is build using the MERN stack. It allows the user to browse a vast catalogue of surf merchandise. The user can navigate the site by selecting the category of their choice on the home page or by using the search bar.  They can add items to their shopping cart, view their cart, and perform a virtual checkout.  The site keeps a log of the user's order history for future reference.  There is added functionality if the user is logged in as an admin user.  This allows for items to be created, updated, and deleted.  Thus, the inventory becomes very manageable!



[Come visit the Site!](https://surfshop.herokuapp.com/)
## Overview of the application
<img src="client/src/images/surfShopOverview.gif">

  ## Table of Contents
  * [Technologies Used](#notable-technologies-used)
  * [Code Snippets](#code-snippets)<br />
  * [Contributors](#contributors)<br />
​
  

​
  ## Notable Technologies Used
  ### Front end
  - React.js
  - JavaScript
  - CSS
  - MaterialUI
  - Apollo Client
  - JWT
  ### Back End
  - Node
  - NPM
  - Express
  - GraphQL
  - Apollo
  - MongoDB
  - User Authentication
  - Bcrypt

​
  ## Code Snippets
Here is the model for an item.  Each item has a name, price, description, tags (categories), image URL, stock quantity, unique ID, and boolean values representing whether or not the item is on sale, is a best seller, or is a new arrival
```javascript
const itemSchema = new Schema ({
   
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    tags: {
        type: [String]
    },
    image: {
        type: String
    },
    stock: {
        type: Number
    },
    brand: {
        type: String
    },
    bestSeller: {
        type: Boolean,
        default: false
    },
    saleItem: {
        type: Boolean,
        default: false
    },
    newArrival: {
        type: Boolean,
        default: false
    },
    uuid: {
        type: String,
        unique: true,
        trim: true,
        default: uuidv4
      },
})
  
```
Here is some React code to handle the Update Item page.  useState and useEffect are the notable tools here. The page needs to be loaded with the form already filled in with the information from the item being updated.  To do so, useEffect is utilized upon render. Since the form contains values that represent strings, arrays, Ints, Floats, and booleans, multiple functions needed to be called to format the data correctly
```javascript
 const [formState, setFormState] = useState({})
    const [updateItem, {error, updateData}] = useMutation(UPDATE_ITEM)
    let tagsArray = []

    let item = JSON.parse(localStorage.getItem('item'))
    
    useEffect(() => {
        setFormState({
            name: item.name,
            price: item.price.toString(),
            description: item.description,
            tags: item.tags,
            image: item.image,
            stock: item.stock.toString(),
            brand: item.brand
        })
    }, [])
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormState({
            ...formState,
            [name]: value.toString()
        })
    }
    const handleTagsChange = (event) => {
        const {name, value} = event.target
        tagsArray = value.split(',')
        let trimmedTagsArray = tagsArray.map((tag) => {
            return tag.trim()
        })

        setFormState({
            ...formState,
            [name]: trimmedTagsArray
        })
    }
    const handlePriceChange = (event) => {
        const {name, value} = event.target
        let price = parseFloat(value)
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const handleStockChange = (event) => {
        const { name, value } = event.target
        let stock = parseInt(value)
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleBooleanChange = async (event) => {
        const { name, checked } = event.target
        setFormState({
            ...formState,
            [name]: checked
        })
    }
```

    
    
  ## Contributors
If you have any questions about this project, feel free to visit our githubs or reach out to us on linkedIn!
* Michael Seaman :
    * [Github](https://github.com/mseaman26)
    * [LinkedIn](https://www.linkedin.com/in/michael-seaman-120a59250/)
* Kyle Vance :
    * [Github](https://github.com/KVance1010)
    * [LinkedIn](https://www.linkedin.com/in/kyle-s-vance/)
