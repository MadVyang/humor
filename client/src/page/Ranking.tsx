import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getUsers } from "../api/api";
import UserCard from "./UserCard";

const Ranking = () => {
  const [users, set_users] = useState([]);
  useEffect(() => {
    async function load() {
      const _users = await getUsers();
      set_users(_users);
    }
    load();
  }, []);

  return <Container>
    {users.map((user: any) => <UserCard key={user.id} user={user}></UserCard>)}
  </Container>
}

export default Ranking;