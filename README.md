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

- while getting data from API and rendering on screen its good practice to use Optional Chaining

# Shimmer UI

- while API is sending data insted of showing loader, we can show shimmer UI
