import styled from '@emotion/styled';

import dailyPay from '../../assets/images/dailypay-mockup.jpg';
import VCS from '../../assets/images/vascular-care-specialists-mockup.jpg';
import Paceline from '../../assets/images/paceline-mockup.jpg';
import aboveTheRest from '../../assets/images/above-the-rest-mockup.jpg';

const portfolioItems = [
    {
        id: 0,
        title: 'DailyPay',
        copy: 'Earned wage access and on demand pay solutions.',
        img: dailyPay,
        src: '/project/dailypay',
    },
    {
        id: 1,
        title: 'Vascular Care Specialists',
        copy: 'Providing care for traditional vascular surgery and minimally invasive endovascular surgical procedures',
        img: VCS,
        src: '/project/vascular-care-specialists',
    },
    {
        id: 2,
        title: 'Paceline',
        copy: 'The first-ever fitness rewards platform that adds financial benefit to your physical activity.',
        img: Paceline,
        src: '/project/paceline',
    },
    {
        id: 3,
        title: 'Above the Rest',
        copy: 'A complete and licensed roofing contractor providing roof installation, repair, and replacement as well as vinyl siding.',
        img: aboveTheRest,
        src: '/project/above-the-rest',
    },
];

const Portfolio = () => {
    return (
        <PortfolioSection id='work'>
            <HeadingContainer>
                <Heading>My Work</Heading>
            </HeadingContainer>
            {portfolioItems.map((item) => (
                <PortfolioItem key={item.id}>
                    <Content>
                        <ItemHeading>{item.title}</ItemHeading>
                        <ItemContent>{item.copy}</ItemContent>
                    </Content>
                    <Image>
                        <img src={item.img} height='600' width='600' />
                    </Image>
                </PortfolioItem>
            ))}
        </PortfolioSection>
    );
};

const font = 'gtWalsheimProRegular, sans-serif';

const PortfolioSection = styled.main`
    box-sizing: border-box;
    margin: auto;
    max-width: 90%;
    padding: 10rem 0;
    width: 1200px;
`;

const HeadingContainer = styled.div`
    margin-bottom: 3rem;
`;

const Heading = styled.h2`
    font-family: gtWalsheimProRegular, sans-serif;
    font-size: 3rem;
    text-align: center;
`;

const PortfolioItem = styled.main`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div`
    padding: 2.5rem;
`;

const ItemHeading = styled.h3`
    font-family: ${font};
    font-size: 1.75rem;
`;

const ItemContent = styled.p`
    color: #686868;
    font-family: ${font};
    font-size: 1rem;
`;

const Image = styled.figure`
    display: flex;
`;

export default Portfolio;
