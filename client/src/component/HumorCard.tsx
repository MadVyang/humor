import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import { FaQuoteLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getHumorImg } from '../api/api';


const HumorCard = (props: any) => {
  const { humor } = props;
  const [img_src, set_img_src] = useState<string>('');

  useEffect(() => {
    if (humor.img_path === null || humor.img_path === '') return;
    async function load() {
      const res = await getHumorImg(humor.img_path);
      const url = window.URL.createObjectURL(new Blob([res.data], { type: res.headers['content-type'] }));
      set_img_src(String(url));
    }
    load();
  }, [humor]);

  return <Card className='mb-2 d-grid'>
    <Card.Body>
      {img_src !== '' ? <div className='mb-4' style={{ height: '250px', overflowY: 'scroll' }}>
        <img src={img_src} alt='humor img' width='100%' height='auto'></img>
      </div> : ''}
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