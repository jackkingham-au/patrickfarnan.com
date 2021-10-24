import React from 'react';
import Text from './Text';
import Payment from './Payment';
import MailchimpForm from './MailchimpForm';
import Youtube from './Youtube';
import Image from '../core/Image';
import { urlFor } from '../../helpers/sanity';
import About from './About';
import Hero from './Hero';
import CalltoActionPay from './CalltoActionPay';
import CalltoActionPayGrid from './CalltoActionPayGrid';
import CalltoActionLink from './CalltoActionLink';
import CalltoActionLinkGrid from './CalltoActionLinkGrid';

const BlockContent = ({content}) => {
    const blocks = content.map((block, index) => {
        switch(block._type) {
            case 'typography':
                return <Text block={block} />
            case 'payment':
                return <Payment block={block} />
            case 'mailchimp':
                return <MailchimpForm block={block} />
            case 'youtubeEmbed':
                return <Youtube block={block} index={index} />
            case 'image':
                return <Image src={urlFor(block.asset._ref)} styles={{my: 2}} />
            case 'about': 
                return <About />
            case 'hero':
                return <Hero block={block} index={index} />
            case 'ctaPay':
                return <CalltoActionPay block={block} />
            case 'ctaPaySev':
                return <CalltoActionPayGrid block={block} />
            case 'ctaLink':
                return <CalltoActionLink block={block} />
            case 'ctaLinkSev':
                return <CalltoActionLinkGrid block={block} />
        }
    });

    return blocks.map(block => block);
}

export default BlockContent;
