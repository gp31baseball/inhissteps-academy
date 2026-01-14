import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'startDate', type: 'datetime' }),
    defineField({ name: 'endDate', type: 'datetime' }),
    defineField({
      name: 'audience',
      type: 'string',
      options: { list: ['MDO', 'Preschool', 'Elementary', 'All'] },
    }),
  ],
});
