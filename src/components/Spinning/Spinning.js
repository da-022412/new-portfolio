import styled, { keyframes } from 'styled-components';

const Spinning = () => {
    return (
        <Wrapper>
            <Ripple>
                <Disc></Disc>
                <Disc></Disc>
            </Ripple>
        </Wrapper>
    );
};

const ripple = keyframes`
    from {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    to {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
`;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    min-height: 200px;
    width: 100%;
`;

const Ripple = styled.div`
    display: inline-block;
    height: 80px;
    position: relative;
    width: 80px;
`;

const Disc = styled.div`
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    border: 4px solid var(--color-text);
    border-radius: 50%;
    opacity: 1;
    position: absolute;

    &:nth-child(2) {
        animation-delay: -0.5s;
    }
`;

export default Spinning;
