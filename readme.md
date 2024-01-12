# Start of React Learning - Billy
[Full Stack React Developer Course with Appwrite - FreeCodeCamp](https://youtu.be/Bvwq_S0n2pk)
## 1. Learning React Roadmap

## 2. Creating React App
Two ways of creating react app taught by the video.
- create-react-app : 
    Use `npx create-react-app my-react-app`, takes quite a bit of time to install, opiniated dependencies; install potentially uneeded packages. Ok for begginer
- Vite :
    - Use `npm create vite@latest` then follow the process. Takes little time to create project, fresh file with barebone minimum. Can use typescript and use JSX file, better in any ways.

## 3. React flow and structure
React uses react DOM to do it's magic, injecting a html and css to the page using the JSX that is returned by the App function. 

## 4. Create own React Library and JSX
- Creating own react library, react is basically using the object to use the document to inject JSX and render it using DOM to the root div. JSX is split into individual element, each JSX element is translated into a React object that have information about the element, the child, every single information, then looped through all of the elements and render it using DOM. 

- JSX uses curly bracket {} to say that it is a javascript code, outside of the curly bracket the JSX will translate it as HTML and CSS.

## 5. Hooks, state
- state, use `useState()` to create a state variable. `const [state,setState] = useState('')` create a state variable called **state** and function **useState** to change the state. When useState is called then the page will render. We can use callback function to access the future to be changed state.
```
<!-- will add + 2 -->
const addValue = () => {
setCounter((prevCounter) => prevCounter+1)
setCounter((prevCounter) => prevCounter+1)
}
```
```
<!-- will not add + 2 -->
const addValue = () => {
setCounter(counter + 1)
setCounter(counter + 1)
}
```

## 6. React Fiber
- Avoid re-rendering, use reconciliation.
- give flexibility for animation
- Virtual DOM