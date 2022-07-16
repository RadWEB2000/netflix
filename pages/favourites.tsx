import { NextPage } from "next"
import Layout from "../components/Layout/Layout/Layout";
const Page:NextPage = () => {
  return(
    <Layout>
      <>
        <header>
            <h1>Favourites</h1>
        </header>
        <section>
            <h2>Movies</h2>
            <ul>
                
            </ul>
        </section>
        <section>0
            <h2>TV</h2>
            <ul>

            </ul>
        </section>
        <section>
            <h2>Persons</h2>
            <ul>

            </ul>
        </section>
      </>
    </Layout>
  )
}
export default Page;