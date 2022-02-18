import styled from '@emotion/styled';

const font = 'gtWalsheimProRegular, sans-serif';

const ItemContainer = styled.main`
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
    font-family: ${font};
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
        <ItemContainer>
            <Content>
                <ItemHeading>{items.title}</ItemHeading>
                <ItemContent>{items.copy}</ItemContent>
            </Content>
            <Image>
                <img src={items.img} height='600' width='600' />
            </Image>
        </ItemContainer>
    );
};

export default PortfolioItem;
