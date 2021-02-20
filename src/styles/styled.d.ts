import 'styled-components';
import type { Theme } from './defaultTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
