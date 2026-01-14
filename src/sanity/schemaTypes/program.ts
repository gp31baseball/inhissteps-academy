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
    defineField({
  name: 'slug',
  type: 'slug',
  options: {
    source: 'name',
    maxLength: 96,
  },
  validation: Rule => Rule.required(),
}),

  ],
});
