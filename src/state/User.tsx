import { useState } from "react";

interface UserInterface {
  name?: string;
  email?: string;
}

function User() {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);

  const handleLogin = () => {
    setUser({
        name:"andro",
        email: "andro@gmail.com"
    })
  };

  return (
    <>
      <button onClick={handleLogin}>login</button>
        <div>
          <h5>{user?.name}</h5>
          <h5>{user?.email}</h5>
        </div>
    </>
  );
}

export default User;
