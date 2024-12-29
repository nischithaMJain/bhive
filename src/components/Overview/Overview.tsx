import CardContainer from './Card/Card';
// import './Overview.css'
import useFetch from '../../utils';
import { GoArrowRight } from "react-icons/go";
import Grid from '@mui/material/Grid2';
import { Container } from '@mui/material';

const Overview = () => {
  const [data] = useFetch("/properties.json");

  return (
    <Container maxWidth="lg">
      <h2>Our Space Overview <GoArrowRight /></h2>
      <Grid container spacing={3} columns={{ xs: 4, sm: 4, md: 12, lg: 12 }}>
        {data.map((location, index) =>
          <Grid key={location.id} size={{ xs: 4, sm: 4, md: 4 }} sx={{ justifyItems: "center" }}>
            <CardContainer Details={location} index={index} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default Overview
