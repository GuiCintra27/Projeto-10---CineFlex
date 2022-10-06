import styled from "styled-components";

export default function Title({ color, fontWeigth, children }) {
    return (
        <SectionTitle color={color} fontWeigth={fontWeigth}>
            {children}
        </SectionTitle>
    );
}

const SectionTitle = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: ${props => props.fontWeigth};
    color: ${props => props.color};
`;