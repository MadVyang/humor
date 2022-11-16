import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import { FaQuoteLeft } from 'react-icons/fa';


const HumorCard = (props: any) => {
  const { humor } = props;

  return <Card className='mb-2 d-grid'>
    <Card.Body>
      <FaQuoteLeft className='mb-3' />
      <div style={{ whiteSpace: "pre-line" }}>
        {humor.content}
      </div>
      <hr />
      <div className='d-flex justify-content-end' >
        <span style={{ fontSize: 15, verticalAlign: 'top' }}>
          {Number(humor.score).toFixed(2)}
        </span>
        <Rating defaultValue={Number(humor.score)} precision={0.5} readOnly size='small' style={{ position: 'relative', top: '1px', left: '5px' }} />
      </div>
    </Card.Body>
  </Card>
}

export default HumorCard;