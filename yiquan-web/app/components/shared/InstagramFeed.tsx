'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface InstagramPost {
  id: string;
  mediaUrl: string;
  caption: string;
  permalink: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // TODO: Replace with your Instagram API endpoint
        // const response = await fetch('/api/instagram');
        // const data = await response.json();
        // setPosts(data);
        
        // Temporary mock data
        setPosts([
          {
            id: '1',
            mediaUrl: '/placeholder-1.jpg',
            caption: 'Утренняя практика Ицюань',
            permalink: '#',
            timestamp: new Date().toISOString(),
          },
          // Add more mock posts as needed
        ]);
      } catch (err) {
        setError('Failed to load Instagram feed');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center py-4">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <motion.a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden rounded-lg"
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={post.mediaUrl}
            alt={post.caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-200">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-200">
              <p className="text-sm line-clamp-2">{post.caption}</p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
