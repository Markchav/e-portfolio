import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description:'Title of the skill',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot:true,
      }
    }),
  
  ],
})

    // defineField({
    //   name:"technologies",
    //   title:"Technologies",
    //   type:"array",
    //   of:[{type:"reference", to:{type:"skill"}}]
    // }),