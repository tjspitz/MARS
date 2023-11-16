import HomeButton from './HomeButton';

const SuccessPage = () => {
  return (
    <div className="app">
      <main className="app-container">
        <div className="content success">
          You have successfully logged in. Hooray for you!
          <HomeButton />
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;
