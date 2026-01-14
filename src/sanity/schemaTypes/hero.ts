import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
  ],
});
