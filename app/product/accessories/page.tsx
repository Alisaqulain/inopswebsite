"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase = [0.33, 1, 0.68, 1] as const;
const viewport = { once: true, amount: 0.2 };

const accessories = [
  {
    name: "Wireless Exit Button",
    model: "WS3X3",
    description:
      "InOps Touchless request-to-exit (RTE) switch or motion sensor exit switch, is a device used in access control systems to allow individuals to exit a secured area without physically touching a switch or button.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=85",
    imageAlt: "Wireless Exit Button - touchless request-to-exit switch",
  },
  {
    name: "Exit Push Button",
    model: "PB3X3",
    description: [
      "InOps' specially designed push button used on doors, gates or anywhere there is the access control system. Wide range of options such as push button size, color exists.",
      "This request to exit (REx) device allows you to open a locked door to exit without needing credentials.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=85",
    imageAlt: "Exit Push Button - request to exit device",
  },
];

const fpSensorAndRfCards = [
  {
    title: "FP Sensor",
    subtitle: "Fingerprint Sensor",
    description:
      "InOps' fingerprint sensors integrates to enhance security and provide a convenient and reliable method for allowing or denying entry to secure areas. Access control systems with fingerprint sensors are widely used in various environments, including offices, government facilities, healthcare facilities, data centers, and more.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85",
    imageAlt: "Fingerprint sensor device for access control",
  },
  {
    title: "RF Cards",
    subtitle: "Proximity & MIFARE",
    description:
      "This card supports ISO Format proximity technology at both 125KHz and 13.56MHz frequencies. It is lightweight at 9 grams and can be printed on both sides. Common applications include access control, time and attendance, employee ID cards, ticketing, visitor management, and more.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=85",
    imageAlt: "RF card with access control terminal",
  },
];

const electroMagneticLocks = [
  {
    model: "SL-600",
    title: "Single Leaf Electro Magnetic Lock",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85",
    imageAlt: "SL-600 Single Leaf Electro Magnetic Lock",
    specs: [
      "Operating Voltage : Power DC 12V",
      "Holding Force : 600 LBS",
      "Suitable For : Wooden door, Glass door, Metal door, Fireproof door. Etc",
    ],
  },
  {
    model: "DL-600",
    title: "Double Leaf Electro Magnetic Lock",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=85",
    imageAlt: "DL-600 Double Leaf Electro Magnetic Lock",
    specs: [
      "Operating Voltage : Power DC 12V-24V",
      "Holding Force : 600 LBS *2",
      "Suitable For : Wooden door, Glass door, Metal door, Fireproof door. Etc..",
    ],
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero – dark background with overlay */}
        <motion.section
          className="relative min-h-[320px] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(6,182,212,0.15),transparent)]" />
          </div>
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            >
              Accessories
            </motion.h1>
            <motion.nav
              className="mt-4 text-sm text-white/90"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: smoothEase, delay: 0.25 }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-blue-600 font-medium">Accessories</span>
            </motion.nav>
          </div>
        </motion.section>

        {/* Main content – section title + two products */}
        <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.h2
              className="text-2xl font-bold text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              Accessories
            </motion.h2>
            <div className="mt-2 h-0.5 w-16 rounded-full bg-blue-500" aria-hidden />
            <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
              {accessories.map((product, i) => (
                <motion.article
                  key={product.name}
                  className="flex flex-col rounded-xl border border-gray-600/80 bg-white p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{product.name}</h3>
                  <div className="mt-4 relative aspect-square max-w-sm rounded-xl overflow-hidden border border-gray-600/80 bg-gray-100">
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-600">{product.model}</p>
                  <div className="mt-3 space-y-2 text-gray-600 text-sm leading-relaxed italic">
                    {Array.isArray(product.description) ? (
                      product.description.map((para, j) => <p key={j}>{para}</p>)
                    ) : (
                      <p>{product.description}</p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FP Sensor & RF Cards */}
        <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
              {fpSensorAndRfCards.map((product, i) => (
                <motion.article
                  key={product.title}
                  className="flex flex-col rounded-xl border border-gray-600/80 bg-white p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">{product.title}</h3>
                  <div className="mt-4 relative aspect-[4/3] w-full max-w-md mx-auto rounded-xl overflow-hidden border border-gray-600/80 bg-gray-100">
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-blue-600">{product.subtitle}</p>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Electro-Magnetic Locks – SL-600 & DL-600 */}
        <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
              {electroMagneticLocks.map((product, i) => (
                <motion.article
                  key={product.model}
                  className="flex flex-col rounded-xl border border-gray-600/80 bg-white p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.1 }}
                >
                  <p className="text-lg font-bold text-blue-600">{product.model}</p>
                  <div className="mt-4 relative aspect-[4/3] w-full max-w-md mx-auto rounded-xl overflow-hidden border border-gray-600/80 bg-gray-100">
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="mt-4 text-center text-lg font-bold text-gray-900">{product.title}</h3>
                  <ul className="mt-4 space-y-2 text-gray-600 text-sm leading-relaxed list-disc list-inside">
                    {product.specs.map((spec, j) => (
                      <li key={j}>{spec}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
