import { ReactNode } from 'react';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        id="content"
        role="main"
        className="mx-auto flex w-full max-w-7xl flex-grow flex-col bg-fixed px-4 py-10 sm:px-6 md:py-16 lg:px-8"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
