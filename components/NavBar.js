import { useState } from "react"

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    if (onSearch) {
      onSearch(value)
    }
  }

  return (
    <div className="nav">
      <div className="logo"></div>
      <input
        type="text"
        placeholder="Search properties by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
    </div>
  )
}

export default NavBar