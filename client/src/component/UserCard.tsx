import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
// import ProgressBar from 'react-bootstrap/ProgressBar';

const UserCard = (props: any) => {
  const { user } = props;
  const navigate = useNavigate();
  const routeChange = useCallback((id: any) => {
    let path = `/user/${id}`;
    navigate(path);
  }, [navigate]);

  return <Card className='mb-2 d-grid' onClick={() => { routeChange(user.id) }}>
    <Card.Body className="d-flex justify-content-between p-1 m-1">
      <div className="align-self-center">
        {user.name}
      </div>
      {/* <div className="align-self-center">
        has {user.num_humor} humor{user.num_humor > 1 ? 's' : ''}
      </div> */}
      <div>
        <span style={{ fontSize: 15, verticalAlign: 'top' }}>
          {String(user.score).substring(0, 3)}
        </span>
        {' '}
        <Rating defaultValue={Number(user.score)} precision={0.1} readOnly size="small" style={{ position: 'relative', top: '1px' }} />
        <span style={{ fontSize: 15, verticalAlign: 'top' }}>
          {' (' + user.num_humor + ')'}
        </span>
      </div>
    </Card.Body>
  </Card>
}

export default UserCard;