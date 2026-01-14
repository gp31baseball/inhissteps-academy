import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Program Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
