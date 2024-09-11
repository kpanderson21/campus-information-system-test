import * as React from "react";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material"


import CONTEXT_0x0002,
{
    CommonProp,
    CommonState
}
    from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0002.tsx";

//REM: Maybe no namespace needed...
export default class HeaderII
    extends React.Component<
        CommonProp,
        CommonState
    > {

    public constructor(
        props: globalThis.Readonly<CommonProp>
    ) {
        super(props);
        this.init();
    }

    private init(): void {
        this.state = {
            id: this.toString(),
            isMobileOpen: false,
            isDarkMode: false,
            apply: this.handleDrawerToggle
        };
    }

    public componentDidMount(): void {
        const { id, headerState, themeState }: CommonProp = this.context;
        // const { id:idx, isMobileOpen } = this.context.headerState!;

        const CACHE_IS_MOBILE_MENU_OPEN: string | null
            = globalThis.localStorage.getItem(
                id
            );
        if (CACHE_IS_MOBILE_MENU_OPEN !== null)
            this.setState(JSON.parse(CACHE_IS_MOBILE_MENU_OPEN));
    }

    public componentWillUnmount(): void {

    }

    public componentDidUpdate(
        prevProps: globalThis.Readonly<CommonProp>,
        prevState: globalThis.Readonly<CommonState>
    ): void {

        const { id, headerState, themeState }: CommonProp = this.context;
        if (prevState.isMobileOpen !== this.state.isMobileOpen) {
            globalThis.localStorage.setItem(
                id,
                JSON.stringify({
                    ...this.state,
                    isDarkMode: themeState?.isDarkMode
                })
            );
        }
    }


    public handleDrawerToggle = (): void => {

        const { id, headerState, themeState }: CommonProp = this.context;

        const CACHE_IS_DARK_MODE: string | null
            = globalThis.localStorage.getItem(
                this.state.id
            );
        if (CACHE_IS_DARK_MODE !== null)
            this.setState(JSON.parse(CACHE_IS_DARK_MODE));

        this.setState((prevState) => ({
            isDarkMode: themeState?.isDarkMode,
            isMobileOpen: !prevState.isMobileOpen
        }));
    };

    public render(): React.JSX.Element {

        const { headerState, themeState }: CommonProp = this.context;

        const drawerWidth = 260;
        const navItems = ['Home', 'About', 'Contact'];

        const { window } = this.props;

        const drawer = (
            <MUI.Box onClick={
                (e) => {
                    e.preventDefault();
                    this.state.apply?.();
                }
            } sx={{ textAlign: 'center' }}>
                <MUI.Typography variant="h6" sx={{ my: 2 }}>
                    CAMPUS
                </MUI.Typography>
                <MUI.Divider />
                <MUI.List>
                    {navItems.map((item) => (
                        <MUI.ListItem key={item} disablePadding>
                            <MUI.ListItemButton sx={{ textAlign: 'center' }}>
                                <MUI.ListItemText primary={item} />
                            </MUI.ListItemButton>
                        </MUI.ListItem>
                    ))}
                </MUI.List>
            </MUI.Box>
        );

        const container = window !== undefined ? () => window().document.body : undefined;

        return (<>
            {/* <CONTEXT_0x0002.Consumer>
            {(context)=>{

            }} */}
            <MUI.AppBar>
                {
                    import.meta.env.DEV &&
                    <MUI.Typography
                        bgcolor={
                            (theme) => { return theme.palette.common.black; }
                        }
                        sx={
                            (theme) => {
                                return {
                                    color: theme.palette.secondary.main
                                }
                            }
                        }>
                        We are in {import.meta.env.MODE} mode
                    </MUI.Typography>
                }
                <MUI.Toolbar>
                    <MUI.IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => {
                            this.handleDrawerToggle()
                        }}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MUIIcon.Menu />
                    </MUI.IconButton>
                    <MUI.Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        CAMPUS
                    </MUI.Typography>
                    <MUI.Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <MUI.Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </MUI.Button>
                        ))}
                    </MUI.Box>
                </MUI.Toolbar>
                <MUI.Typography variant="h3"
                    className={`select-none w-fit cursor-pointer`}
                    onClick={(e) => {
                        e.preventDefault();
                        // this.props.themeState?.apply()
                        // this.props.themeState?.apply()
                        themeState?.apply?.();
                    }}>
                    Header... {themeState?.isDarkMode ? "dark_mode" : "light_mode"}
                </MUI.Typography>
                <MUI.Stack direction={`row`} justifyContent={'center'} gap={`2rem`}>
                    <MUI.Typography>
                        {themeState?.isDarkMode ? "DARK_MODE" : "LIGHT_MODE"}
                    </MUI.Typography>
                    <MUI.Typography>
                        {this.state?.isMobileOpen ? "MMO" : "MMC"}
                    </MUI.Typography>
                </MUI.Stack>

            </MUI.AppBar>
            <nav>
                <MUI.Drawer
                    container={container}
                    variant="temporary"
                    open={this.state.isMobileOpen}
                    onClose={this.handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, //REM: Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </MUI.Drawer>
            </nav>

            {/* </CONTEXT_0x0002.Consumer> */}
        </>);
    }

    public toString(): string {
        return `${this.constructor.name}@[]`
    }

    public static readonly contextType?: typeof CONTEXT_0x0002 | undefined
        = CONTEXT_0x0002;
    // context!: React.ContextType<typeof CONTEXT_0x0002>;
    public declare readonly context: React.ContextType<typeof CONTEXT_0x0002>
}