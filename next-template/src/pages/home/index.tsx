import React from "react";
import Homecomp from "../../components/Home/"
import auth from "../../auth/index"

const Home = () => {
    return (
       <Homecomp/>
    )
}
export default auth(Home)