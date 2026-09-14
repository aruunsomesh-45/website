import { defineField, defineType } from 'sanity'
import { ColorInput } from '../components/ColorInput'

export const projectType = defineType({
  name: 'project',
  title: 'Project / Work',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Project Index (e.g., 01, 02)',
      type: 'string',
      description: 'Used for the large index display like (01).',
      validation: (Rule) => Rule.required(),
      initialValue: '01',
    }),
    defineField({
      name: 'clientTag',
      title: 'Client / Brand Tag (e.g., NBNZIA)',
      type: 'string',
      description: 'The prominent tag displayed above the project title.',
      validation: (Rule) => Rule.required(),
      initialValue: 'NBNZIA',
    }),
    defineField({
      name: 'title',
      title: 'Project Title (e.g., CTO BEES)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'CTO BEES',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Summary paragraph explaining the project and its value proposition.',
      validation: (Rule) => Rule.required(),
      initialValue:
        'A boutique consulting firm uniting strategic foresight with technical depth — empowering businesses to transform, scale, and deliver exceptional customer experiences through the power of AI and a premium CTO-to-CMO partnership.',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Pick or enter the background color for this project section.',
      initialValue: '#ffcd71',
      components: {
        input: ColorInput,
      },
    }),
    defineField({
      name: 'accentColor',
      title: 'Tag & Button Accent Color',
      type: 'string',
      description: 'Color used for the client tag and button (default: #123d8c).',
      initialValue: '#123d8c',
      components: {
        input: ColorInput,
      },
    }),
    defineField({
      name: 'image',
      title: 'Project Showcase / Mockup Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'The desktop showcase mockup displayed on the right side.',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL / Live Link',
      type: 'url',
      description: 'Optional external or internal link to the live project or detailed case study.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientTag',
      id: 'id',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle, id, media } = selection
      return {
        title: title ? `(${id || '01'}) ${title}` : 'Untitled Project',
        subtitle: subtitle || 'Project',
        media: media,
      }
    },
  },
})
