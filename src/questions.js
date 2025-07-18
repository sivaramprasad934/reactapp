const questions = [
  {
    question: "What is React primarily used for?",
    options: ["Backend Development", "Styling Web Pages", "Building UI Components", "Database Management"],
    answer: 2
  },
  {
    question: "React is a:",
    options: ["Programming language", "JavaScript library", "Framework", "Compiler"],
    answer: 1
  },
  {
    question: "Which company maintains React?",
    options: ["Google", "Meta (Facebook)", "Microsoft", "Amazon"],
    answer: 1
  },
  {
    question: "How do you start a new React app using CLI?",
    options: ["react-new app-name", "npx create-react-app app-name", "npm install react app-name", "yarn react-app app-name"],
    answer: 1
  },
  {
    question: "What is JSX?",
    options: ["CSS Framework", "JavaScript with XML", "React-specific HTML", "JavaScript compiler"],
    answer: 1
  },
  {
    question: "Which of the following is a correct JSX syntax?",
    options: ["<div class=\"container\">", "<div className=\"container\">", "<div classname=\"container\">", "<div className: \"container\">"],
    answer: 1
  },
  {
    question: "What is the purpose of ReactDOM.render()?",
    options: ["Update Redux", "Render elements to the DOM", "Compile JSX", "Define a component"],
    answer: 1
  },
  {
    question: "React elements are:",
    options: ["Functions", "Objects", "Immutable objects", "Arrays"],
    answer: 2
  },
  {
    question: "Which is the correct file extension for JSX?",
    options: [".js", ".jsx", ".html", ".json"],
    answer: 1
  },
  {
    question: "How many root elements can a JSX expression return?",
    options: ["Any number", "One", "Two", "Unlimited"],
    answer: 1
  },
  {
    question: "Which method is used to pass data to a component?",
    options: ["this.data", "props", "sendData", "state"],
    answer: 1
  },
  {
    question: "What does 'state' in React refer to?",
    options: ["Global data", "Local component data", "Routing", "Styling"],
    answer: 1
  },
  {
    question: "Which hook is used for managing state in functional components?",
    options: ["useRef", "useState", "useMemo", "useReducer"],
    answer: 1
  },
  {
    question: "What will this return: useState(0)?",
    options: ["A value", "An array with a value and setter function", "Just a setter", "Nothing"],
    answer: 1
  },
  {
    question: "Which of these is a lifecycle method in class components?",
    options: ["useEffect", "componentDidMount", "renderEffect", "useMount"],
    answer: 1
  },
  {
    question: "Which keyword is used to create a class component?",
    options: ["constructor", "class", "extends", "React.Component"],
    answer: 1
  },
  {
    question: "Which lifecycle method is called after the component updates?",
    options: ["componentDidMount", "constructor", "componentDidUpdate", "render"],
    answer: 2
  },
  {
    question: "What is the virtual DOM?",
    options: ["A part of Redux", "Real DOM", "Lightweight copy of actual DOM", "JSON Tree"],
    answer: 2
  },
  {
    question: "How do you comment in JSX?",
    options: ["// comment", "<!-- comment -->", "{/ comment /}", "/** comment **/"],
    answer: 2
  },
  {
    question: "Which hook is used to handle side effects?",
    options: ["useReducer", "useCallback", "useEffect", "useMemo"],
    answer: 2
  },

  // Continued from question 21
{
  question: "Props are:",
  options: ["Read-only", "Writable", "Mutable", "Optional"],
  answer: 0
},
{
  question: "How do you access props in a functional component?",
  options: ["this.props", "As function arguments", "getProps()", "props()"],
  answer: 1
},
{
  question: "State updates in React are:",
  options: ["Asynchronous", "Synchronous", "Automatic", "Manual"],
  answer: 0
},
{
  question: "Can props be updated in child components?",
  options: ["Yes", "No", "Maybe", "Only in class components"],
  answer: 1
},
{
  question: "What does lifting state up mean?",
  options: ["Moving state to Redux", "Moving state to a common parent", "Deleting state", "Passing props as state"],
  answer: 1
},
{
  question: "What is the correct way to update state?",
  options: ["this.state.count = 1", "this.setState({ count: 1 })", "state.count = 1", "setState.count = 1"],
  answer: 1
},
{
  question: "Which hook merges state updates?",
  options: ["useState", "None—useState replaces state, not merge", "useContext", "useReducer"],
  answer: 1
},
{
  question: "What’s the shape of useState setter?",
  options: ["state = …", "[value, setter]", "{ value, setter }", "function only"],
  answer: 1
},
{
  question: "How do you pass props?",
  options: ["<Comp pass=\"val\" />", "<Comp value={val} />", "<Comp value=\"val\" />", "<Comp props={val} />"],
  answer: 1
},
{
  question: "What happens when state updates?",
  options: ["DOM resets", "Component re-renders", "App reloads", "No effect"],
  answer: 1
},
{
  question: "Can multiple state variables be declared?",
  options: ["Yes, via multiple useState calls", "Only one per component", "Yes, via object only", "No"],
  answer: 0
},
{
  question: "Which is invalid React state type?",
  options: ["Number", "Object", "undefined", "String"],
  answer: 2
},
{
  question: "Is state mutable?",
  options: ["Yes, via setter only", "No", "Always", "Never"],
  answer: 0
},
{
  question: "Where is state stored?",
  options: ["Redux", "DOM", "Inside component instance", "Window object"],
  answer: 2
},
{
  question: "Which keyword updates state in class?",
  options: ["this.setState()", "this.state()", "setState()", "state()"],
  answer: 0
},
{
  question: "Which hook handles complex state logic?",
  options: ["useState", "useReducer", "useContext", "useEffect"],
  answer: 1
},
{
  question: "What does useReducer accept?",
  options: ["Component", "Reducer function and initial state", "Only function", "Only state"],
  answer: 1
},
{
  question: "What’s the main benefit of useReducer?",
  options: ["Simplify UI", "Organize complex state transitions", "Faster DOM updates", "Larger bundle size"],
  answer: 1
},
{
  question: "Are props mutable?",
  options: ["Yes", "No", "Only in class", "Only in hooks"],
  answer: 1
},
{
  question: "What happens if you set state directly?",
  options: ["Works fine", "Doesn’t trigger re-render", "Throws error", "Resets app"],
  answer: 1
},
{
  question: "Which hook is used to access DOM elements directly?",
  options: ["useMemo", "useRef", "useEffect", "useCallback"],
  answer: 1
},
{
  question: "Which hook is used for memoizing values?",
  options: ["useEffect", "useReducer", "useMemo", "useState"],
  answer: 2
},
{
  question: "What is the second argument of useEffect()?",
  options: ["Object", "Dependency array", "Boolean", "JSX"],
  answer: 1
},
{
  question: "When is useEffect(() => {}, []) called?",
  options: ["Every render", "Once on mount", "On state change", "On unmount"],
  answer: 1
},
{
  question: "Which event is used for form submission in React?",
  options: ["onClick", "onSubmit", "onChange", "onInput"],
  answer: 1
},
{
  question: "Which is true about controlled components?",
  options: ["React does not control input", "Input value is managed by React state", "They use refs", "They are class components only"],
  answer: 1
},
{
  question: "How do you handle an input change event?",
  options: ["input.update()", "onChange={e => setState(e.target.value)}", "onInputChange()", "handleValue()"],
  answer: 1
},
{
  question: "What is the default behavior of form submission?",
  options: ["Sends to server", "Reloads page", "Nothing happens", "Triggers hook"],
  answer: 1
},
{
  question: "How do you prevent default form behavior in React?",
  options: ["return false", "e.preventDefault()", "stopSubmit()", "e.stopDefault()"],
  answer: 1
},
{
  question: "Which event is triggered on a key press?",
  options: ["onType", "onInput", "onKeyDown", "onKeyType"],
  answer: 2
},
{
  question: "What does useCallback hook do?",
  options: ["Updates DOM", "Rerenders component", "Memoizes function", "Stores state"],
  answer: 2
},
{
  question: "Which of the following is true for useReducer?",
  options: ["Only works in class components", "Used for complex state logic", "Handles side effects", "Calls lifecycle methods"],
  answer: 1
},
{
  question: "Which hook should be used instead of lifecycle methods?",
  options: ["useState", "useEffect", "useMemo", "useContext"],
  answer: 1
},
{
  question: "Where can hooks be used?",
  options: ["Anywhere", "Only in function components", "In class components", "Inside event handlers"],
  answer: 1
},
{
  question: "Can you use hooks in conditional statements?",
  options: ["Yes", "No", "Only if needed", "Sometimes"],
  answer: 1
},
{
  question: "How do you initialize multiple state values using useState?",
  options: ["Multiple calls", "Object inside useState", "Array", "Cannot be done"],
  answer: 1
},
{
  question: "Which hook shares state across components?",
  options: ["useState", "useReducer", "useContext", "useEffect"],
  answer: 2
},
{
  question: "What does useRef() return?",
  options: ["Boolean", "Mutable object with current property", "String", "JSX element"],
  answer: 1
},
{
  question: "Why use useMemo()?",
  options: ["Force re-render", "Reduce component load", "Cache calculated values", "Update props"],
  answer: 2
},
{
  question: "When is useLayoutEffect called?",
  options: ["After render", "Before paint (sync)", "On unmount", "On error"],
  answer: 1
},
{
  question: "Which package is used for routing in React?",
  options: ["react-router-dom", "react-navigation", "react-route", "react-router"],
  answer: 0
},
{
  question: "What does <Route> do?",
  options: ["Starts server", "Renders components for a path", "Registers routes", "Adds links"],
  answer: 1
},
{
  question: "Which component enables navigation?",
  options: ["<Switch>", "<Route>", "<Link>", "<NavigateTo>"],
  answer: 2
},
{
  question: "What replaces <Switch> in React Router v6?",
  options: ["<Router>", "<Routes>", "<Navigate>", "<Path>"],
  answer: 1
},
{
  question: "Which hook is used for programmatic navigation?",
  options: ["useRouter", "useNavigate", "useHistory", "goToRoute"],
  answer: 1
},
{
  question: "How to get route params in React Router v6?",
  options: ["useParams()", "useRouteParams()", "getParams()", "props.match.params"],
  answer: 0
},
{
  question: "Which form input is best for multiline text?",
  options: ["<input>", "<textarea>", "<select>", "<textbox>"],
  answer: 1
},
{
  question: "Which prop is used to bind a checkbox?",
  options: ["value", "defaultValue", "checked", "selected"],
  answer: 2
},
{
  question: "What’s the purpose of Context API?",
  options: ["Add styles", "Share data globally", "Replace state", "Remove props"],
  answer: 1
},
{
  question: "Which hook accesses context value?",
  options: ["useState", "useGlobal", "useContext", "useReducer"],
  answer: 2
},
{
  question: "How to provide context value?",
  options: ["<Context.Provider value={...}>", "<useContext.Provider value={...}>", "<Provider>", "<Store>"],
  answer: 0
},
{
  question: "What is a context consumer?",
  options: ["Updates context", "Reads context values", "Deletes values", "Clears state"],
  answer: 1
},
{
  question: "Can you have multiple context providers?",
  options: ["No", "Yes", "Only 2", "Only 1 per app"],
  answer: 1
},
{
  question: "Where should context be created?",
  options: ["In index.js", "In a separate file using React.createContext()", "Inside JSX", "In App.css"],
  answer: 1
},
{
  question: "Is context global like Redux?",
  options: ["No", "Partially, but limited", "Fully global", "Only for props"],
  answer: 1
},
{
  question: "What is the purpose of key prop in lists?",
  options: ["Sort order", "Unique identification for re-rendering", "Hide items", "Add styling"],
  answer: 1
},
{
  question: "What happens if keys are not unique?",
  options: ["Nothing", "Performance issues and bugs", "Errors", "Skips rendering"],
  answer: 1
},
{
  question: "Which input type hides user input?",
  options: ["text", "number", "password", "checkbox"],
  answer: 2
},
{
  question: "What’s the default type of button in React?",
  options: ["reset", "submit", "button", "click"],
  answer: 1
},
{
  question: "How do you set default selected value in <select>?",
  options: ["defaultValue", "value", "both a and b", "selectedValue"],
  answer: 2
},
{
  question: "Redux is primarily used for:",
  options: ["Styling", "State management", "Routing", "Testing"],
  answer: 1
},
{
  question: "What is an action in Redux?",
  options: ["Plain object describing change", "Method to call API", "State container", "Component"],
  answer: 0
},
{
  question: "Reducers must be:",
  options: ["Stateful", "Pure functions", "Async", "UI-bound"],
  answer: 1
},
{
  question: "How many stores should a Redux app have?",
  options: ["Multiple", "One", "Two", "Unlimited"],
  answer: 1
},
{
  question: "Which library connects React and Redux?",
  options: ["react-redux", "redux-connect", "redux-react", "reactx"],
  answer: 0
},
{
  question: "Which hook reads Redux state in components?",
  options: ["useState", "useEffect", "useSelector", "useRedux"],
  answer: 2
},
{
  question: "Which hook dispatches Redux actions?",
  options: ["useStore", "useDispatch", "useAction", "useEffect"],
  answer: 1
},
{
  question: "Redux middleware is used for:",
  options: ["Styling", "Routing", "Side effects like async calls", "Testing"],
  answer: 2
},
{
  question: "Thunk is a type of:",
  options: ["Store", "Hook", "Middleware", "Reducer"],
  answer: 2
},
{
  question: "Which hook helps avoid unnecessary renders?",
  options: ["useMemo", "useRef", "useCallback", "useEffect"],
  answer: 0
},
{
  question: "Which tool can inspect Redux actions in browser?",
  options: ["React Router", "Redux Logs", "Redux DevTools", "useDebugValue"],
  answer: 2
},
{
  question: "What does lazy loading improve?",
  options: ["Styling", "App performance", "Testing", "Code quality"],
  answer: 1
},
{
  question: "Which function loads a component lazily?",
  options: ["useLoad", "asyncComponent", "React.lazy()", "importLater()"],
  answer: 2
},
{
  question: "What does Suspense do?",
  options: ["Block render", "Show fallback while lazy loading", "Cancel fetch", "Skip rendering"],
  answer: 1
},
{
  question: "Which of the following is not a valid React type?",
  options: ["Fragment", "Layout", "Component", "Portal"],
  answer: 1
},
{
  question: "Which function optimizes list rendering?",
  options: ["React.memo", "useReducer", "useMemo", "useSelector"],
  answer: 0
},
{
  question: "React 18 introduced:",
  options: ["Redux", "Concurrent features", "Class components", "Hooks"],
  answer: 1
},
{
  question: "StrictMode helps with:",
  options: ["Styling", "Highlighting potential problems", "Deployment", "Animations"],
  answer: 1
},
{
  question: "Which syntax spreads props into a component?",
  options: ["props.assign()", "{...props}", "props()", "spread(props)"],
  answer: 1
},
{
  question: "How to conditionally render JSX in React?",
  options: ["switch-case", "Ternary operator or logical &&", "if-else inside JSX", "while loop"],
  answer: 1
}


  // Questions 21–100 omitted for brevity here
  // Let me know if you'd like the next 80 questions pasted in this format as well
];

export default questions;
