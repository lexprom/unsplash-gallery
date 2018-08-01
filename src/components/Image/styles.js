import styled from 'styled-components';

export const Img = styled.img`
    border-radius:8px;
    height: 300px;
    object-fit: none;
    margin-top: 50px;
    margin-left: 25px;
    margin-right:25px;
    width: 400px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const BlockFont = styled.div`
    background-color: black;
    transition: all 0.4s ease-in-out 0s;
    opacity: 0;
    width: 400px;
    margin: 0;
    color: white;
    &:hover {
        opacity: .5;
    }
`;

export const BlockContainer = styled.div`
    position: relative; 
`;

export const Text = styled.span`
    display: block;
    font-weight: bold;
    padding: 60px 0;
    text-align: center;
`;
