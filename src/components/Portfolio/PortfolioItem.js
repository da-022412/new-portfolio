import styled from 'styled-components';

const font = 'gtWalsheimProRegular, sans-serif';

const PortfolioItem = styled.main`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div`
    padding: 2.5rem;
`;

const ItemHeading = styled.h3`
    font-family: var(--primary-font);
    font-size: 1.75rem;
`;

const ItemContent = styled.p`
    font-family: var(--primary-font);
    font-size: 1.75rem;
`;

const Image = styled.figure`
    display: flex;

    & img {
        max-width: 100%;
    }
`;

const PortfolioItem = ({ items }) => {
    return (
        <PortfolioItem>
            <Content>
                <ItemHeading>{items.title}</ItemHeading>
                <ItemContent>{items.copy}</ItemContent>
            </Content>
            <Image>
                <img src={items.img} height='600' width='600' />
            </Image>
        </PortfolioItem>
    );
};

export default PortfolioItem;
