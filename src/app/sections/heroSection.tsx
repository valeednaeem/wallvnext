"use client";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    return (
      <div>
        <div className="flex flex-col col-start-2 items-center justify-center text-center p-4 w-full dark:bg-gray-900">
            <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
                <TypeAnimation
                    sequence={[
                        "We create amazing web experiences.",
                        1000,
                        "Our team is dedicated to excellence.",
                        1000,
                        "Join us and be part of something great!",
                        1000
                    ]}
                    cursor={true}
                    speed={50}
                    className="text-lg text-gray-600 dark:text-gray-400"
                    repeat={Infinity}
                />
            </p>
            <div className="mt-8">
                <a href="/about" className="btn btn-primary btn-lg mr-4">Learn More</a>
                <a href="/contact" className="btn btn-secondary btn-lg">Contact Us</a>
            </div>
        </div>

            <div className="flex flex-col col-start-2 items-center justify-center text-center p-4 w-full dark:bg-gray-900">
                <h2 className="text-2xl font-bold">Our Services</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    We offer a wide range of services to meet your needs, including web development, design, and digital marketing.
                </p>
                <div className="mt-8">
                    <a href="/services" className="btn btn-primary btn-lg mr-4">View Services</a>
                    <a href="/contact" className="btn btn-secondary btn-lg">Get in Touch</a>
                </div>
            </div>

      </div>
    )
}
