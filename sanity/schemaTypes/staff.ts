import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'staff',
  title: 'Staff Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'bio', type: 'text' }),
    defineField({ name: 'photo', type: 'image', options: { hotspot: true } }),
  ],
});
