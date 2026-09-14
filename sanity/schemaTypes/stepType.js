import {defineField, defineType} from 'sanity'

export const stepType = defineType({
  name: 'processStep',
  title: 'Process Card',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order Number (e.g. 1, 2, 3)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'step',
      title: 'Step Label (e.g. STEP 01)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title (e.g. The Pledge)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables List',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Deliverables shown at the bottom of each card (e.g. WIREFRAMES, UI DESIGN)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Step Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'step',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title,
        subtitle: subtitle,
      }
    },
  },
})
