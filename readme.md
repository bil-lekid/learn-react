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

## 7. Tailwind and Props in react js

-Tailwind: good css package, to install go to tailwind css and find how to install based on the framework
-Props: Create individual component, called dumb component. You are able to insert child component to the main app by importing the function or if you have the function inside of your app file.

```
<!-- ? THIS IS THE CARD FUNCTION IN CARDS.JSX  -->
function Card({ username = "Gaben", post = "Not assigned yet" }) {
  console.log(username);

  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2F2%2F3%2F181521.jpg&f=1&nofb=1&ipt=a29ea6877633461e5beabbfd1e27904d8821fd351868782e4ac4496314b62d06&ipo=images"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              at!
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
```

```
<!-- ? INSERT CARD TO MAIN APP AND CREATE PROPS LIKE THIS -->
<Card username="Jason" post="Beautiful man" />
```

## 8. background generator

simple on click background changer using react and tailwind. Basically a summary of what we learned so far and getting used to creating project, installing tailwind, and developing simple apps

## 9. Password Generator

useEffect, useCallback, useRef a lot of important hook that enables re-rendering and a lot of interactivity between elements!

## 10. Currency Exchange

React is highly reusable, using useId, best practice for importing components and custom hooks, components are reusable and customizable based, fetch api and selecting which data we want on the json.

# 11. Routing

Basic portfolio page with routing for different section such as home, about, contact, and etc. learned react-router-dom, useParams hook, Link, NavLink, `createBrowserRouter(createRoutesFromElements(<Route />))`, and much more

## 12. Context API in react .get the concept

setup boiler plate context code, wrap your components with the context. Create context and context provider and then wrap all the component then every single component can access the data or set the data from the context
