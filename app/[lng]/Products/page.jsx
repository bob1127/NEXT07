"use client"

import Link from "next/link";
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import img01 from "../../../public/images/brazil.webp";
import { useTranslation } from '../../i18n'



let easing = [0.6, -0.05, 0.01, 0.99];


const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default async function Page({ params: { lng } }) {
    const { t } = await useTranslation(lng)
    return (


    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <div className='container center flex flex-col '>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className='title'>
                <h1 className="mt-30 text-center">Select a protein</h1>
            </motion.div>
            <motion.div variants={stagger} className='product-row border border-slate-950 flex  w-full flex-wrap '>

                    <Link href={`/${lng}/Products/product01`}>
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='card border border-slate-950'>
                        <span className='category'>快速幽門螺旋桿菌尿素呼吸檢測組
</span>
                     
                        <motion.img
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            src='https://images.pexels.com/photos/8647070/pexels-photo-8647070.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'
                            width={250}
                        />
                        <div className='product-info'>
                            <h4></h4>
                            <span></span>
                        </div>
                    </motion.div>
                </Link>
                    <Link href={`/${lng}/Products/product01`}>
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='card border border-slate-950'>
                        <span className='category'>Protein</span>
                        <motion.img
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            src="https://images.pexels.com/photos/17715610/pexels-photo-17715610.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"

                            width={250}

                        />
                        <div className='product-info'>
                            <h4></h4>
                            <span></span>
                        </div>
                    </motion.div>
                </Link>

            </motion.div>
            <>

            </>
        </div>
    </motion.div>
  )
}


