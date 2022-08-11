import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export const Loader = ({ numberOfRows }) => {
  const [rows, setrows] = useState([1]);

  useEffect(() => {
    const newRows = new Array(numberOfRows).fill(1);
    setrows(newRows);
  }, numberOfRows);

  return (
    <LoaderContainer>
      {rows.map(() => (
        <span class="skeleton-loader"></span>
      ))}
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  .skeleton-loader {
    width: 100%;
    margin-bottom: 20px;
    height: 15px;
    display: block;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      lightgray;
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;
  }
  @keyframes shine {
    to {
      background-position: 100% 0, /* move highlight to right */ 0 0;
    }
  }
`;
