import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { user_id } = useParams();
  return <>{user_id}</>
}

export default UserDetail;