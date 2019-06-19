declare module "colors" {
  declare type Color = {
    (text: string): string,

    strip: Color,
    stripColors: Color,

    black: Color,
    red: Color,
    green: Color,
    yellow: Color,
    blue: Color,
    magenta: Color,
    cyan: Color,
    white: Color,
    gray: Color,
    grey: Color,

    bgBlack: Color,
    bgRed: Color,
    bgGreen: Color,
    bgYellow: Color,
    bgBlue: Color,
    bgMagenta: Color,
    bgCyan: Color,
    bgWhite: Color,

    reset: Color,
    bold: Color,
    dim: Color,
    italic: Color,
    underline: Color,
    inverse: Color,
    hidden: Color,
    strikethrough: Color,

    rainbow: Color,
    zebra: Color,
    america: Color,
    trap: Color,
    random: Color,
    zalgo: Color,
  };

  declare module.exports: {
    enabled: boolean,
    themes: {},
    enable(): void,
    disable(): void,
    setTheme(theme: {}): void,

    strip: Color,
    stripColors: Color,

    black: Color,
    red: Color,
    green: Color,
    yellow: Color,
    blue: Color,
    magenta: Color,
    cyan: Color,
    white: Color,
    gray: Color,
    grey: Color,

    bgBlack: Color,
    bgRed: Color,
    bgGreen: Color,
    bgYellow: Color,
    bgBlue: Color,
    bgMagenta: Color,
    bgCyan: Color,
    bgWhite: Color,

    reset: Color,
    bold: Color,
    dim: Color,
    italic: Color,
    underline: Color,
    inverse: Color,
    hidden: Color,
    strikethrough: Color,

    rainbow: Color,
    zebra: Color,
    america: Color,
    trap: Color,
    random: Color,
    zalgo: Color,
  };
}

declare module "colors/safe" {
  declare module.exports: $Exports<"colors">;
}
