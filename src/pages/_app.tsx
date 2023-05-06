import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import { pageview, WGtag } from '@/lib/ga';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const w = window as WGtag;
      pageview(w, url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition key={router.pathname} classNames='page' timeout={300}>
        <Component {...pageProps} />
      </CSSTransition>
    </SwitchTransition>
  );
}

export default MyApp;
