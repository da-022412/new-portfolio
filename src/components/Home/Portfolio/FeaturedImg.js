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
                    `https://admin.dennisacosta.com/wp-json/wp/v2/media/${featuredImg}`
                )
                .then((response) => {
                    setImg({
                        alt: response.data.alt_text,
                        src: response.data.media_details.sizes.full.source_url,
                    });
                });
        }

        getImage();
    }, [featuredImg]);

    return <Image src={img.src} alt={img.alt} />;
};

export default FeaturedImg;
