import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

export default function Layout({children}){
  return <div style={layoutStyle}>
          <Head>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          </Head>
          <Header />
          {children}
          <Footer />
        </div>
};
