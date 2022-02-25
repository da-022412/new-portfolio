import PortfolioItem from './PortfolioItem';

const PortfolioItems = ({ items }) => {
    return items.map(({ title, copy, img, link }, index) => (
        <PortfolioItem
            key={index}
            title={title}
            copy={copy}
            img={img}
            link={link}
        />
    ));
};

export default PortfolioItems;
