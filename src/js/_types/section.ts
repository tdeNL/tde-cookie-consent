import {
  TDECC_SECTION_EXPLANATION,
  TDECC_SECTION_MANAGE,
  TDECC_SECTION_START,
} from '../config/sections';

export type SectionType =
  | typeof TDECC_SECTION_EXPLANATION
  | typeof TDECC_SECTION_MANAGE
  | typeof TDECC_SECTION_START;
