import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';

const UserCard = (props: any) => {
  const { user } = props;
  const navigate = useNavigate();
  const routeChange = useCallback((id: any) => {
    let path = `/user/${id}`;
    navigate(path);
  }, [navigate]);

  return <Card className='mb-2 d-grid' onClick={() => { routeChange(user.id) }}>
    <Card.Body className="d-flex justify-content-between p-2 ">
      <div className="align-self-center">
        {user.name}
      </div>
      <Rating defaultValue={2.65} precision={0.1} readOnly size='small' className="align-self-center" />
    </Card.Body>
  </Card>
}

export default UserCard;