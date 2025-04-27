'use client';

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Navigation = dynamic(() => import('./Navigation'), {
  ssr: false
})

const features = [
  {
    name: 'Доступность практики',
    description: 'Не требует специального оборудования или места. Практикуйте где угодно, развивайтесь в своем темпе.',
  },
  {
    name: 'Здоровье и долголетие',
    description: 'Научно доказанное влияние на здоровье, снижение воспаления и улучшение общего самочувствия.',
  },
  {
    name: 'Целостное развитие',
    description: 'Единство тела, разума и духа. Развитие осознанности, концентрации и внутренней силы.',
  },
]

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="relative">
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
                  className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700 transition-colors"
                >
                  Начать обучение
                </Link>
                <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">
                  Узнать больше <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features section */}
        <div className="py-24 sm:py-32 bg-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-medium text-gray-600">Преимущества практики</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                Почему Ицюань?
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
                    <dt className="text-base font-medium text-primary">
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-primary/80">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
