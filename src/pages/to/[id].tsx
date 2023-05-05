import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

import { dataGuest, GustKeys } from '@/lib/data';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
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

export default function ToPage() {
  const router = useRouter();
  const { id } = router.query;
  const guestName = getGuestName(id as GustKeys);

  return (
    <Layout>
      <Seo
        templateTitle={`Undangan Pernikahan Untuk ${guestName}`}
        image='/images/cover.png'
      />

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
              <p className='content-in mt-8 font-bold text-black'>
                Kepada: {guestName}
              </p>
              <p className='content-in font-tangerine mt-10 text-5xl'>
                Undangan Pernikahan
              </p>
              <h4 className='content-in mt-4'>21 Mei 2023</h4>
              <p className='content-in mt-4 text-2xl'>Arlan & Kenny</p>

              <ArrowLink
                className='content-in2 mt-4 md:text-lg'
                href='/detail'
                variant='outline'
                as={ButtonLink}
                size='sm'
              >
                Buka
              </ArrowLink>
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