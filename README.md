
<h3 align="center">UI.dev's "React Hooks" course project - Proposed Solution</h3>

### Info
This is a proposed solution for UI.dev's "React Hooks" course project.<br />
Original project: https://github.com/uidotdev/react-hooks-course <br />

Below, some brief explanation on which hooks have been used: <br />

### index
Hooks: useState and useMemo. <br />
useState for state management. <br />
useMemo to protect componenents which consume Theme Context Provider's value prop
from re-rendering when theme doesn't change. 

### Battle
Hooks: useContext, useState, and useReducer. <br />
useContext for all functions that consume Theme Context to avoid render-props syntax. <br />
useState for PlayerInput function's simpler state management. <br />
useReducer for Battle's more complex state management. 

### Card and Nav
Hook: useContext. <br />
useContext to consume Theme Context without render-props. 

### useHover
Hook: useHover (custom hook). <br />
This custom hook is then consumed by Tooltip component.

### Loading
Hooks: useState and useEffect. <br />
useState for state management. <br />
useEffect to update the DOM.

### Popular
Hooks: useReducer and useEffect. <br />
useReducer for component's advanced state management. <br />
useEffect to set which language's repos, the page should fetch.

### Results
Hooks: useReducer and useEffect. <br />
useReducer for component's advanced state management. <br />
useEffect to set which two Github profiles will battle.




