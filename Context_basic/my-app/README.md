# React Contexts

Some learnings and snippet codes for ReactJS Contexts.

## creating context

Create a folder to your context files

### src > contexts > MyName.js

In your context file, import createContext:

```js
import { createContext } from 'react';
```

Create and export your context:

```js
export const MyNameContext = createContext();
```

Creating a wrapping to your context with a children component inside it:

```js
// the value props is mandatory, there you can pass all the data that you want to be accessed by the children component
return (
    <MyNameContext.Provider value={{ myName }}>
        {children}
    </MyNameContext.Provider>
)
```

## consuming the context

Import useContext:

```js
import { React, useContext } from 'react';
```

Import your context (it's the name of the createContext() created variable):

```js
import { MyNameContext } from "../contexts/MyName"
```

Consuming the context:

it's destructuring all variables/functions that is expected to be consumed

```js
const { myName } = useContext(MyNameContext);
```
