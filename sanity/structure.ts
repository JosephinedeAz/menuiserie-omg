import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('OMG Menuiserie')
    .items([
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('realisation').title('Réalisations'),
      S.documentTypeListItem('testimonial').title('Témoignages'),
      S.listItem()
        .title('Page Réalisations')
        .id('pageRealisations')
        .child(
          S.document()
            .schemaType('pageRealisations')
            .documentId('pageRealisations')
        ),
    ])
