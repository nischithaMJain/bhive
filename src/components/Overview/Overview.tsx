import Card from './Card/Card';
import styles from './Overview.module.scss'
import useFetch from '../../utils';
import { GoArrowRight } from "react-icons/go";

const Overview = () => {
  const [data] = useFetch("/properties.json");

  return (
    <div>
      <h2>Our Space Overview <GoArrowRight /></h2>
      <div className={styles.cardContainer}>
        {data.map((location, index) =>
          <Card Details={location} key={location.id} index={index} />
        )}
      </div>
    </div>
  )
}

export default Overview
