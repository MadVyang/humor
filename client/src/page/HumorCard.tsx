import Button from 'react-bootstrap/Button';

const HumorCard = (props: any) => {
  const { humor } = props;

  return <div className='mb-2 d-grid'>
    <Button
      variant='light'
    >
      {humor.content}
    </Button>
  </div>
}

export default HumorCard;