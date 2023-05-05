import Image from 'next/image';
import * as React from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { dataGuest, GustKeys } from '@/lib/data';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const getGuestName = (id: GustKeys) => {
  return dataGuest[id] || dataGuest['default'];
};

export default function ToPage({ guestName }: { guestName: string }) {
  return (
    <Layout>
      <Seo templateTitle={`Undangan Pernikahan Untuk ${guestName}`} />

      <main>
        <section className='bg-slate-100'>
          <div
            className='layout relative mx-auto my-0 flex min-h-screen max-w-[500px] flex-col
           items-center justify-center overflow-hidden bg-white bg-contain bg-left-bottom bg-no-repeat py-12 text-center text-slate-600 '
          >
            <Image
              src='/images/leave.png'
              alt='bg'
              width={230}
              height={230}
              className='rotate2 absolute -bottom-16 -left-10 z-0 -rotate-90'
              priority
            />
            <Image
              src='/images/leave.png'
              alt='bg'
              width={200}
              height={200}
              className='rotate absolute -right-10 -top-16 z-0 rotate-90'
              priority
            />
            <div className='z-10'>
              <p className='content-in mt-2 font-bold'>Kepada: {guestName}</p>
              <p className='content-in mx-auto mt-1 h-1 w-[90%] rounded-full border-b-2 border-dashed border-slate-300' />

              <p className='content-in font-tangerine mt-10 text-5xl'>
                Undangan Pernikahan
              </p>
              <h4 className='content-in mt-4'>21 Mei 2023</h4>
              <p className='content-in font-tangerine mt-4 text-5xl'>
                Arlan & Kenny
              </p>

              <ButtonLink
                className='content-in2 mt-6 px-8 pt-1 md:text-lg'
                href='/detail'
                variant='dark'
                size='sm'
                rightIcon={HiArrowRight}
              >
                buka
              </ButtonLink>
            </div>

            <footer className='absolute bottom-2'>
              <UnderlineLink href='#'>
                © 2023 By Arlan & Kenny | E-Invitation
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

ToPage.getInitialProps = ({ query }: { query: Record<string, string> }) => {
  const guestName =
    getGuestName(query.id as GustKeys) || getGuestName('default');
  return { guestName };
};
