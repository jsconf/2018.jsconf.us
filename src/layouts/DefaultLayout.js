import { absoluteUrl } from '../util/urlFilters'
import { element, node, string } from 'prop-types'
import Footer from '../components/Footer'
import Head from 'react-helmet'
import Header from '../components/Header'
import React from 'react'
import ScrollToHash from '../components/ScrollToHash'
import TitleBlock from '../components/TitleBlock'

import './DefaultLayout.css'

const DefaultLayout = ({ children, description, title, hero }) => {
  if (!hero) {
    hero = <TitleBlock title={title}/>
  }
  return (
    <div className="DefaultLayout">
      <Head
        meta={[{ content: description, name: 'description' }]}
        title={title}
      >
        <link href="https://fonts.googleapis.com/" rel="preconnect"/>
        <link href="https://ti.to" rel="preconnect"/>
        <link href="https://ti.to/jsconf-us/jsconf-us-2018" rel="prefetch"/>
        <meta content={absoluteUrl('/')} property="og:url"/>
      </Head>
      <ScrollToHash/>
      <Header>{hero}</Header>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: node.isRequired,
  description: string,
  hero: element,
  title: string
}

export default DefaultLayout
