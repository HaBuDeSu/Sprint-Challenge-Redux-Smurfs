1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.assign()
Array.map()
Array.filter()

You can use Object.assign() or simply declare a new object and use a spread operator.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that have a type and a payload that are consumed by the reducer.
The store is an object that maintains the state of an application in redux.
Reducers take actions as arguments and returns a new state to the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is stored in the Redux store while component state is stored on a class component. Component state is easier to set up and manage for small applications but can get difficult to maintain and manage when an application becomes more complicated. In these situations, its much easier to use application state and connect components to the Redux store.

1.  What is middleware?

In Redux middleware grabs an action dispatched by an action creator before it gets to the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware that lets you make API calls asynchronously by changing action creators to dispatch the action to the reducer instead of simply returning the action object.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
