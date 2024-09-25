

import * as React from "react";

import * as MUI from "@mui/material";

import * as Toolpad from "@toolpad/core";

import * as MUIIcon from "@mui/icons-material";

import ViewCollegeOfEngineering from "../../main/innovative_troublemaker/campus_information_system/view/academic/department/college_of_engineering/index.tsx";

import ViewCollegeOfNursing from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_nursing/index.tsx";


import ViewOSA from "@innovative_troublemaker/campus_information_system/view/administrative/office_of_student_affairs/index.tsx";

import ViewChapel from "@innovative_troublemaker/campus_information_system/view/administrative/chapel/index.tsx";

import ViewSport from "@innovative_troublemaker/campus_information_system/view/administrative/sport/index.tsx";

import ViewLibrary from "@innovative_troublemaker/campus_information_system/view/academic/library/index.tsx";

import ViewAdmission from "@innovative_troublemaker/campus_information_system/view/administrative/admission/index.tsx";

import ViewScholarship from "@innovative_troublemaker/campus_information_system/view/academic/scholarship/index.tsx";

import ViewWelcome from "@innovative_troublemaker/campus_information_system/view/index.tsx";

//REM: [TODO, TEMP, ANY_KEYWORD]
type ComponentItemPrime = React.ComponentClass<any> | React.FC<any>;

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
    component?: ComponentItemPrime;
    navigation: NavigationItemPrime;
}


export const ROUTES: { readonly [key: string]: RouteData } = Object.freeze({
    HOME: Object.freeze({
        ID: "HOME",
        path: "/",
        component: ViewWelcome,
        navigation: {
            segment: "home",
            title: "Home",
            icon: <MUIIcon.HomeSharp />
        }
    }),
    COLLEGE_OF_ENGINEERING: Object.freeze({
        ID: "COLLEGE_OF_ENGINEERING",
        path: "/academic/department/college-of-engineering",
        component: ViewCollegeOfEngineering,
        navigation: {
            segment: "department/college-of-engineering",
            title: "College of Engineering",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_COMPUTER_ENGINEERING: Object.freeze({
        ID: "COLLEGE_OF_COMPUTER_ENGINEERING",
        path: "/academic/department/college-of-engineering/computer-engineering",
        // component: ViewCollegeOfComputerEngineering,
        component: () => <>
            <MUI.Typography className={`w-full`} variant={`innovativeTroublemakerWarning`}>[Warning!] bugs found</MUI.Typography>
            <MUI.Typography variant={`innovativeTroublemakerH1`}>Computer Engineering!</MUI.Typography>
        </>,
        navigation: {
            segment: "department/college-of-engineering/computer-engineering",
            title: "College of Computer Engineering",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_GEODETIC_ENGINEERING: Object.freeze({
        ID: "COLLEGE_OF_GEODETIC_ENGINEERING",
        path: "/academic/department/college-of-engineering/geodetic-engineering",
        // component: ViewCollegeOfGeodeticEngineering,
        component: () => <>
            <MUI.Typography className={`w-full`} variant={`innovativeTroublemakerWarning`}>[Warning!] bugs found</MUI.Typography>
            <MUI.Typography variant={`innovativeTroublemakerH1`}>Geodetic Engineering!</MUI.Typography></>,
        navigation: {
            segment: "department/college-of-engineering/geodetic-engineering",
            title: "College of Geodetic Engineering",
            icon: <MUIIcon.SchoolSharp />
        }
    }),
    COLLEGE_OF_NURSING: Object.freeze({
        ID: "COLLEGE_OF_NURSING",
        path: "/academic/department/college-of-nursing",
        component: ViewCollegeOfNursing,
        navigation: {
            segment: "department/college-of-nursing",
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
        ID: "LIBRARY",
        path: "/academic/library",
        component: ViewLibrary,
        navigation: {
            segment: "academic/library",
            title: "Library",
            icon: <MUIIcon.LibraryBooksSharp />
        }
    }),
    ADMISSION: Object.freeze({
        ID: "ADMISSION",
        path: "/adminstrative/Admission",
        component: ViewAdmission,
        navigation: {
            segment: "adminstrative/Admission",
            title: "Admission",
            icon: <MUIIcon.JoinFullSharp />
        }
    }),
    SCHOLARSHIP: Object.freeze({
        ID: "SCHOLARSHIP",
        path: "/academic/Scholarship",
        component: ViewScholarship,
        navigation: {
            segment: "academic/Scholarship",
            title: "Scholarship",
            icon: <MUIIcon.WorkspacePremium />
        }
    })
});


// ROUTES.COLLEGE_OF_ENGINEERING.navigation.children = [
//     ROUTES.COLLEGE_OF_COMPUTER_ENGINEERING.navigation,
// ]

// export const ROUTES_GATE: Readonly<{[key: string]: RouteData}> = Object.freeze({
//     [ROUTES.HOME.path]: ROUTES.HOME,
//     [ROUTES.LIBRARY.path]: ROUTES.LIBRARY,
//     [ROUTES.COLLEGE_OF_ENGINEERING.path]: ROUTES.COLLEGE_OF_ENGINEERING,
//     [ROUTES.COLLEGE_OF_NURSING.path]: ROUTES.COLLEGE_OF_NURSING,
//     [ROUTES.OSA.path]: ROUTES.OSA,
//     [ROUTES.CHAPEL.path]: ROUTES.CHAPEL,
//     [ROUTES.SPORT.path]: ROUTES.SPORT
// });


// export const ROUTES_GATE: Readonly<{[key: string]: RouteData}> = Object.freeze(
//     Object.values(ROUTES).reduce((acc, route) => {
//         acc[route.path] = route;
//         return acc;
//     }, {} as {[key: string]: RouteData})
// );


export const ROUTES_GATE: Readonly<{ [key: string]: RouteData }> = (() => {
    const gate: { [key: string]: RouteData } = {};

    Object.values(ROUTES).forEach(route => {
        gate[route.path] = route;
    });

    return Object.freeze(gate);
})();

export default ROUTES_GATE;
