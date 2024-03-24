import 'styled-components';

import { BaseTheme } from './components/Theme/interface';

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme {}
}
