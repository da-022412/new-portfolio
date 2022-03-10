import styled from 'styled-components';

import Container from '../../Container';
import Heading from '../../Heading';
import PortfolioItems from './PortfolioItems';

import dailyPay from '../../../assets/images/dailypay-mockup.jpg';
import VCS from '../../../assets/images/vascular-care-specialists-mockup.jpg';
import Paceline from '../../../assets/images/paceline-mockup.jpg';
import aboveTheRest from '../../../assets/images/above-the-rest-mockup.jpg';

const CONTENT = [
    {
        title: 'DailyPay',
        copy: 'Earned wage access and on demand pay solutions.',
        img: {
            src: dailyPay,
            height: 600,
            width: 600,
            alt: 'DailyPay',
        },
        link: 'https://dailypay.com',
    },
    {
        title: 'Vascular Care Specialists',
        copy: 'Providing care for traditional vascular surgery and minimally invasive endovascular surgical procedures',
        img: {
            src: VCS,
            height: 600,
            width: 600,
            alt: 'Vascular Care Specialists',
        },
        link: 'https://vascularcarespecialists.com/',
    },
    {
        title: 'Paceline',
        copy: 'The first-ever fitness rewards platform that adds financial benefit to your physical activity.',
        img: {
            src: Paceline,
            height: 600,
            width: 600,
            alt: 'Paceline',
        },
        link: 'https://paceline.fit/',
    },
    {
        title: 'Above the Rest',
        copy: 'A complete and licensed roofing contractor providing roof installation, repair, and replacement as well as vinyl siding.',
        img: {
            src: aboveTheRest,
            height: 600,
            width: 600,
            alt: 'Above the Rest',
        },
        link: 'https://abovetherestroofingandsiding.com/',
    },
];

const Portfolio = () => {
    return (
        <Container padding={100}>
            <StyledHeading level={3}>My Work</StyledHeading>
            <PortfolioItems items={CONTENT} />
        </Container>
    );
};

const StyledHeading = styled(Heading)`
    font-size: var(--heading-3);
    text-align: center;
`;

export default Portfolio;
