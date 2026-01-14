import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('hero').title('Hero'),
      S.divider(),
      S.documentTypeListItem('announcement').title('Announcements'),
      S.documentTypeListItem('event').title('Events'),
      S.divider(),
      S.documentTypeListItem('program').title('Programs'),
    ]);
