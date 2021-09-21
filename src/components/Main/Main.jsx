const Main = () => {
  return (
    <div>
      <h1>{localStorage.getItem('loggedUser')}</h1>
    </div>
  );
};

export default Main;
