// import Image from 'next/image'
// import { img01 } from '../../public/images/c2.jpg'
export default function Footer() {
    return (

        <div className="topsection">
            <div className=" py-20 w-full flex flex-col justify-center items-center md:flex-row bg-rose-500">


                <div className="left w-1/2 text-white flex justify-center  ">
                    <img src="https://cdn.shopify.com/s/files/1/0569/5147/2268/files/subscribe-image_3838x.png?v=1677137097" alt="" className="w-1/2 md:w-2/4 "/>
                </div>
                <div className="right flex flex-col  w-1/2 md:pr-8">
                    <p className="text-3xl md:text-4xl  text-center md:text-left lg:text-5xl text-white font-extrabold">如果你對我們產品有興趣請聯繫我們</p>
                    <p className="text-gray-200 text-center md:text-left ">Get the latest on AnkerMake products, free trials, and more.
                        Sign up now and save $20 on your first AnkerMake 3D printer.</p>
                </div>
            </div>
        </div>

    )
}
