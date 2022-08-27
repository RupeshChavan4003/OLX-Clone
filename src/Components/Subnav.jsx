import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Subnav.css";
const Subnav = () => {
  return (
    // <Box>
    //   <Link to={`/products/cars`}>
    //     <Button>cars</Button>
    //   </Link>
    //   <Link to={`/products/motorcyles`}>
    //     <Button>motor cycles</Button>
    //   </Link>

    //   <Link to={`/products/scooter`}>
    //     <Button>mobile</Button>
    //   </Link>
    // </Box>

    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div>
            <span>ALL CATEGORIES</span>
          </div>
          <div className="otherQuickOptions">
            <Link to={`/products/cars`}>
              <span style={{ color: "#002f34" }}>Cars</span>
            </Link>

            <Link to={`/products/motorcyles`}>
              <span style={{ color: "#002f34" }}>Motorcycles</span>
            </Link>

            <Link to={`/products/scooter`}>
              <span style={{ color: "#002f34" }}>Scooters</span>
            </Link>

            <Link to={`/products/salesHouse`}>
              <span style={{ color: "#002f34" }}>
                For Sale:Houses & Apartments
              </span>
            </Link>

            <span style={{ color: "#002f34" }}>
              Commercials & Other Vehicles{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subnav;
