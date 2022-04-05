import { useState, useEffect } from 'react';
import axios from 'axios';

import Image from '../../Image';

const FeaturedImg = ({ featuredImg }) => {
    const [img, setImg] = useState({
        alt: '',
        url: '',
        width: '',
        height: '',
    });

    useEffect(() => {
        async function getImage() {
            await axios
                .get(
                    `https://wordpress-741292-2528350.cloudwaysapps.com/wp-json/wp/v2/media/${featuredImg}`
                )
                .then((response) => {
                    setImg({
                        alt: response.data.alt_text,
                        src: response.data.media_details.sizes.full.source_url,
                        width: response.data.media_details.sizes.full.width,
                        height: response.data.media_details.sizes.full.height,
                    });
                });
        }

        getImage();
    }, [featuredImg]);

    return (
        <Image
            src={img.src}
            height={img.height}
            width={img.width}
            alt={img.alt}
        />
    );
};

export default FeaturedImg;
