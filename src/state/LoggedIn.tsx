interface LoggedInProps<T>{
    isLoggedIn: Boolean
    setIsLoggedIn: React.Dispatch<React.SetStateAction<T>>
}

function LoggedIn({isLoggedIn, setIsLoggedIn}: LoggedInProps<boolean>) {

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>{isLoggedIn ? "logged in" : "logged out"}</div>
    </>
  );
}

export default LoggedIn;
