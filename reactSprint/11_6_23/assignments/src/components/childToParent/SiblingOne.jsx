const SiblingOne = ({ message }) => {
  return (
    <div className="content">
      <h1>Sibling ONE Component</h1>
      <p> Look at me, I'm content from the first Sibling Component!</p>
      <p>The message is: {message}</p>
    </div>
  );
};

export default SiblingOne;
