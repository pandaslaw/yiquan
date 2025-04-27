'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Ицюань</h3>
            <p className="text-gray-600 text-sm">
              Искусство развития тела и разума через осознанную практику
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  История
                </Link>
              </li>
              <li>
                <Link href="/practice" className="text-gray-600 hover:text-gray-900">
                  Практика
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Обучение</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/start" className="text-gray-600 hover:text-gray-900">
                  Начать обучение
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Москва, ул. Примерная, д. 123</li>
              <li>
                <a href="tel:+79001234567" className="hover:text-gray-900">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@yiquan.ru" className="hover:text-gray-900">
                  info@yiquan.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Ицюань. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}