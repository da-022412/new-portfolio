import PortfolioItem from './PortfolioItem';

const PortfolioItems = ({ items }) => {
    return items.map(({ title, copy, img, src }, index) => (
        <PortfolioItem
            key={index}
            title={title}
            copy={copy}
            img={img}
            src={src}
        />
    ));
};

export default PortfolioItems;
