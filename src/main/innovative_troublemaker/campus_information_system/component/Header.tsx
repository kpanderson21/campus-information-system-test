import * as React from "react";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material"

import { 
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme 
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mts";

import { 
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading 
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mts";

import { Context0x0001 } from "./layout/context/ContextProvider0x0001";

//REM: Maybe no namespace needed...
export default class Header extends React.Component<
    $model$theme.IThemeProp
    & $model$heading.IHeaderProp,
    & $model$heading.IHeaderState
> {

    public constructor(
        props: globalThis.Readonly<
            $model$theme.IThemeProp
            & $model$heading.IHeaderProp
        >
    ) {
        super(props);
        this.state = {
            id: this.toString(),
            isMobileOpen: false,
            apply: this.handleDrawerToggle
        };
    }

    public componentDidMount(): void {

    }

    public componentWillUnmount(): void {

    }

    public componentDidUpdate(
        prevProps: globalThis.Readonly<
            $model$theme.IThemeProp
            & $model$heading.IHeaderProp
        >,
        prevState: globalThis.Readonly<
            $model$heading.IHeaderState
        >
    ): void {
        if( prevState.isMobileOpen != this.state.isMobileOpen ) {
            if (this.theContext) {
                if (this.theContext.headerProp.headerState) {
                    console.log("<><><><><> header I")
                    this.theContext.headerProp.headerState.isMobileOpen = this.state.isMobileOpen;
                }
            }
        }
    }

    //REM: public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {

    //REM: }
    public handleDrawerToggle = (): void =>  {
        this.setState((prevState) => ({
            isMobileOpen: !prevState.isMobileOpen
        }));
    };

    public render(): React.JSX.Element {
        const drawerWidth = 260;
        const navItems = ['Home', 'About', 'Contact'];

        const { window } = this.props;

        const drawer = (
            <MUI.Box onClick={
                (e) => {
                    e.preventDefault();
                    this.state.apply();
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

        return (
            <Context0x0001.Consumer>
                {(context) => {

                    if (!context) return <div>No context available</div>;                   
                    this.theContext = context;

                    return (<>
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
                                onClick={()=>{
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
                                context.themeProp.themeState?.apply()
                            }}>
                            Header... {context.themeProp.themeState?.isDarkMode ? "dark_mode" : "light_mode"}
                        </MUI.Typography>
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
                    </>);
                }}
            </Context0x0001.Consumer>
        );
    }

    public toString(): string {
        return `${this.constructor.name}@[]`
    }


    private theContext?: React.ContextType<typeof Context0x0001>;
}