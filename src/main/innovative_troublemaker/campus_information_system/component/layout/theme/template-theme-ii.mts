import * as MUI from "@mui/material";

declare module "@mui/material/styles" {
    interface Theme {
        mode?: Palette['mode'];
        templateTheme?: {
            colorPrimary?: string;
            colorSecondary?: string;
            colorBackground?: string;
        };
    }
    interface ThemeOptions {
        mode?: string;
        templateTheme?: {
            colorPrimary?: string;
            colorSecondary?: string;
            colorBackground?: string;
        };
    }

    interface Palette {
        disable?: Palette['text'];
    }

    interface PaletteOptions {
        disable?: PaletteOptions['text'];
    }

    interface TypographyVariants {
        innovativeTroublemakerH1: React.CSSProperties;
        innovativeTroublemakerH2: React.CSSProperties;
        innovativeTroublemakerWarning: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        innovativeTroublemakerH1?: React.CSSProperties;
        innovativeTroublemakerH2?: React.CSSProperties;
        innovativeTroublemakerWarning?: React.CSSProperties;
    }

    interface ButtonVariants {
        innovativeTroublemakerButton1: React.CSSProperties;
        innovativeTroublemakerButton2: React.CSSProperties;
    }

    interface ButtonVariantsOptions {
        innovativeTroublemakerButton1?: React.CSSProperties;
        innovativeTroublemakerButton2?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        innovativeTroublemakerH1: true;
        innovativeTroublemakerH2: true;
        innovativeTroublemakerWarning: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        innovativeTroublemakerButton1?: true;
        innovativeTroublemakerButton2?: true;
    }
}

export enum ColorTheme {
    DARK = "dark",
    LIGHT = "light",
}

const getColorScheme = (theme: ColorTheme) => {
    const isLight = theme === ColorTheme.LIGHT;

    return {
        primary: {
            main: isLight ? MUI.colors.blue[900] : MUI.colors.blue[100],
            light: isLight ? MUI.colors.blue[400] : MUI.colors.blue[900],
            dark: isLight ? MUI.colors.blue[900] : MUI.colors.blue[100],
            contrastText: MUI.colors.blue[100],
        },
        secondary: {
            main: isLight ? MUI.colors.yellow[900] : MUI.colors.yellow[500],
            light: isLight ? MUI.colors.yellow[500] : MUI.colors.yellow[100],
            dark: isLight ? MUI.colors.yellow[100] : MUI.colors.yellow[900],
            contrastText: MUI.colors.yellow[100],
        },
        text: {
            primary: isLight ? MUI.colors.blue[900] : MUI.colors.blue[100],
            secondary: isLight ? MUI.colors.yellow[900] : MUI.colors.yellow[100],
            disabled: MUI.colors.grey[500],
        },
        background: {
            default: isLight ? MUI.colors.blue[100] : MUI.colors.blue[900],
            paper: isLight ? MUI.colors.blue[100] : MUI.colors.blue[900],
            header: isLight ? MUI.colors.blue[100] : MUI.colors.blue[900],
        },
        disable: {
            primary: isLight ? MUI.colors.grey[300] : MUI.colors.grey[100],
            secondary: isLight ? MUI.colors.grey[800] : MUI.colors.grey[500],
        }
    };
}

const createThemeConfig = (colorTheme: ColorTheme): MUI.ThemeOptions => {
    const colors = getColorScheme(colorTheme);

    return {
        mode: colorTheme,
        templateTheme: {
            colorPrimary: colors.primary.main,
            colorSecondary: colors.secondary.main,
            colorBackground: colors.background.default,
        },
        palette: {
            mode: colorTheme,
            primary: colors.primary,
            secondary: colors.secondary,
            text: colors.text,
            background: colors.background,
            disable: colors.disable,
        },
        typography: {
            innovativeTroublemakerH1: {
                fontSize: '5rem',
            },
            innovativeTroublemakerH2: {
                fontSize: '4rem',
            },
            innovativeTroublemakerWarning: {
                fontSize: '1.2rem',
                backgroundColor: 'black',
                color: 'yellow',
            },
            h1: {
            },
            h4: {
            },
            body1: {
            },
            body2: {

            }
        },
        components: {
            MuiButton: {
                variants: [
                    {
                        props: { variant: 'innovativeTroublemakerButton1' },
                        style: {
                            textTransform: 'none',
                            fontWeight: 'bold',
                            letterSpacing: '0.08rem',
                            backgroundColor: colors.secondary.main,
                            color: MUI.colors.blue[900],
                            "&:disabled": {
                                color: colors.disable.primary,
                                backgroundColor: colors.disable.secondary,
                            },
                            '&:hover': {
                                backgroundColor: colors.secondary.dark,
                            },
                        },
                    },
                    {
                        props: { variant: 'innovativeTroublemakerButton2' },
                        style: {},
                    },
                ],
            }
        }
    };
}

export const LIGHT_THEME = MUI.createTheme(createThemeConfig(ColorTheme.LIGHT));
export const DARK_THEME = MUI.createTheme(createThemeConfig(ColorTheme.DARK));

const TOOLPAD_THEME = MUI.createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {
        light: LIGHT_THEME,
        dark: DARK_THEME,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 920,
            md: 920,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default TOOLPAD_THEME;
