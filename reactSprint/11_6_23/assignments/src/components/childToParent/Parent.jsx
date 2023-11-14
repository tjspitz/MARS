import { useState } from 'react';
import Child from './Child';
import SiblingOne from './SiblingOne';
import SiblingTwo from './SiblingTwo';

// PARENT TO CHILD
// const Parent = () => {
//   const [data, setData] = useState('"This is data in the Parent Component"');
//   const childToParent = (childData) => {
//     setData(childData);
//   };

//   return (
//     <main className="app app-container">
//      <div className="content">
//       <h1>Parent Component</h1>
//       <p> Look at me, I'm content from the Parent Component!</p>
//       <p>The data in the parent component is {data}</p>
//      </div>
//       <Child childToParent={childToParent} />
//     </main>
//   );
// };

// PARENT TO CHILDREN (SIBLINGS)
const Parent = () => {
  const [message, setMessage] = useState(
    '"Click the button in Sibling Two for a different message!"'
  );

  return (
    <main className="app app-container">
      <div className="content">
        <h1>Parent Component</h1>
        <p> Look at me, I'm content from the Parent Component!</p>
      </div>
        <SiblingOne message={message} />
        <SiblingTwo setMessage={setMessage} />
    </main>
  );
};

export default Parent;
