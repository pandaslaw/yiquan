import { Metadata } from 'next';
import ContactForm from '../components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'Начать обучение | Ицюань',
  description: 'Информация для начинающих практику Ицюань',
};

export default function StartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl mb-8">
          Начать обучение
        </h1>

        <div className="prose prose-lg prose-gray max-w-none mb-12">
          <h2>Что нужно для начала практики?</h2>
          <ul>
            <li>Удобная свободная одежда</li>
            <li>Спортивная обувь или мягкие тапочки</li>
            <li>Бутылка воды</li>
            <li>Желание учиться и развиваться</li>
          </ul>

          <h2>Первое занятие</h2>
          <p>
            На первом занятии вы познакомитесь с базовыми принципами Ицюань и
            начнете осваивать основные упражнения. Мы уделяем особое внимание
            каждому новому ученику, помогая правильно понять и освоить базовые
            элементы практики.
          </p>

          <h2>Стоимость занятий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Групповые занятия</h3>
              <ul>
                <li>Разовое занятие: 1500₽</li>
                <li>Абонемент на месяц: 5000₽</li>
                <li>Абонемент на 3 месяца: 13000₽</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Индивидуальные занятия</h3>
              <ul>
                <li>Разовое занятие: 3000₽</li>
                <li>Пакет 5 занятий: 13000₽</li>
                <li>Пакет 10 занятий: 25000₽</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Записаться на занятие</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
