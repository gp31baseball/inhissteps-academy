import { client } from '@/sanity/lib/client';

export async function getAnnouncements() {
  return client.fetch(`
    *[_type == "announcement"]
      | order(_createdAt desc)[0...5] {
        _id,
        title,
        body
      }
  `);
}
