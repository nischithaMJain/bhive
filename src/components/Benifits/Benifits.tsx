import React, { lazy, Suspense } from 'react'
import './Benifits.css'
import useFetch from '../../utils';
import Loading from '../Loading/Loading';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
const Image = lazy(() => (import('../Image/Image')));
const Benifits: React.FC = () => {
  const [data] = useFetch("/data.json");
  return (
    <Container maxWidth="lg">
      <h2>Why Choose Us?</h2>
      <Grid container columns={{ xs: 4, sm: 4, md: 12, lg: 12 }} sx={{
        gap: {
          xs: 1,
          sm: 1,
          md: 0,
          lg: 0,
        },
      }} >
        {
          // eslint-disable-next-line react/jsx-no-duplicate-props
          data.map(benifit => <Grid key={benifit.id} className="grid-item" size={{ xs: 2, sm: 2, md: 4, lg: 3 }}>
            <div className='data'>
              <Suspense fallback={<Loading />}>
                <Image src={benifit.icon} alt={benifit.title} width={32} height={20} />
              </Suspense>
              <p className="title">{benifit.title}</p>
            </div>
          </Grid>)
        }
      </Grid>
    </Container >

  )
}

export default Benifits
