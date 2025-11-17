import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const ContactUs = () => {
  const [results, setResults] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setResults('Sending...')
    const formData = new FormData(e.target)

    formData.append('access_key', '2383e724-9772-4c12-ba09-bdfc255941be')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResults('')
        toast.success('Thank you for your message!')
        e.target.reset()
      } else {
        console.log('Error', data)
        toast.error(data.message)
        setResults('')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward"
      />
      <motion.form
        initial={{ opaciy: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              name="name"
              required
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              name="email"
              required
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            required
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          {results ? results : 'Submit'}
          <img src={assets.arrow_icon} className="w-4" alt="" />
        </button>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs
