import { useState } from "react";

interface UserInterface {
  name?: string;
  email?: string;
}

function User() {
  const [user, setUser] = useState<UserInterface | null>({} as UserInterface );

  const handleLogin = () => {
    setUser({
        name:"andro",
        email: "andro@gmail.com"
    })
  };

  const handleLogout = () => {
    setUser(null)
  };

  return (
    <>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
        <div>
          <h5>{user?.name}</h5>
          <h5>{user?.email}</h5>
        </div>
    </>
  );
}

export default User;
