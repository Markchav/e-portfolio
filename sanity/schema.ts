import { type SchemaTypeDefinition } from 'sanity'

import experience from './schemas/experience'
import pageInfo from './schemas/pageInfo'
import project from './schemas/project'
import social from './schemas/social'
import skill from './schemas/skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience,project, social,skill],
}
