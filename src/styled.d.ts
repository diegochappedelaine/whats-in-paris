import "styled-components";

import { ThemeType } from "core/Theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}

export { ThemeType };
