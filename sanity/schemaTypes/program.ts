import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'ageRange', type: 'string' }),
    defineField({ name: 'overview', type: 'text' }),
    defineField({ name: 'faithIntegration', type: 'text' }),
    defineField({ name: 'highlights', type: 'array', of: [{ type: 'string' }] }),
  ],
});
