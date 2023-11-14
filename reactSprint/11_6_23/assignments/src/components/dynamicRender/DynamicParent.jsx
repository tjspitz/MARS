import { useState } from "react";
import DynamicRender from "./DynamicRender";

const DynamicParent = () => {
  const [user, setUser] = useState('one');

  return (
    <main className="app app-container">
      <div className="content">
        <h1>Dynamic Parent Component</h1>
        <DynamicRender user={user} />
        <button className="btn" onClick={() => setUser('one')}>Switch to Dynamic One</button>
        <button className="btn" onClick={() => setUser('two')}>Switch to Dynamic Two</button>
      </div>
    </main>
  )
};

export default DynamicParent;


/*
a login page, 1 userid and pwd (id and pwd are hardcoded)

click login => login successful copmonent, if matching id and pwd
  otherwise render component that says login failed
*/