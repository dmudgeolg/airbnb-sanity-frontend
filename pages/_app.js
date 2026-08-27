import "../styles/globals.css"
import NavBar from "../components/NavBar"
import { useState } from "react"

const MyApp = ({ Component, pageProps }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Component {...pageProps} searchTerm={searchTerm} />
    </>
  )
}

export default MyApp
