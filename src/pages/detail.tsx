import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import { HiBookmark } from 'react-icons/hi';

import { event, WGtag } from '@/lib/ga';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
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

const storeKeyAttend = '_attend';

export default function HomePage() {
  const [attend, setAttend] = React.useState(true);
  const { query } = useRouter();
  const attendConfirm = () => {
    const attend = confirm('Konfirmasi kehadiran saya?');
    if (attend) {
      localStorage.setItem(storeKeyAttend, (query?.guest as string) || '');
      const w = window as WGtag;
      event(w, {
        action: 'ATTENDING_RSVP',
        params: {
          guest: query?.guest as string,
        },
      });
      setAttend(true);
      alert('Terimakasih atas konfirmasinya 🙏🙏');
    }
  };

  React.useEffect(() => {
    const attendStatus = localStorage.getItem(storeKeyAttend);
    setAttend(attendStatus === query?.guest);
  }, [query.guest]);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-cover-pattern2 relative bg-cover'>
          <div className='absolute left-0 top-0 h-full w-full bg-[rgba(255,255,255,0.9)]' />

          <div
            className='layout relative mx-auto my-0 flex min-h-screen w-full max-w-[500px] flex-col items-center
           justify-center overflow-hidden py-12 text-center text-slate-600 shadow-lg'
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
            {/* content */}
            <div className='content-in z-10 my-24 flex flex-col gap-2 p-4'>
              <p className='font-bold'>BISMILLAHIRRAHMANIRRAHIM</p>
              <p className='font-bold' style={{ textTransform: 'uppercase' }}>
                Assalamu'alaikum warahmatullahi wabarakatuh
              </p>
              <p className='mt-6'>
                Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-
                pasangan. Ya Allah, izinkanlah kami menikahkan putra-putri kami:
              </p>
              <p className='mt-6 text-2xl font-bold'>DWIKI ARLAN</p>
              <p className='font-bold'>
                Putra dari Bapak Johny Efri Zay (Rahimahullah) & Ibu Zulbaedah
              </p>
              <p className='text-2xl font-bold'>&</p>
              <p className='text-2xl font-bold'>KENNY RAHAYU</p>
              <p className='font-bold'>
                Putra dari Bapak Masferiedi & Ibu Idrianti
              </p>
              <div className='mt-4'>~~~</div>
              <p className='mt-4'>
                Untuk melaksanakan syariat agama-Mu, mengikuti sunnah Rasul-Mu
                dalam membentuk pribadi dan rumah tangga sakinah, mawaddah &
                warahmah yang Insya Allah, akan dilaksanakan pada:
              </p>
              <p className='mt-4 text-lg font-bold italic underline'>
                AKAD NIKAH
              </p>
              <p>Jum'at, 19 Mei 2023</p>
              <p>Pukul: 09:00 WIB</p>
              <p>Tempat: Jorong Kambing VII, Gadut, Kab. Agam, Sumtera Barat</p>
              <p>(Kediaman Kenny Rahayu)</p>
              <div className='mt-4'>~~~</div>
              <p>
                Dengan Memohon Rahmat dan Ridho Allah Ta'ala, kami bermaksud
                menyelenggarakan acara Resepsi Pernikahan putra- putri kami yang
                Insya Allah akan dilaksanakan pada:
              </p>

              <div className='bg-primary-500 mx-auto mt-4 flex w-fit items-center justify-center rounded px-6 py-2 text-black'>
                <p className='text-2xl font-bold text-white'>RESEPSI</p>
              </div>
              <p className='mt-2'>Ahad, 21 Mei 2023 </p>
              <p>Pukul: 10:00 - 18.00</p>
              <p>Tempat: Bulaan Kamba, Kubang Putiah,</p>
              <p>Kab. Agam, Sumtera Barat</p>
              <p>(Kediaman Dwiki Arlan)</p>

              <p className='mt-2'>
                Merupakan suatu kehormatan apabila Bapak/ Ibu/ Saudara/ i
                berkenan hadir untuk memberikan do'a dan restu kepada kedua
                mempelai.
              </p>

              <p className='mt-2 font-bold'>
                Dan diantara do'a pengantin yang diajarkan Nabi shallallahu
                ‘alaihi wa sallam, ialah:
              </p>
              <p className='mt-4 text-xl'>
                بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي
                خَيْرٍ
              </p>
              <p className=''>
                Artinya: “Semoga Allah memberkahimu di waktu bahagia dan
                memberkahimu di waktu susah, serta semoga Allah mempersatukan
                kalian berdua dalam kebaikan” - HR. Abu Dawud
              </p>

              {!attend && (
                <Button
                  className='mt-4 w-full justify-center'
                  onClick={attendConfirm}
                >
                  Konfirmasi Kehadiran
                </Button>
              )}

              <Button
                leftIcon={HiBookmark}
                variant='outline'
                className='justify-center'
              >
                <a href='https://goo.gl/maps/E3Lvp4pwJVv7RiV86' target='_blank'>
                  Buka Google Map
                </a>
              </Button>

              <p className='font-tangerine mt-4 text-5xl '>Arlan & Kenny</p>
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
