"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

import { Link } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Image } from "@nextui-org/react";




let tabs = [
    {
        id: "world", label: "關於", name: "Home",
        hash: "#about ",
},
    { id: "ny", label: "專利技術" ,hash: "#Tech "  },
    { id: "business", label: "應用", hash: "#Tech " },
    { id: "arts", label: "產品" },
    { id: "science", label: "聯絡" },
];

function AnimatedTabs() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex space-x-1 flex justify-center fixed left-1/2 z-50 bottom-3 translate-x-50">
            <div className="wrap  bg-slate-100  backdrop-blur-md

 w-auto inline-block px-8 rounded-full py-2">
                {tabs.map((tab, href) => (
                <button
                    key={tab.id}
                        onMouseEnter={() => setActiveTab(tab.id)}
                    className={`${activeTab === tab.id ? "" : "hover:text-black/20"
                        } relative rounded-full px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                        <a href={tab.hash}>
                    {activeTab === tab.id && (
                       
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-white mix-blend-difference"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      
                            )}  </a>
                    {tab.label}
                </button>
                     



            ))}
                <Button onPress={onOpen} className="bg-rose-600 rounded-full text-white">Open Modal</Button>
                <Modal
                    backdrop="opaque"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    radius="2xl"
                    className="bg-gray-300"
                  
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                                <ModalBody>
                                    <Image src=''></Image>
                                  
                                    
                                </ModalBody>
                                <ModalFooter>
                                  
                                  
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
}


export default AnimatedTabs;