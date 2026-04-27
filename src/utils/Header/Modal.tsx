import React from 'react';
import { ModalOverlay, type ModalOverlayProps, Modal as RACModal } from 'react-aria-components/Modal';
import { tv } from 'tailwind-variants';

const overlayStyles = tv({
  base: 'absolute top-0 left-0 w-full h-(--page-height) isolate z-20 bg-black/[50%] text-center backdrop-blur-xs',
  variants: {
    isEntering: {
      true: 'animate-in fade-in duration-200 ease-out'
    },
    isExiting: {
      true: 'animate-out fade-out duration-200 ease-in'
    }
  }
});

const modalStyles = tv({
  base: 'font-sans w-full max-w-[min(90vw,450px)] max-h-[calc(var(--visual-viewport-height)*.9)] bg-white text-left align-middle text-neutral-700 dark:text-neutral-300 shadow-2xl bg-clip-padding border border-black/10 dark:border-white/10 min-w-full',
  variants: {
    isEntering: {
      true: 'animate-in zoom-in-105 ease-out duration-200'
    },
    isExiting: {
      true: 'animate-out zoom-out-95 ease-in duration-200'
    }
  }
});

export function Modal(props: ModalOverlayProps) {
  return (
    <ModalOverlay {...props} className={overlayStyles}>
      <div className="sticky top-0 left-0 flex items-center justify-center box-border ">
        <RACModal {...props} className={modalStyles} />
      </div>
    </ModalOverlay>
  );
}
