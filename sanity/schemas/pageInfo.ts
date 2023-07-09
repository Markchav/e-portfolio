import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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

// defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative Text',
    //     }
    //   ]
    // }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // }),