import React, {type ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import SupportPanel from '@site/src/components/Support/SupportPanel';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const {metadata} = useDoc();
  
  // Don't show SupportPanel on homepage - it has its own CommunitySection
  const isHomepage = metadata.permalink === '/' || metadata.permalink === '/intro';
  
  return (
    <>
      {!isHomepage && <SupportPanel pagePath={metadata.permalink} />}
      <Footer {...props} />
    </>
  );
}
