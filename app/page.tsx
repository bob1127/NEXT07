export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}
import Image from 'next/image'
import Img01 from '../../public/images/wix.jpg'
import Img02 from '../../public/images/c2.jpg'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
// import Newsletter from '@/components/newslHetter'
import ApplicateCard from '../components/Application/ApplicateCard'
import CardHover from '../components/CardHover'
import Cards from '../components/Cards/Cards'
import { properties } from "../constants/data";
import  AnimatedTabs  from '../components/NavgationPage/Navgation'
import NewsletterForm from '../components/NewsLetter/NewsLetter'
import ToggleMenu from '../components/ToggleMenu/header'


export default function Home() {
  return (
    <>
     
      <div className="outWrap overflow-hidden " id='about'>
        <ToggleMenu/>
        <AnimatedTabs />
        <Hero />
  
        <section className=' px-5  md:px-15 lg:px-20'>
         
            <CardHover/>
        
        </section>

        

       
        <Features/>

        <ApplicateCard />
        <div className="App" id='Product'>
          {/* Section header */}
          <div className="section-title flex flex-col w-full py-10 justify-center items-center">
            <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-4xl dark:text-white text-center">我們的產品</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">多領域應用</p>

          </div>
          <div className="properties flex flex-wrap   justify-center items-center">
            {properties.map((item) => (
              <Cards data={item} key={item.id} />
            ))}
          </div>
        </div>

        <img src='../../../../public/images/wix.jpg' alt="" className='w-full' />

        <div className="relative flex justify-center mb-8 border" data-aos="zoom-y-out" data-aos-delay="450">

          <img src="https://www.zensor.com.tw/images/wix.jpg" alt="" />
      
     
        </div>
        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
          <img src="https://www.zensor.com.tw/images/maven.jpg" alt="" />
         
          {/* <img src='https://www.zensor.com.tw/images/maven.jpg' className='w-full' alt="" /> */}
       
        </div>
   
        <FeaturesBlocks />
        <Testimonials />
        <NewsletterForm />


      </div>
    </>
  )
}
