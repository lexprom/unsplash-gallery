import styled from 'styled-components';

export const Form = styled.form`
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
    padding: 5rem 2rem;
`;

export const Input = styled.input`
      text-align: left;
      border-radius: 6rem;
      border: 1px solid rgb(160, 160, 160);
      padding: .6rem 2rem .6rem 1rem;
      width: 12rem;
      font-family: 'roboto';
      transition: .5s;
      &:focus {
        outline: none;
        border-color: #212121;
        transition: .5s;
      }
`;
