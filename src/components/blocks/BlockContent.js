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
import { uid } from 'uid';

const BlockContent = ({content}) => {
    const blocks = content.map((block, index) => {
        switch(block._type) {
            case 'typography':
                return <Text block={block} key={uid()} />
            case 'payment':
                return <Payment block={block} key={uid()} />
            case 'mailchimp':
                return <MailchimpForm block={block} key={uid()} />
            case 'youtubeEmbed':
                return <Youtube block={block} index={index} key={uid()} />
            case 'image':
                return <Image src={urlFor(block.asset._ref)} styles={{my: 2}} key={uid()} />
            case 'about': 
                return <About key={uid()} />
            case 'hero':
                return <Hero block={block} index={index} key={uid()} />
            case 'ctaPay':
                return <CalltoActionPay block={block} key={uid()} />
            case 'ctaPaySev':
                return <CalltoActionPayGrid block={block} key={uid()} />
            case 'ctaLink':
                return <CalltoActionLink block={block} key={uid()} />
            case 'ctaLinkSev':
                return <CalltoActionLinkGrid block={block} key={uid()} />
        }
    });

    return blocks.map(block => block);
}

export default BlockContent;
