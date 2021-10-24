import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlToTitle } from '../helpers/sanity';
import LoadingScreen from '../components/core/LoadingScreen';
import NotFound from '../components/core/NotFound';
import BlockContent from '../components/blocks/BlockContent';

const CustomPage = () => {
    const {customPage} = useParams();
    const [page, setPage] = useState(null);

    useEffect(() => {
        const getPage = async () => {
            const result = await client.fetch(`*[_type == 'pages' && title == '${urlToTitle(customPage)}']`);
            setPage(result[0]);
        }

        getPage();
    }, []);

    if(page === null) {
        return <LoadingScreen />
    } else if (page) {
        return (
            <BlockContent content={page.content} />
        );
    } else {
        return <NotFound />
    }
}

export default CustomPage;
