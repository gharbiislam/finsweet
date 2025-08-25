import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='container max-w-4xl mx-auto '>
                {/*heading*/}
                <section className='content-center text-center my-20'>
                    <p className='tracking-[0.2em] text-[var(--color-primary)] font-bold uppercase'>Contact Us</p> <br />
                    <h1 className='text-lg md:text-5xl'>Let’s Start a Conversation</h1><br />
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                </section>

                {/* contact*/}
                <section className='bg-[var(--color-purple)] md:flex text-white justify-around items-center p-10'>
                    <div className=''>
                        <p className='text-gray-400 border-b-2 border-gray-300 py-3'>Working hours</p>
                        <h3 className='font-semibold my-4'>Monday To Friday <br />9:00 AM ot 8:00 PM</h3>
                        <p className='text-gray-400'>Our Support Team is available 24/7</p>

                    </div>
                    <div>
                        <p className='text-gray-400 border-b-2 border-gray-300 py-3'>Contact Us</p>
                        <h3 className='font-semibold my-4'>020 7993 2905</h3>

                        <p className='text-gray-400'> hello@finsweet.com</p>

                    </div>

                </section>


                <form action="" className="w-full max-w-4xl mt-5  px-2 md:px-0 ">
                    <input type="text" placeholder="Full Name" className="w-full mt-4" />
                    <input type="text" placeholder="Your Email" className="w-full mt-4" />

                    <select className="w-full mt-4">
                        <option value="">option1</option>
                        <option value="">option2</option>
                        <option value="">option3</option>
                    </select>

                    <textarea placeholder="Message" className="w-full mt-4"></textarea>

                    <input
                        type="submit"
                        value="Send Message"
                        className="w-full mt-4 bg-[var(--color-secondry)] hover:bg-[var(--color-secondry2)] border-none font-bold text-lg"
                    />
                </form>


            </div>
            <div>
                <Footer />
            </div></div>
    )
}

export default Contact