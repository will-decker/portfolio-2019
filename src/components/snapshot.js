import React from "react"

const Snapshot = ({ image }) => (
  <>
    <div id="project-snapshot">
      <div className="snapshot-container">
        <img src={image} alt="Project image" />
      </div>

      {/* <Img fluid={image} /> */}
    </div>
  </>
)

export default Snapshot
