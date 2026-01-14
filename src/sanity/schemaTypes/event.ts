import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
   defineField({
  name: 'startDate',
  title: 'Event Date',
  type: 'date',
  validation: Rule => Rule.required(),
}),

    defineField({
      name: 'audience',
      type: 'string',
      description: 'e.g. All Families, Prospective Families',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
  ],
});
