import React, { useState } from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { FloatingDock } from './ui/floating-dock'
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
} from "@tabler/icons-react";

const Footer = () => {

    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: () => void) => {
        // e.preventDefault();
        const mailtoLink = `mailto:harshit70803hs@gmail.com?subject=Message from ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
        window.location.href = mailtoLink;
    };

    const links = [
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/Harshitn24",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/harshit-navadiya-a3629a216/",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/im_Harshit24",
        },
    ];

    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10' id="contact">
            {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'> 
            <img
                src="/footer-grid.svg"
                alt="grid"
                className='w-full h-full opacity-50'/>
        </div> */}

            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Let&apos;s {' '}<span className='text-purple'>Collaborate</span>
                </h1>
                {/* <a href="mailto:harshit70803hs@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a> */}
            </div>

            <div className="grid md:grid-cols-2 gap-12 py-12 px-6 max-w-6xl mx-auto">
                {/* Left Column */}
                <div className="space-y-10">

                    {/* Contact Information */}
                    <div className="p-8 rounded-2xl shadow-xl text-white">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    📧
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p>harshit70803hs@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                    📍
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p>Gandhinagar, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className=" p-8 rounded-2xl shadow-xl text-white">
                        <h3 className="text-2xl font-semibold mb-6">Social Links</h3>
                        <div className=" space-x-6 text-xl">
                            {/* <a href="https://github.com/Harshitn24" target="_blank" className="hover:text-purple-400">
                                <img src="/git.svg" alt="Medium" className="w-6 h-6 opacity-70 hover:opacity-100" />
                            </a>
                            <a href="https://www.linkedin.com/in/harshit-navadiya-a3629a216/" target="_blank" className="hover:text-purple-400">
                                <img src="/link.svg" alt="Medium" className="w-6 h-6 opacity-70 hover:opacity-100" />
                            </a>
                            <a href="https://x.com/im_Harshit24" target="_blank">
                                <img src="/twit.svg" alt="Medium" className="w-6 h-6 opacity-70 hover:opacity-100" />
                            </a> */}
                            <FloatingDock
                                mobileClassName="translate-y-20" // only for demo, remove for production
                                items={links}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="p-8 w-fullflex items-center justify-center rounded-2xl shadow-xl text-white">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Your name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="your.email@example.com"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Your message"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>
                        <div
                            className="flex justify-center items-center bg-purple-600 h-fit hover:bg-purple-700 transition-all rounded-lg font-semibold"
                        >
                            <MagicButton
                                title="Send Message"
                                icon={<FaLocationArrow />}
                                position='right'
                                handleClick={handleSubmit}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 harshit</p>
            {/* <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>


                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border  border-black-300'>
                            <a href={profile.link} target='_blank'>
                                <img src={profile.img} alt="icons"
                                    width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div> */}
        </footer>
    )
}

export default Footer
