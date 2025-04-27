import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Блог | Ицюань',
  description: 'Статьи и материалы о практике Ицюань',
};

// TODO: Replace with actual blog data from a CMS or API
const articles = [
  {
    id: '1',
    title: 'Основы практики Чжан Чжуан',
    excerpt: 'Подробное руководство по правильному выполнению стояния столбом...',
    date: '2025-04-20',
    readTime: '8 мин',
    slug: 'basics-of-zhan-zhuang',
  },
  {
    id: '2',
    title: 'Развитие внутренней силы в Ицюань',
    excerpt: 'Как правильно развивать и использовать внутреннюю силу...',
    date: '2025-04-15',
    readTime: '12 мин',
    slug: 'developing-internal-force',
  },
  // Add more articles
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl mb-12">
          Блог
        </h1>

        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="relative">
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
                  <Link href={`/blog/${article.slug}`} className="hover:text-gray-600">
                    {article.title}
                  </Link>
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('ru-RU', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span className="mx-2">·</span>
                  <span>{article.readTime}</span>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Читать далее
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Подписаться на обновления</h2>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 min-w-0 rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
