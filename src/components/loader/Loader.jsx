import React from 'react'
import GridLoader from "react-spinners/GridLoader";

const Preloader = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  color: "#2769DC",
}

const Loader = () => {
  return (
    <div style={Preloader}>
      <GridLoader
        color={'#2769DC'}
        size={12}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <h2>Loading...</h2>
    </div>
  )
}

export default Loader