import Image from '../../Image';

import Grid from '../../Grid';

const ClientItems = ({ items }) => {
    return (
        <Grid width={240}>
            {items.map(({ img, height, width, alt }, index) => (
                <Image
                    src={img}
                    height={height}
                    width={width}
                    alt={alt}
                    key={index}
                />
            ))}
        </Grid>
    );
};

export default ClientItems;
