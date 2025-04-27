import { Metadata } from 'next';
import PhotoGallery from '../components/shared/PhotoGallery';
import Navigation from '../components/Navigation';
import Footer from '../components/shared/Footer';

export const metadata: Metadata = {
  title: 'Методы практики | Ицюань',
  description: 'Основные методы и принципы практики Ицюань',
};

// You'll need to add actual images to the public/images/practice directory
const practicePhotos = [
  {
    id: '1',
    src: '/images/practice/placeholder.jpg',
    alt: 'Практика Чжан Чжуан',
    width: 800,
    height: 600,
  },
  {
    id: '2',
    src: '/images/practice/placeholder.jpg',
    alt: 'Практика Ши Ли',
    width: 800,
    height: 600,
  },
  {
    id: '3',
    src: '/images/practice/placeholder.jpg',
    alt: 'Практика Моца Бу',
    width: 800,
    height: 600,
  },
  {
    id: '4',
    src: '/images/practice/placeholder.jpg',
    alt: 'Практика Фа Ли',
    width: 800,
    height: 600,
  },
];

export default function PracticePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl mb-8">
            Методы практики
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="prose prose-lg prose-gray">
              <h2>Основные методы тренировки</h2>
              
              <h3>1. Чжан Чжуан (站桩) - Стояние столбом</h3>
              <p>
                Базовая практика для развития структуры тела, осознанности и внутренней
                силы. Включает различные позиции, каждая из которых имеет свое назначение.
              </p>

              <h3>2. Ши Ли (试力) - Проверка силы</h3>
              <p>
                Медленные движения для развития координации, чувствительности и
                правильного приложения силы. Помогает понять принципы работы тела.
              </p>

              <h3>3. Моца Бу (摩擦步) - Скользящий шаг</h3>
              <p>
                Практика для развития устойчивости, баланса и способности перемещаться,
                сохраняя центрированность и силу.
              </p>

              <h3>4. Фа Ли (发力) - Выброс силы</h3>
              <p>
                Упражнения для развития взрывной силы и способности эффективно
                использовать всё тело как единое целое.
              </p>
            </div>

            <div className="space-y-8">
              <PhotoGallery photos={practicePhotos} columns={2} />
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Расписание занятий</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Начинающие</h4>
                    <p>Вторник, Четверг: 19:00 - 20:30</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Продвинутые</h4>
                    <p>Понедельник, Среда, Пятница: 18:30 - 20:30</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Индивидуальные занятия</h4>
                    <p>По договоренности</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
