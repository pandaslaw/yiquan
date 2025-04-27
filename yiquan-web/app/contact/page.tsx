import { Metadata } from 'next';
import ContactForm from '../components/shared/ContactForm';
import InstagramFeed from '../components/shared/InstagramFeed';

export const metadata: Metadata = {
  title: 'Контакты | Ицюань',
  description: 'Свяжитесь с нами для получения дополнительной информации о практике Ицюань',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl mb-12">
        Контакты
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="prose prose-lg prose-gray mb-8">
            <h2>Как с нами связаться</h2>
            <p>
              Мы всегда рады ответить на ваши вопросы о практике Ицюань. Вы можете
              связаться с нами любым удобным способом или заполнить форму обратной
              связи.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Адрес</h3>
              <p className="mt-2 text-gray-600">
                г. Москва, ул. Примерная, д. 123
                <br />
                Метро: Спортивная
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
              <p className="mt-2 text-gray-600">
                <a href="tel:+79001234567" className="hover:text-gray-900">
                  +7 (900) 123-45-67
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">
                <a href="mailto:info@yiquan.ru" className="hover:text-gray-900">
                  info@yiquan.ru
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Социальные сети</h3>
              <div className="mt-2 flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <span className="sr-only">Telegram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.72 4.94-4.47c.217-.19-.047-.297-.336-.107l-6.104 3.85-2.63-.82c-.57-.18-.582-.57.12-.84l10.273-3.96c.474-.18.89.107.752.84z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Мы в Instagram</h3>
            <InstagramFeed />
          </div>
        </div>

        <div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Написать сообщение</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
