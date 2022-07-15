import { NextPage } from "next"
import Actors from "../components/Actors/Actors/Actors";
import Netflix from "../components/Cards/Movie/Netflix/Netflix/Netflix";
import Recent from "../components/Cards/Movie/Recent/Recent/Recent";
import Hero from "../components/Hero/Hero/Hero";
import Layout from "../components/Layout/Layout/Layout";
const Page:NextPage = () => {
  return(
    <Layout>
      <>
        <Hero
          content="Flamboyantly vulgar and determinedly self-referential, Deadpool has the shape of a superhero movie but the soul of a Danny McBride flick."
          image="/assets/images/deadpool.jpg"
          modalButton="More"
          title="Deadpool"
          trailerButton="Play"
        />
        <Recent/>
        {/* <Actors
          title="Brithday of actors"
        /> */}
        <Netflix/>
      </>
    </Layout>
  )
}
export default Page;