import styled from "styled-components";
import React, { Component, useState } from "react";

const WeatherLogo = styled.img`
  width: 140px;
  height: 100px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
  }

  & button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        {/*<input onChange={(e) => updateCity(e.target.value)} />*/}
        <input
          placeholder="Location..."
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;