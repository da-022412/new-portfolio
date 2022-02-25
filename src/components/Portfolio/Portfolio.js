import styled from 'styled-components';

import Container from '../Container';
import Heading from '../Heading';
import PortfolioItems from './PortfolioItems';

import dailyPay from '../../assets/images/dailypay-mockup.jpg';
import VCS from '../../assets/images/vascular-care-specialists-mockup.jpg';
import Paceline from '../../assets/images/paceline-mockup.jpg';
import aboveTheRest from '../../assets/images/above-the-rest-mockup.jpg';

const CONTENT = [
    {
        title: 'DailyPay',
        copy: 'Earned wage access and on demand pay solutions.',
        img: dailyPay,
        src: '/project/dailypay',
    },
    {
        title: 'Vascular Care Specialists',
        copy: 'Providing care for traditional vascular surgery and minimally invasive endovascular surgical procedures',
        img: VCS,
        src: '/project/vascular-care-specialists',
    },
    {
        title: 'Paceline',
        copy: 'The first-ever fitness rewards platform that adds financial benefit to your physical activity.',
        img: Paceline,
        src: '/project/paceline',
    },
    {
        title: 'Above the Rest',
        copy: 'A complete and licensed roofing contractor providing roof installation, repair, and replacement as well as vinyl siding.',
        img: aboveTheRest,
        src: '/project/above-the-rest',
    },
];

const Portfolio = () => {
    return (
        <Container padding={120}>
            <StyledHeading level={2}>My Work</StyledHeading>
            <PortfolioItems items={CONTENT} />
        </Container>
    );
};

const StyledHeading = styled(Heading)`
    font-size: var(--heading-2);
    text-align: center;
`;

export default Portfolio;
