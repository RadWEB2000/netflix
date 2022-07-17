import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
        red:string,
        black:string,
        nav:string,
        white:string,
        gray:string,
        brown:string,
        twitter:{
            regular:string,
            hover:string,
        }
    },
    fonts:{
        family:{
            regular:string,
            heading:string,
        }
    }
  }
}
