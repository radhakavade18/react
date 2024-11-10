# Namaste React

# Parcel

- Dev build
- Local server
- HMR - Hot Module Replacement
- File Watching Algorithem - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code

# Food Ordering app - Swiggato

// --- Components ---
// Header
// - logo
// - NavItems
// Body
// - RestaurantContainer
// - RestaurantCard
// - img
// - Name of rest, Star rating, cuisine, delivery time
// Footer
// - Copyright
// - Links
// - Address
// - Contact

Two types of Exports and Imports

1.  DEFAULT export and import
    Ex - export default NameOfVariable

        - import NameOfVariable from "..path"

2.  NAMED export
    Ex - export const Name1 - export const Name2

        - import { Name1 } from "../path"
        - import { Name2 } from "../path"

# React Hooks

(Normal JS utility Functions)

- useState() - super powerful state variables in react
- useEffect(() => {}, [])

# Optional chaining

- while getting data from API and rendering on screen its good practice to use Optional Chaining - use ?

# Shimmer UI

- while API is sending data insted of showing loader, we can show shimmer UI

# Routing

- to create routing configurations we need to import react-router-dom package from npm
- we need to import createBrowserRouter component from react-router-dom to set up the configurations for routers
- to render it, we need to provide this configuration to another component called RouterProvider
- this RouterProvider component actually provides a routing configuration to our app

# Routing types

- Server side routing => we make a API call then whole page renders from the server side
- Client side routing => no network calls, only UI side routers (SPA)

# Redux toolkit

- Install @reduxjs/toolkit and react-redux
- build our store
- Connect our store to the app
- Slice (cartSlice)
- dispatch action - reducer
- Selector - subscribe to store
