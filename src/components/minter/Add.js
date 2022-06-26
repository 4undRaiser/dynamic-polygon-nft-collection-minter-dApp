/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";



const AddNfts = ({ save, address }) => {
  return (
    <>
      <Button
       onClick={() => {
        save(
          address,
        );
      }}
        variant="dark"
        className="rounded-pill px-3 py-3"
      >
         <h1 className="fs-4 fw-bold mb-0 text-white">{"Create NFT"}</h1> 
        
      </Button>
    </>
  );
};

AddNfts.propTypes = {

  // props passed into this component
  save: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
};

export default AddNfts;