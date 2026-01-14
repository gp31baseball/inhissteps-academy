import { client } from '@/sanity/lib/client';

export async function getHero() {
  return client.fetch(`
    *[_type == "hero"][0]{
      headline,
      subheadline,
      image
    }
  `);
}
