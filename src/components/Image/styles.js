import styled from 'styled-components';

export const Img = styled.img`
    border-radius:8px;
    height: 300px;
    object-fit: cover;
    margin-top: 50px;
    margin-left: 30px;
    width: 400px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 320px) {
        width: 276px;
        margin-left: 16px;
        margin-right: 16px;
        height: 259px;
    }
    @media (max-width: 768px) {
        margin-left: 30px;
        width: 330px;
        margin-right: 0px;
    }
`;
