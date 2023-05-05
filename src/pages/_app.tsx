import { AppProps } from 'next/app';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition key={router.pathname} classNames='page' timeout={300}>
        <Component {...pageProps} />
      </CSSTransition>
    </SwitchTransition>
  );
}

export default MyApp;
