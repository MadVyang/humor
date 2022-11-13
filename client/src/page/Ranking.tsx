import { useState, useEffect, useCallback } from "react";
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

  const user_cards = useCallback(() => {
    return users.map((user: any) => <UserCard key={user.id} user={user}></UserCard>)
  }, [users]);

  return <>
    <h4 className='mb-4 text-center'>
      Who has the best humor?
    </h4>
    {user_cards()}
  </>;
}

export default Ranking;