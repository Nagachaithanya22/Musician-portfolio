 "use client";
import React from "react";
import Layout from "../../components/common/Layout";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { Button } from "@/components/ui/button";
import HeroImg from "@/public/assets/hero1.png";
import guruImage from "@/public/assets/guru.jpeg";
import Classical from "@/public/assets/course-vocal.png";
import Light from "@/public/assets/course-light.png";
import Movie from "@/public/assets/course-bollywood.png";
import { motion } from "framer-motion"; 
import { GlareCard } from "@/components/ui/glare-card";

import { Noto_Sans_Devanagari, Montserrat, Lato } from "next/font/google";
export const dynamic = "force-dynamic";
const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});
const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-montserrat",
});
const Noto = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-devanagari",
});

const benefits = [
  {
    title: "One-on-One Training",
    description: "Dedicated attention and a curriculum tailored to your pace.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "From classical roots to contemporary hits, master the genres you love.",
  },
  {
    title: "Flexible Scheduling",
    description: "Life is busy, and your passion shouldn't have to wait.",
  },
];

const courses = [
  {
    title: "Hindustani Vocal",
    description: "Master the timeless art of Ragas and Bandishes.",
    image: Classical,
  },
  {
    title: "Light Music",
    description: "Explore folk, ghazal, and devotional singing.",
    image: Light,
  },
  {
    title: "Bollywood Music",
    description: "Sing your favorite film songs with technique and flair.",
    image: Movie,
  },
];

const guruBio = [
  `At the heart of Swar Maya is our esteemed Guru, Kathyayani Bhatta. Her musical foundation began at the age of five, dedicating a decade to Carnatic music under the guidance of Vidushi Ranganayakamma and Vidushi Vasanthamadhavi. She then shifted her focus, immersing herself for nine years in Hindustani classical music under Guru Smt. Pratima Athreya, mastering the discipline of the Gwalior Gharana. This authentic lineage, combined with her experience as a seasoned performer who has shared the stage with artists like Pandit Venkatesh Kumar, brings a rich depth to her teaching.`,

  `With over 15 years of experience, Guru Kathyayani brings a unique perspective: she is also an Electronics Engineering graduate and currently works as a Lead Software Engineer at Latlong, in addition to teaching the Hindustani Diploma course at The Indian Music Experience. Her core teaching philosophy remains simple: every student has a unique voice that needs to be patiently and lovingly nurtured. She is dedicated to building strong foundations, ensuring your lifelong appreciation for the art of music.`,
];

export function Landing() {
  const WHATSAPP_PHONE_NUMBER = "9606009998";

  return (
    <>
      <Layout>
        <div className="relative bg-[#f4e9d9] min-h-screen overflow-hidden py-20">
          {/* Subtle background animation (optional) */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `url('https://www.transparenttextures.com/patterns/dark-fish-skin.png')`,
            }}
          ></div>

          <div
            id="hero-section"
            className="relative z-10 w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-8"
          >
            {/* Text and Button Section */}
            <div className="lg:w-1/2 text-left space-y-6 mt-10 text-[#3c1a3f] animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-title-slide-in">
                <span className="block animate-pulse-slow">SWARA MAYA</span>
                <span className="text-3xl md:text-4xl font-light block mt-2 opacity-80">
                  Where music becomes magical
                </span>
              </h2>
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                At Swar Maya, we believe in nurturing individual talent. Dive
                deep into the rich traditions of Indian music with personalized,
                one-on-one training.
              </p>
              <div className="flex">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden px-8 py-3 text-lg font-bold rounded-full bg-[#d87078] text-white transition-transform duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="absolute inset-0 bg-[#c5a45e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">Contact Us</span>
                </a>
              </div>
            </div>

            {/* Hero Image/Visual Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center mt-16 lg:mt-0">
              <div className="relative w-[90%] md:w-[800px] h-[400px]">
                {/* Organic Shape Container */}
                <div
                  className="absolute inset-0 z-0 animate-blob-pulse"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%)",
                    background: "linear-gradient(45deg, #d87078, #c5a45e)",
                    opacity: 0.8,
                  }}
                ></div>

                <Image
                  src={HeroImg}
                  alt="An artist playing an instrument in a mystical setting"
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transform hover:rotate-1 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <section id="whySwarMaya" className="w-full py-28 bg-[#f4e9d9]">
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center my-16">
              <h2
                className={`text-6xl font-extrabold text-[#3c1a3f] ${LatoFont.variable} font-sans`}
              >
                Why choose{" "}
                <span className="text-[#d87078]">&nbsp;Swar Maya</span> ?
              </h2>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <GlareCard
                      className={`flex flex-col justify-center bg-gradient-to-br from-[#6a505f] via-[#3c1a3f] to-[#1a121b] p-8 shadow-xl border border-muted-plum`}
                      // glareColor="#c5a45e"
                    >
                      <div
                        className={`flex flex-col text-center justify-center items-center gap-4 ${MontserratFont.variable} font-sans`}
                      >
                        <p className="text-[#c5a45e] text-xl md:text-3xl font-bold leading-relaxed">
                          {benefit.title}
                        </p>
                        <p className="text-[#f4e9d9] text-lg md:text-base font-medium leading-relaxed opacity-90">
                          {benefit.description}
                        </p>
                      </div>
                    </GlareCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="guru-section" className="w-full py-28 bg-[#f4e9d9]">
            <div className="max-w-7xl mx-auto px-6">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`text-5xl md:text-6xl font-extrabold text-[#3c1a3f] text-center mb-16 ${LatoFont.variable} font-sans`}
              >
                Meet Our <span className="text-[#d87078]">Guru</span>
              </motion.h2>

              {/* Guru Content */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
                {/* Guru Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={guruImage}
                    alt="Guruji"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d87078] to-transparent opacity-50"></div>
                </motion.div>

                {/* Guru Bio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className={`lg:w-1/2 space-y-6 text-[#3c1a3f] ${MontserratFont.variable} font-sans text-xl`}
                >
                  {guruBio.map((paragraph, index) => (
                    <p key={index} className="text-2xl mt-8">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <section id="courses-snapshot" className="w-full py-28 bg-[#f4e9d9]">
            <div className="max-w-7xl mx-auto px-6">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-5xl md:text-6xl font-extrabold text-[#3c1a3f] text-center mb-16 ${LatoFont.variable} font-sans`}
              >
                Our <span className="text-[#d87078]">Courses</span>
              </motion.h2>

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.8,
                      ease: [0.17, 0.67, 0.83, 0.91],
                    }}
                    viewport={{ once: true }}
                    className="group relative flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-[#d87078] to-[#c5a45e] p-8 text-[#1a121b] shadow-2xl transition-transform duration-500 hover:-translate-y-4"
                  >
                    <div className="absolute inset-0 z-0 scale-125 bg-black opacity-20 transition-opacity duration-500 group-hover:opacity-0"></div>

                    <div className="relative z-10 w-full text-center">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                        <Image
                          src={course.image}
                          alt={course.title}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3
                        className={`text-3xl font-bold mb-2 ${MontserratFont.variable} font-sans`}
                      >
                        {course.title}
                      </h3>
                      <p className="text-lg font-medium opacity-90 mb-6">
                        {course.description}
                      </p>
                    </div>

                    {/* Call-to-Action */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.2 + 0.4,
                        duration: 0.5,
                        ease: "backOut",
                      }}
                      viewport={{ once: true }}
                      className="relative z-10 w-full"
                    >
                      <a
                        href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-[#3c1a3f] text-white rounded-full font-bold text-lg py-3 transition-colors duration-300 hover:bg-[#6a505f] transform group-hover:scale-105">
                          Contact Us
                        </Button>
                      </a>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
