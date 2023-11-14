const Child = ({ childToParent }) => {
  const childData = '"This is data from the Child Component"';

  return (
    <div className="content">
      <h1>Child component</h1>
      <p> Look at me, I'm content from the Child Component!</p>
      <p>The data in the child component is {childData}</p>
      <button
        className="onClick"
        onClick={() => childToParent(childData)}
      >
        Click Me!
      </button>
    </div>
  );
};

export default Child;
