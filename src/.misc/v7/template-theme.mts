import * as MUI from "@mui/material";

declare module "@mui/material/styles" {
    interface Theme {
        mode?: Palette['mode']
        templateTheme?: {
            colorPrimary?: string,
            colorSecondary?: string,
            colorBackground?: string,
        }
    }
    interface ThemeOptions {
        mode?: string,
        templateTheme?: {
            colorPrimary?: string,
            colorSecondary?: string,
            colorBackground?: string,
        }
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
        innovativeTroublemakerWarning: React.CSSProperties;
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
    DARK,
    LIGHT,
}

export const COLOR_THEME = (colorTheme: ColorTheme) => {
    const IS_LIGHT: boolean = (colorTheme !== ColorTheme.DARK);
    return {
        primary: {
            main:
                IS_LIGHT ? MUI.colors.blue[900] : MUI.colors.blue[100],
            light:
                IS_LIGHT ? MUI.colors.blue[400] : MUI.colors.blue[900],
            dark:
                IS_LIGHT ? MUI.colors.blue[900] : MUI.colors.blue[100],
            conntrastText:
                MUI.colors.blue[100],
        },
        secondary: {
            main:
                IS_LIGHT ? MUI.colors.yellow[900] : MUI.colors.yellow[500],
            light:
                IS_LIGHT ? MUI.colors.yellow[500] : MUI.colors.yellow[100],
            dark:
                IS_LIGHT ? MUI.colors.yellow[100] : MUI.colors.yellow[900],
            conntrastText:
                MUI.colors.yellow[100],
        },
        text: {
            primary:
                IS_LIGHT ? MUI.colors.blue[900] : MUI.colors.blue[100],
            secondary:
                IS_LIGHT ? MUI.colors.yellow[900] : MUI.colors.yellow[100],
            disabled: MUI.colors.grey[500]
        },
        background: {
            default:
                IS_LIGHT ? MUI.colors.blue[100] : MUI.colors.blue[900],
            paper:
                IS_LIGHT ? MUI.colors.blue[100] : MUI.colors.blue[900],
            header:
                IS_LIGHT ? MUI.colors.blue[100] : MUI.colors.blue[900],
        },
        disable: {
            primary:
                IS_LIGHT ? MUI.colors.grey[300] : MUI.colors.grey[100],
            secondary:
                IS_LIGHT ? MUI.colors.grey[800] : MUI.colors.grey[500],
        }
    };
}

export const LIGHT_THEME: MUI.Theme
    = MUI.createTheme(
        {
            mode: `light`,
            templateTheme: {
                colorPrimary: COLOR_THEME(ColorTheme.LIGHT).primary.main,
                colorSecondary: COLOR_THEME(ColorTheme.LIGHT).secondary.main,
                colorBackground: COLOR_THEME(ColorTheme.LIGHT).background.default,
            },
            palette: {
                mode: `light`,
                primary: COLOR_THEME(ColorTheme.LIGHT).primary,
                secondary: COLOR_THEME(ColorTheme.LIGHT).secondary,
                text: COLOR_THEME(ColorTheme.LIGHT).text,
                background: COLOR_THEME(ColorTheme.LIGHT).background,
                disable: COLOR_THEME(ColorTheme.LIGHT).disable,
            },
            typography: {
                // h1: {
                //     color: COLOR_THEME(ColorTheme.LIGHT).primary.main,
                // },
                innovativeTroublemakerH1: {
                    fontSize: `5rem`,
                },
                innovativeTroublemakerH2: {
                    fontSize: `4rem`,
                },
                innovativeTroublemakerWarning: {
                    fontSize: `1.2rem`,
                    backgroundColor: `black`,
                    color: `yellow`
                }
            },
            components: {
                MuiButton: {
                    variants: [
                        {
                            props: { variant: 'innovativeTroublemakerButton1' },
                            style: {
                                textTransform: `none`,
                                fontWeight: `bold`,
                                letterSpacing: `0.08rem`,
                                backgroundColor: COLOR_THEME(ColorTheme.LIGHT).secondary.main,
                                color: COLOR_THEME(ColorTheme.LIGHT).primary.main,
                                // fontWeight: `bolder`,
                                // padding: '10px 20px',
                                // borderRadius: '8px',
                                // cursor: "pointer",
                                "&:disabled": {
                                    color: COLOR_THEME(ColorTheme.LIGHT).disable.primary,
                                    backgroundColor: COLOR_THEME(ColorTheme.LIGHT).disable.secondary,
                                },
                                '&:hover': {
                                    backgroundColor: COLOR_THEME(ColorTheme.LIGHT).secondary.light,
                                },
                            },
                        },
                        {
                            props: { variant: 'innovativeTroublemakerButton2' },
                            style: {
                            },
                        },
                    ],
                }
            }
        },
    );

export const DARK_THEME: MUI.Theme
    = MUI.createTheme(
        {
            mode: `dark`,
            templateTheme: {
                colorPrimary: COLOR_THEME(ColorTheme.DARK).primary.main,
                colorSecondary: COLOR_THEME(ColorTheme.DARK).secondary.main,
                colorBackground: COLOR_THEME(ColorTheme.DARK).background.default,
            },
            palette: {
                mode: `dark`,
                primary: COLOR_THEME(ColorTheme.DARK).primary,
                secondary: COLOR_THEME(ColorTheme.DARK).secondary,
                text: COLOR_THEME(ColorTheme.DARK).text,
                background: COLOR_THEME(ColorTheme.DARK).background,
                disable: {
                    primary: "red"
                }
            },
            typography: {
                button: {
                    color: COLOR_THEME(ColorTheme.DARK).primary.main,
                },
                innovativeTroublemakerH1: {
                    fontSize: `5rem`,
                },
                innovativeTroublemakerH2: {
                    fontSize: `4rem`,
                },
                innovativeTroublemakerWarning: {
                    fontSize: `1.2rem`,
                    backgroundColor: `black`,
                    color: `yellow`
                }
            },
            components: {
                MuiButton: {
                    variants: [
                        {
                            props: { variant: 'innovativeTroublemakerButton1' },
                            style: {
                                textTransform: `none`,
                                fontWeight: `bold`,
                                letterSpacing: `0.08rem`,
                                backgroundColor: COLOR_THEME(ColorTheme.DARK).secondary.main,
                                color: COLOR_THEME(ColorTheme.DARK).primary.light,
                                // fontWeight: `bolder`,
                                // padding: '10px 20px',
                                // borderRadius: '8px',
                                // cursor: "pointer",
                                "&:disabled": {
                                    color: COLOR_THEME(ColorTheme.DARK).disable.primary,
                                    backgroundColor: COLOR_THEME(ColorTheme.DARK).disable.secondary,
                                },
                                '&:hover': {
                                    backgroundColor: COLOR_THEME(ColorTheme.DARK).secondary.dark,
                                },
                            },
                        },
                        {
                            props: { variant: 'innovativeTroublemakerButton2' },
                            style: {
                            },
                        },
                    ],
                }
            }
        },
    );


const TOOLPAD_THEME = MUI.createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {
        light: true,
        dark: true,
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
    palette: DARK_THEME.palette, 
    typography: DARK_THEME.typography, 
    components: DARK_THEME.components, 
});


export { TOOLPAD_THEME };