// Category Schema

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Category Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule: any) => Rule.required(),
    },
    // not really needed
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    },
    // This is the description
    {
      name: 'subtitle',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
