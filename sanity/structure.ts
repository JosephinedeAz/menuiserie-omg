import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('OMG Menuiserie')
    .items([
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('projet').title('Projets'),
    ])
