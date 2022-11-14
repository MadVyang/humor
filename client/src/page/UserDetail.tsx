import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, getHumorsByUser } from '../api/api';
import HumorCard from '../component/HumorCard';

const UserDetail = (props: any) => {
  const { user_id } = useParams();
  const [user, set_user] = useState<any>({ id: user_id, name: '' });
  const [humors, set_humors] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const _user = await getUser(user_id);
      set_user(_user);
      const _humors = await getHumorsByUser(user_id);
      set_humors(_humors);
    }
    load();
  }, [user_id]);

  const humor_cards = useCallback(() => {
    if (humors.length === 0) return 'No humors yet...';
    return humors.map(humor => <HumorCard key={humor.humor_id} humor={humor}></HumorCard>)
  }, [humors]);

  return <>
    <h4 className='mb-4 text-center'>
      {user.name}'s humor
    </h4>
    <div style={{ 'height': window.screen.availHeight - 160, 'overflowY': 'scroll' }}>
      {humor_cards()}
    </div>
  </>;
}

export default UserDetail;