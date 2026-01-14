import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'body', type: 'text', rows: 4 }),
    defineField({ name: 'publishDate', type: 'datetime' }),
  ],
});
