import 'styled-components';

import { BaseTheme } from './providers/Theme/interface';

declare module 'styled-components' {
    export interface DefaultTheme extends BaseTheme {}
}
