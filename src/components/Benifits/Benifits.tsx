import React, { lazy, Suspense } from 'react'
import styles from './Benifits.module.scss'
import useFetch from '../../utils';
import { GoArrowRight } from 'react-icons/go';
import Loading from '../Loading/Loading';
const Image = lazy(() => (import('../Image/Image')));

const Benifits: React.FC = () => {
  const [data] = useFetch("/data.json");
  return (
    <div>
      <h1 className={styles.heading}>Why Choose Us?<GoArrowRight /></h1>
      <section className={styles.proList}>
        {
          data.map(benifit => <div key={benifit.id} className={styles.proitem}>

            <Suspense fallback={<Loading />}>
              <Image src={benifit.icon} alt={benifit.title} width={32} height={32} />
            </Suspense>
            <span className={styles.title}>{benifit.title}</span>
          </div>)
        }
      </section>
    </div>
  )
}

export default Benifits
