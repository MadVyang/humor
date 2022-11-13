import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import { FaQuoteLeft } from 'react-icons/fa';


const HumorCard = (props: any) => {
  const { humor } = props;

  return <Card className='mb-2 d-grid'>
    <Card.Body>
      <FaQuoteLeft className='mb-3' />
      <div>
        {humor.content}
      </div>
      <hr />
      <div className='d-flex justify-content-end' >
        <Rating defaultValue={Number(humor.score)} precision={0.5} readOnly size='small' />
      </div>
    </Card.Body>
  </Card>
}

export default HumorCard;