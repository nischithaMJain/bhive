import React, { lazy, Suspense, useState } from 'react'
import { MdDirections, MdNavigateNext } from "react-icons/md";

import styles from './Card.module.scss';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.jpg';
import img5 from '../../../assets/img5.jpg';
import { IoIosArrowForward } from "react-icons/io";
import Loading from '../../Loading/Loading';
const Image = lazy(() => (import('../../Image/Image')));
interface OverView {
  [key: string]: any;
}
const Card = ({ Details, index }: { Details: OverView, index: number }) => {
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


  return (
    <div className={styles.card}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{Details.name}</p>
        <p className={styles.directions}><span><MdDirections /></span><span >6km</span></p>
      </div>
      <div className={styles.locimage} onMouseMove={(e) => handleSlideShow(e, id)} onMouseLeave={() => handleMouseLeave(id)} role="button" >
        <div className={styles.iconConainer}>
          {hoverStates[id] === "left" &&
            // {true &&
            <div className={styles.next}><MdNavigateNext /></div>}
          {hoverStates[id] === "right" && <div className={styles.prev}><MdNavigateNext /></div>}
        </div>
        <Suspense fallback={<Loading />}>
          <Image src={images[index]} alt={""} width={0} height={300} />
        </Suspense>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.pricePerDayBtn}>
          <div>
            <span>Day Pass</span><br />
            <span className={styles.price}>{Details.day_pass_price}<span>/Day</span></span>
          </div>
          <div className={styles.arrowBtn}>
            <IoIosArrowForward />
            <IoIosArrowForward />
            <IoIosArrowForward />

          </div>
        </button>
        <div className={styles.discountFlag}>20% Discount</div>
        <button className={styles.priceDiscountBtn}>
          <div>
            <span>Bulk Pass</span><br />
            <span className={styles.price}>{Details.day_pass_price * 8}<span>/10 Days</span></span>
          </div>
          <div className={styles.arrowBtn}>
            <IoIosArrowForward />

            <IoIosArrowForward />
            <IoIosArrowForward />

          </div>
        </button>
      </div>
    </div >
  )
}

export default Card
