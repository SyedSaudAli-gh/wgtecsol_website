import React from 'react'
import Banner from '../components/banner'
import { banner } from '../components/bannerData'
import BlogsCard from './blogsCard'

function Page() {
  return (
    <div>
           <Banner
                bgImage={banner[6].bgImage}
                heading={banner[6].heading}
                subheading={banner[6].subheading}
              />
        <BlogsCard />
    </div>
  )
}

export default Page