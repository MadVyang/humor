import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';

const UserCard = (props: any) => {
  const { user } = props;
  const navigate = useNavigate();
  const routeChange = useCallback((id: any) => {
    let path = `/user/${id}`;
    navigate(path);
  }, [navigate]);

  return <div className='mb-2 d-grid'>
    <Button
      variant='light'
      onClick={() => { routeChange(user.id) }}
    >
      {user.name}
    </Button>
  </div>
}

export default UserCard;