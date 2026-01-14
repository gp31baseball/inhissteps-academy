import type { SchemaTypeDefinition } from 'sanity';

import announcement from './announcement';
import program from './program';
import hero from './hero';
import event from './event';

export const schemaTypes: SchemaTypeDefinition[] = [
  announcement,
  program,
  hero,
  event,
];
