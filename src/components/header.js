import styled from 'styled-components';

export default function Header(){
    return (
        <BackGround>
            <h1>CINEFLEX</h1>
        </BackGround>
    );
}

const BackGround = styled.div`
    width: 100%;
    height: 67px;
    background-color: var(--header-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: var(--orange);
        font-size: 34px;
        font-weight: 400;
    }
`;