import styled from 'styled-components';

import ClientItems from './ClientItems';

import Container from '../../Container';
import Heading from '../../Heading';

import imgOne from '../../../assets/images/kaplan-logo.png';
import imgTwo from '../../../assets/images/nwf-logo.png';
import imgThree from '../../../assets/images/nielsen-logo.png';
import imgFour from '../../../assets/images/halo-logo.png';
import imgFive from '../../../assets/images/location-inc-logo.png';
import imgSix from '../../../assets/images/dailypay-logo.png';
import imgSeven from '../../../assets/images/paceline-logo.png';
import imgEight from '../../../assets/images/equinox-logo.png';

const CONTENT = [
    {
        img: imgOne,
        alt: 'Kaplan',
        height: 258,
        width: 500,
    },
    {
        img: imgTwo,
        alt: 'NWF',
        height: 198,
        width: 500,
    },
    {
        img: imgThree,
        alt: 'Nielsen',
        height: 76,
        width: 500,
    },
    {
        img: imgFour,
        alt: 'Halo Collar',
        height: 250,
        width: 500,
    },
    {
        img: imgFive,
        alt: 'Location Inc',
        height: 120,
        width: 500,
    },
    {
        img: imgSix,
        alt: 'DailyPay',
        height: 124,
        width: 500,
    },
    {
        img: imgSeven,
        alt: 'Paceline',
        height: 127,
        width: 500,
    },
    {
        img: imgEight,
        alt: 'Equinox',
        height: 95,
        width: 500,
    },
];

const Clients = () => {
    return (
        <Container padding={120}>
            <StyledHeading level={2}>Selected Clients</StyledHeading>
            <ClientItems items={CONTENT} />
        </Container>
    );
};

const StyledHeading = styled(Heading)`
    font-size: var(--heading-2);
`;

export default Clients;