import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 48px;
  color: #ffff;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 450px;

  margin-top: 40px;

  select {
    height: 45px;
    width: 80px;
  }

  input {
    flex: 1;
    height: 45px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
  }

  button {
    width: 80px;
    height: 45px;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    background: #04d361;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const SearchContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 50px 0px;

  div {
    padding: 10px 20px;
  }
`;
