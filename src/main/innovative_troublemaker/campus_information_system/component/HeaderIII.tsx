

import * as React from "react";
import * as MUI from "@mui/material";
import * as MUIIcon from "@mui/icons-material";
import * as ReactRouterDom from "react-router-dom";
// import * as MUIToolpad from "@mui/toolpad-core";

import * as Toolpad from "@toolpad/core";

const NAVIGATION: Toolpad.Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <MUIIcon.Dashboard />,
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <MUIIcon.ShoppingCart />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Analytics',
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <MUIIcon.BarChart />,
        children: [
            {
                segment: 'sales',
                title: 'Sales',
                icon: <MUIIcon.Description />,
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <MUIIcon.Description />,
            },
        ],
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <MUIIcon.Layers />,
    },
];

import {
    $innovative_troublemaker$campus_information_system$model
        as $model
} from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts";

import CONTEXT_0x0003, { IStateContextType }
    from "@innovative_troublemaker/campus_information_system/component/layout/context/Context0x0003.tsx";


export default class HeaderIII
    extends React.Component<
        $model.ICommonProp,
        $model.ICommonState
    > {

    public constructor(
        props: globalThis.Readonly<$model.ICommonProp>
    ) {
        super(props);
        this.state = {
            id: this.toString(), //REM: [TODO, TEMP]
            isDarkMode: this.props.themeState?.isDarkMode ?? false,
            isMobileOpen: this.props.headerState?.isMobileOpen ?? false,
            pathName: '/',
        }
    }

    public componentDidMount(): void {
        // const { dispatch } = this.context;
        // dispatch({
        //     id: this.state.id,
        //     isDarkMode: this.state.isDarkMode
        // });
    }

    navigate = (path: string | URL): void => {
        this.setState({ pathName: String(path) });
    };

    getRouter = (): Toolpad.Router => {
        return {
            pathname: this.state.pathName ?? "/",
            searchParams: new URLSearchParams(),
            navigate: this.navigate,
        };
    };

    public componentDidUpdate(
        prevProp: globalThis.Readonly<$model.ICommonProp>,
        prevState: globalThis.Readonly<$model.ICommonState>
    ): void {
        if (prevState.isDarkMode !== this.state.isDarkMode) {

            // const { state, dispatch }: IStateContextType = this.context!;
            // dispatch({
            //     id: state.id,
            //     isDarkMode: this.state.isDarkMode
            // });
        }
    }

    public toString(): string {
        return `${this.constructor.name}@[]`
    }

    public toggleDarkMode(): void {
        this.setState(
            (prev) => ({
                isDarkMode: !prev.isDarkMode,
            })
        );
    }

    public render(): React.ReactElement<React.JSX.Element> {

        const { state }: IStateContextType = this.context!;

        const drawerWidth = 260;
        const navItems = ['Home', 'About', 'Contact'];

        const tempNavItems = [
            {
                path: "/",
                name: "Home",
            },
            {
                path: "/department/college-of-nursing",
                name: "College of Nursing",
            },
            {
                path: "/department/college-of-Engineering",
                name: "College of Engineering",
            }
        ]

        // const { window } = this.props;

        const drawer = (
            <MUI.Box onClick={
                (e) => {
                    e.preventDefault();
                    this.context?.dispatch({
                        id: this.context.state.id,
                        isMobileOpen: !this.context.state.isMobileOpen
                    })
                }
            } sx={{ textAlign: 'center' }}>
                <MUI.Button component={ReactRouterDom.NavLink} to={tempNavItems[0].path} variant="innovativeTroublemakerButton1" sx={{ my: 2 }}>
                    {this.context?.state.id}
                </MUI.Button>
                <MUI.Divider />
                <MUI.List>
                    {tempNavItems.slice(1).map((item) => (
                        <MUI.ListItem key={item.name} disablePadding>
                            <MUI.ListItemButton component={ReactRouterDom.NavLink} to={item.path} sx={{ textAlign: 'center' }}>
                                <MUI.ListItemText primary={item.name} />
                            </MUI.ListItemButton>
                        </MUI.ListItem>
                    ))}
                </MUI.List>
            </MUI.Box>
        );

        const DRAWER_II = (
            <>
                <Toolpad.AppProvider
                    branding={{
                        // logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
                        logo: ``,
                        title: 'CAMPUS',
                    }}
                    navigation={NAVIGATION}
                    router={this.getRouter()}>
                    <Toolpad.DashboardLayout>
                        <MUI.Typography>
                            Hi there....
                        </MUI.Typography>
                    </Toolpad.DashboardLayout>
                </Toolpad.AppProvider>
            </>
        )

        //REM: for IFRAME
        // const container = window !== undefined ? () => window().document.body : undefined;


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
                        onClick={() => {
                            this.context?.dispatch({
                                id: this.context.state.id,
                                isMobileOpen: !this.context.state.isMobileOpen
                            });
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
                        this.context?.dispatch({
                            id: this.context.state.id,
                            isDarkMode: !this.context.state.isDarkMode
                        });
                    }}>
                    Header... {this.context?.state?.isDarkMode ? "dark_mode" : "light_mode"}
                </MUI.Typography>
                <MUI.Stack direction={`row`} justifyContent={'center'} gap={`2rem`}>
                    <MUI.Typography>
                        {this.context?.state?.isDarkMode ? "DARK_MODE" : "LIGHT_MODE"}
                    </MUI.Typography>
                    <MUI.Typography>
                        {this.context?.state?.isMobileOpen ? "MMO" : "MMC"}
                    </MUI.Typography>
                </MUI.Stack>

            </MUI.AppBar>
            <nav>
                <MUI.Drawer
                    // container={container} //REM: for IFRAME
                    variant="temporary"
                    open={this.context?.state.isMobileOpen}
                    onClose={() => {
                        this.context?.dispatch({
                            id: this.context.state.id,
                            isMobileOpen: !this.context.state.isMobileOpen
                        })
                    }}
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
    }

    public static readonly contextType?: typeof CONTEXT_0x0003 = CONTEXT_0x0003;
    // context!: React.ContextType<typeof CONTEXT_0x0003>
    public declare readonly context: React.ContextType<typeof CONTEXT_0x0003>;
}