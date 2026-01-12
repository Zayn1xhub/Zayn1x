import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import heroAnim from '../assets/lottie/hero.json'

export default function Hero(){
  return (
    <section className="hero">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="shine"></div>
        <div className="glow"></div>

        <div className="content">
          <div className="copy">
            <h1>ZAYN1x</h1>
            <p>Premium motion-first affiliate brand</p>
            <a className="btn">Join Now</a>
          </div>

          <div className="anim">
            <Lottie animationData={heroAnim} loop autoplay />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
