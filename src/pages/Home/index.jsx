import { Container } from "@mui/material"
import Header from "../../components/header"
import NavbarHeader from "../../components/header/navbar"
import ContainerInfo from "../../components/body/ContainerInfo"
import SideLeftInfo from "../../components/body/SideLeftInfo"
import SideRightInfo from "../../components/body/SideRightInfo"

const Home = () => {
  return (

    <>
      <NavbarHeader />
      <Header />
      <Container>
        <ContainerInfo />
        <SideLeftInfo />
        <SideRightInfo />
      </Container>


    </>

  )
}

export default Home