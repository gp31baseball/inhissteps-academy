import { client } from '@/sanity/lib/client';

export async function getEvents() {
  return client.fetch(`
    *[_type == "event"]
      | order(startDate asc)[0...5] {
        _id,
        title,
        startDate,
        audience
      }
  `);
}
