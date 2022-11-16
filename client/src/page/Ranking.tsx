import { useState, useEffect, useCallback } from "react";
import { getUsers } from "../api/api";
import UserCard from "../component/UserCard";

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

  return <div>
    <h4 className='mb-3 text-center'>
      Who has the best humor?
    </h4>
    <div style={{ 'height': '75vh', 'overflowY': 'scroll' }}>
      {user_cards()}
    </div>
  </div>;
}

export default Ranking;