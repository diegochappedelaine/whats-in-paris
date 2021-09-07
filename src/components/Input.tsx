import styled from "styled-components";

const InputText = styled.input`
  width: 100%;
  min-width: 0px;
  outline: transparent solid 2px;
  outline-offset: 2px;
  position: relative;
  appearance: none;
  font-size: 1rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: inherit;
  background: inherit;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  margin-top: 32px;
`;

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, handleChange }) => {
  return <InputText value={value} onChange={handleChange} type="text" />;
};

export default Input;
