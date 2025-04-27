'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/shared/Footer'


const features = [
  {
    name: 'Развитие силы',
    description: 'Уникальные методы развития внутренней силы и координации.',
  },
  {
    name: 'Здоровье',
    description: 'Укрепление здоровья через естественные движения и правильное дыхание.',
  },
  {
    name: 'Целостное развитие',
    description: 'Единство тела, разума и духа. Развитие осознанности, концентрации и внутренней силы.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        {/* Hero section */}
        <div className="relative px-6 pt-14 lg:px-8 overflow-hidden">
          <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
                Познайте искусство Ицюань
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Древнее китайское искусство развития тела и разума. Путь к здоровью, силе и внутренней гармонии через осознанную практику.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/start"
                  className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  Начать обучение
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Узнать больше <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Преимущества
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Что дает практика Ицюань
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
