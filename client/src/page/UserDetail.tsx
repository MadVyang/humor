import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getHumorsByUser } from '../api/api';
import HumorCard from './HumorCard';

const UserDetail = (props: any) => {
  const { user_id } = useParams();
  const { user } = props;
  const [humors, set_humors] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const _humors = await getHumorsByUser(user_id);
      set_humors(_humors);
    }
    load();
  }, [user_id]);

  const humor_cards = useCallback(() => {
    return humors.map(humor => <HumorCard key={humor.humor_id} humor={humor}></HumorCard>)
  }, [humors]);

  return <div>
    {humor_cards()}
  </div>
}

export default UserDetail;