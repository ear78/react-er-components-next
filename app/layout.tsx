import StoreProvider from './StoreProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Head from 'next/head';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// library.add(fab);

import './global.css';
import BackToTopButton from '@/components/BackToTopButton/BackToTopButton';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Head>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head> */}
      <body className="font-avenir">
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <StoreProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </StoreProvider>
        <BackToTopButton />
      </body>
    </html>
  );
}
