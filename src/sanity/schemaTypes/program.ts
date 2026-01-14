import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Program Name',
      type: 'string',
      validation: Rule => Rule.required(),
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

    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'body',
      title: 'Program Details',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full description shown on the program page',
    }),

    defineField({
      name: 'image',
      title: 'Program Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
});
