

import * as React from "react";

import * as Toolpad from "@toolpad/core";

import * as MUIIcon from "@mui/icons-material";

import ViewCollegeOfEngineering from "../../main/innovative_troublemaker/campus_information_system/view/academic/department/college_of_engineering/index.tsx";

import ViewCollegeOfNursing from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_nursing/index.tsx";

import ViewOSA from "@innovative_troublemaker/campus_information_system/view/administrative/office_of_student_affairs/index.tsx";

import ViewChapel from "@innovative_troublemaker/campus_information_system/view/administrative/chapel/index.tsx";

import ViewSport from "@innovative_troublemaker/campus_information_system/view/administrative/sport/index.tsx";


import ViewLibrary from "@innovative_troublemaker/campus_information_system/view/academic/library/index.tsx";

type ComponentItemPrime = React.ComponentClass | React.FC;
type NavigationItemPrime = Toolpad.NavigationPageItem;

// interface ComponentItem {
//     readonly COMPONENT_ITEM_PRIME?: ComponentItemPrime;
// }

// interface NavigationItem {
//     navigationItemPrime: NavigationItemPrime;
// }

export interface RouteData {
    readonly ID: string;
    path: string;
    component: ComponentItemPrime;
    navigation: NavigationItemPrime;
}


export const ROUTES: { readonly [key: string]: RouteData } = Object.freeze({
    HOME: Object.freeze({
        ID: "HOME",
        path: "/",
        component: () => { return (<>Home sweet home.</>); },
        navigation: {
            segment: "home",
            title: "Home",
            icon: <MUIIcon.HomeSharp />
        }
    }),
    COLLEGE_OF_ENGINEERING: Object.freeze({
        ID: "COLLEGE_OF_ENGINEERING",
        path: "/department/college-of-engineering",
        component: ViewCollegeOfEngineering,
        navigation: {
            segment: "college-of-engineering",
            title: "College of Engineering",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_NURSING: Object.freeze({
        ID: "COLLEGE_OF_NURSING",
        path: "/department/college-of-nursing",
        component: ViewCollegeOfNursing,
        navigation: {
            segment: "college-of-nursing",
            title: "College of Nursing",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    OSA: Object.freeze({
        ID: "OSA",
        path: "/administrative/office-of-student-affairs",
        component: ViewOSA,
        navigation: {
            segment: "administrative/office-of-student-affairs",
            title: "Office of Student Affairs",
            icon: <MUIIcon.AdminPanelSettingsSharp />
        }
    }),
    CHAPEL: Object.freeze({
        ID: "CHAPEL",
        path: "/administrative/chapel",
        component: ViewChapel,
        navigation: {
            segment: "administrative/chapel",
            title: "Chapel",
            icon: <MUIIcon.ChurchSharp />
        }
    }),
    SPORT: Object.freeze({
        ID: "SPORT",
        path: "/administrative/sport",
        component: ViewSport,
        navigation: {
            segment: "administrative/sport",
            title: "Sport",
            icon: <MUIIcon.SportsBaseballSharp />
        }
    }),
    LIBRARY: Object.freeze({
        ID: "SPORT",
        path: "/academic/library",
        component: ViewLibrary,
        navigation: {
            segment: "academic/library",
            title: "Library",
            icon: <MUIIcon.LibraryBooksSharp />
        }
    })
});

export const ROUTES_GATE: Readonly<{[key: string]: RouteData}> = Object.freeze({
    [ROUTES.HOME.path]: ROUTES.HOME,
    [ROUTES.LIBRARY.path]: ROUTES.LIBRARY,
    [ROUTES.COLLEGE_OF_ENGINEERING.path]: ROUTES.COLLEGE_OF_ENGINEERING,
    [ROUTES.COLLEGE_OF_NURSING.path]: ROUTES.COLLEGE_OF_NURSING,
    [ROUTES.OSA.path]: ROUTES.OSA,
    [ROUTES.CHAPEL.path]: ROUTES.CHAPEL,
    [ROUTES.SPORT.path]: ROUTES.SPORT
});


export default ROUTES_GATE;
