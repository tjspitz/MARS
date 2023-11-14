const SiblingTwo = ({ setMessage }) => {
  const onButtonClick = (changeVal) => {
    setMessage(changeVal);
  };

  return (
    <div className="content">
      <h1>Sibling TWO Component</h1>
      <p> Look at me, I'm content from the second Sibling Component!</p>
      <button
        className="btn"
        onClick={() => onButtonClick('"This message is from Sibling Two!"')}
      >
        Click Me!
      </button>
    </div>
  );
};

export default SiblingTwo;
