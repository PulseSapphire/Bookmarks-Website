import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import Features from '@/components/Features/Features'
import CustomerQuotes from '@/components/CustomerQuotes/CustomerQuotes'
import CommunityJoinMessage from '@/components/CommunityJoinMessage/CommunityJoinMessage'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <CustomerQuotes />
      <CommunityJoinMessage />
      <Footer />
    </div>
  )
}
