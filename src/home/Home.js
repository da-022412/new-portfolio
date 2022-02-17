import styled from '@emotion/styled';

const HeadingSection = styled.section`
    box-sizing: border-box;
    margin: auto;
    max-width: 90%;
    width: 1200px;
`;

const HeadingContainer = styled.div`
    padding: 5rem 0 8.75rem;
`;

const Heading = styled.h1`
    font-family: 'gtWalsheimProRegular';
    font-size: 3.75rem;
`;

const SubHeading = styled.p`
    font-family: 'gtWalsheimProRegular';
    font-size: 1.25rem;
    width: 50%;
`;

const Divider = styled.div`
    background-color: #f7f7f7;
    height: 2px;
`;

const Home = () => {
    return (
        <HeadingSection>
            <HeadingContainer>
                <Heading>I'm Dennis, Front-End Developer</Heading>
                <SubHeading>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Enim ad minim veniam quis nostrud
                </SubHeading>
            </HeadingContainer>
            <Divider></Divider>
        </HeadingSection>
    );
};

export default Home;
