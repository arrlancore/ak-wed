import gsap from 'gsap';
import { useRouter } from 'next/router';
import * as React from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';

type TragetNode = string | object | null;

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const onPageEnter = (node: TragetNode) => {
    gsap.fromTo(
      node,
      {
        y: 50,
        autoAlpha: 0,
        ease: 'power3',
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
      }
    );
  };

  const onPageExit = (node: TragetNode) => {
    gsap.fromTo(
      node,
      {
        y: 0,
        autoAlpha: 1,
        ease: 'power3.out',
      },
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power3.inOut',
      }
    );
  };
  return (
    <SwitchTransition>
      <Transition
        key={router.asPath} // our route as a key
        timeout={700}
        in={false}
        onEnter={onPageEnter} // our enter animation
        onExit={onPageExit} // our exit animation
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <>{children}</>
      </Transition>
    </SwitchTransition>
  );
}
