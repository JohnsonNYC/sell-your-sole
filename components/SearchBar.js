import React, { useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    const newVal = e.target.value;
    setSearchTerm(newVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm || !searchTerm.length) return;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={searchTerm} onChange={handleSearchTerm} />
      <PillButton onClick={handleSubmit}>Search</PillButton>
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  display: flex;
  max-width: 250px;
  width: 100%;
  border: 1px solid #faf9f6;
  border-radius: 6px;
  background: white;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border: unset;
  border-radius: 6px;
`;

const PillButton = styled.button`
  border: 1px solid #8373dc;
  border-radius: 6px;
  background: #8373dc;
  color: white;
  cursor: pointer;
`;
