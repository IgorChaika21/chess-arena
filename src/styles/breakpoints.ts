const BREAKPOINTS = {
  sm: '576px',
  lg: '992px',
  xl: '1280px',
} as const;

// 2. Создать styled-component для медиа-запросов (DRY principle)
export const media = {
  sm: `@media (max-width: ${BREAKPOINTS.sm})`,
  lg: `@media (max-width: ${BREAKPOINTS.lg})`,
  xl: `@media (max-width: ${BREAKPOINTS.xl})`,
};
