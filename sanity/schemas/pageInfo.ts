import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle1',
      title: 'Name',
      description:'First part of text("Hi my Name is ...")',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle2',
      title: 'Name a hobby',
      description:'Second part of text',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle3',
      title: 'Name something you enjoy MORE',
      description:'Third part of text("But loves to")',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options:{
        hotspot:true,
      }
    }),
    defineField({
      name: 'backgroundInformationFirstParagraph',
      title: 'Background Information First Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'backgroundInformationSecondParagraph',
      title: 'Background Information Second Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'backgroundInformationThirdParagraph',
      title: 'Background Information Third Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'profilePic',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspot:true,
      }
    }),
    defineField({
      name: 'intriguingContactBodyHeader',
      title: 'Intriguing Contact Body Header',
      description:'Say Something that will catch your attention',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type:'reference', to:{type:'social'}}],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type:'reference', to:{type:'skill'}}],
    }),
    
  ],
})