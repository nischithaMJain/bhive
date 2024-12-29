import React, { useEffect, useState } from 'react'
import './Card.css';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.jpg';
import img5 from '../../../assets/img5.jpg';
import Card from '@mui/material/Card';
import TurnRightRoundedIcon from '@mui/icons-material/TurnRightRounded';
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button, { ButtonProps } from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

interface OverView {
  [key: string]: any;
}
const ColorButton = styled(Button)<ButtonProps & { isSecond: boolean }>(({ theme, isSecond }) => ({
  backgroundColor: isSecond ? '#FFC422' : '#F9F9F9',
  border: isSecond ? '1px solid #FFC422 !important' : '1px solid #EEE7E7 !important',
  borderRadius: '4px !important',
  textAlign: 'start',
  paddingLeft: '12px',
  paddingRight: '12px',
  fontFamily: '"Inter", serif',
  width: '167px',
  justifyContent: 'space-between !important',
  textTransform: 'none',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: 'rgb(183, 182, 184) 0px 3px 6px 0px',
  }
}));
const CardContainer = ({ Details, index }: { Details: OverView, index: number }) => {
  const [currentCoords, setCurrentCoords] = useState({ lat: 0, long: 0 });
  const [distance, setDistance] = useState(0)
  const [hoverStates, setHoverStates] = useState<Record<number, "left" | "right" | null>>({});
  const images = [img1, img2, img3, img4, img5];
  const id: any = Details.id;
  const handleSlideShow = (e: React.MouseEvent<HTMLDivElement>, id: any): void => {
    const target = e.currentTarget as HTMLDivElement;
    const { left, width } = target.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const isLeft = mouseX < width / 2;
    setHoverStates((prev) => ({ ...prev, [id]: isLeft ? "left" : "right" }));
  }
  const handleMouseLeave = (id: any) => {
    setHoverStates((prev) => ({ ...prev, [id]: null }));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords, 'coord')
        const { latitude, longitude } = position.coords;
        setCurrentCoords({ lat: latitude, long: longitude })
      },);
    } else {
      console.error('cannot fetch your current location')
    }
  }, [])

  useEffect(() => {
    function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
      let R = 6371;
      let dLat = deg2rad(lat2 - lat1);
      let dLon = deg2rad(lon2 - lon1);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c;
      return d;
    }

    function deg2rad(deg: number) {
      return deg * (Math.PI / 180)
    }
    const result = getDistanceFromLatLonInKm(currentCoords.lat, currentCoords.long, Details.latitude, Details.longitude);
    console.log(result, 'result')
    setDistance(Math.round(result))
  }, [Details.latitude, Details.longitude, currentCoords.lat, currentCoords.long])

  return (
    <Card sx={{ maxWidth: 370 }} className='card'>
      <div className="titleContainer">
        <p className="cardtitle">{Details.name}</p>
        <p className="directions"><span><TurnRightRoundedIcon /></span><span >{distance}km</span></p>
      </div>
      <CardMedia
        component="img"
        height="202"
        image={images[index]}
        alt={Details.name}
        className="locimage"
        onMouseMove={(e) => handleSlideShow(e, id)}
        onMouseLeave={() => handleMouseLeave(id)}
      />
      <div className="iconConainer">
        {hoverStates[id] === "left" &&
          <div className="next"><NavigateNextIcon /></div>
        }
        {hoverStates[id] === "right" && <div className="prev"><ArrowBackIosIcon /></div>}
      </div>
      <ButtonGroup
        className='button-group'
        variant="contained"
        aria-label="Disabled button group"
      >
        <ColorButton variant="outlined" className='pricePerDayBtn' isSecond={false}><div> <span>Day Pass</span><br />
          <span className="price">{Details.day_pass_price}<span>/Day</span></span></div></ColorButton>
        <Badge color="secondary" badgeContent="20% Discount" className='discountFlag'>
          <ColorButton variant="outlined" className='priceDiscountBtn' isSecond>
            <div>
              <span>Bulk Pass</span><br />
              <span className="price">{Details.day_pass_price * 8}<span>/10 Days</span></span>
            </div>
          </ColorButton>
        </Badge>
      </ButtonGroup>
    </Card>
  )
}

export default CardContainer
