import HomeButton from "./HomeButton";

const FailPage = () => {
  return (
    <div className="app">
      <main className="app-container">
        <div className="content fail">
          Incorrect credentials. Sad for you.
          <HomeButton />
        </div>
      </main>
    </div>
  );
};

export default FailPage;
