import axios from "axios";
import { useEffect, useState } from "react";


export const Users = () => {

    const [data, setData] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({
          email: email,
          password: password,
        });
      };
      const addUserData = () => {
        axios.post("http://localhost:8080/users", data);
      };
    
      useEffect(() => {
        addUserData();
      }, []);

    return (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              value={password}
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" />
            
          </form>
        </>
      );
   
   
}


