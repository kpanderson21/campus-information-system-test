import React from 'react';
// import ViewHome from './components/ViewHome';
// import ViewLibrary from './components/ViewLibrary';
// import ViewCollegeOfNursing from './components/ViewCollegeOfNursing';
// import ViewEvent from './components/ViewEvent';
// import ViewNews from './components/ViewNews';
// Import other components as needed

class RouteComplexData {
    private constructor(
        public readonly TITLE: string,
        public readonly SEGMENT: string,
        public readonly PATH: string,
        public readonly DESCRIPTION: string,
        public readonly COMPONENT: React.FC,
        public readonly CHILDREN?: RouteComplexData[]
    ) { }

    public static readonly HOME = new RouteComplexData(
        'Home',
        'home',
        '/',
        'Home page',
        () => <>ViewHome</>
    );
    public static readonly LIBRARY = new RouteComplexData(
        'Library',
        'library',
        '/library',
        'Library page',
        () => <>ViewLibrary</>
    );
    public static readonly COLLEGE_OF_NURSING = new RouteComplexData(
        'College of Nursing',
        'college-of-nursing',
        '/department/college-of-nursing',
        'College of Nursing page',
        () => <>ViewCollegeOfNursing</>
    );
    public static readonly OFFICE_OF_STUDENT_AFFAIRS = new RouteComplexData(
        'Office of Student Affairs',
        'office-of-student-affairs',
        '/office-of-student-affairs',
        'Office of Student Affairs',
        () => <div>Office of Student Affairs</div>,
        [
            new RouteComplexData('News', 'news', '/office-of-student-affairs/news', 'OSA News', ()=><>ViewNews</>),
            new RouteComplexData('Event', 'event', '/office-of-student-affairs/event', 'OSA Event', ()=><>ViewEvent</>)
        ]
    );
    public static readonly INTEGRATIONS = new RouteComplexData(
        'Integrations',
        'integrations',
        '/integrations',
        'Integrations',
        () => <div>Integrations</div>
    );

    // Get route by segment
    public static getRouteBySegment(segment: string): RouteComplexData | undefined {
        return Object.values(RouteComplexData).find(route => route.SEGMENT === segment);
    }

    // Get route by path
    public static getRouteByPath(path: string): RouteComplexData | undefined {
        return Object.values(RouteComplexData).find(route => route.PATH === path);
    }

    public getRootRoute(): string | undefined {
        return this.PATH.split('/')[0];
    }
}

// Example usage
const routeByPath = RouteComplexData.getRouteByPath('/office-of-student-affairs/news');
console.log(routeByPath?.TITLE); // Outputs: News
console.log(RouteComplexData.getRouteByPath('/unknown-path')); // Outputs: undefined




import * as Toolpad from "@toolpad/core";

type ComponentItemPrime = React.ComponentClass | React.FC;
type NavigationItemPrime = Toolpad.NavigationPageItem;

interface ComponentItem {
    readonly ID: string;
    readonly COMPONENT_ITEM_PRIME?: ComponentItemPrime;
}

interface NavigationItem {
    readonly ID: string;
    navigationItemPrime: NavigationItemPrime;
}

class RouteZ {
    // private size: Number;
    public readonly NAVIGATIONS: NavigationItem[];
    public readonly COMPONENTS: ComponentItem[];

    protected constructor() {
        this.NAVIGATIONS = [];
        this.COMPONENTS = [];
    }

    public add(
        navigation: NavigationItemPrime,
        component?: ComponentItemPrime
    ): boolean {
        const GEN_ID = navigation.segment ?? navigation.title ?? "RouteZ";

        if (this.search(GEN_ID)) return false;

        (this.NAVIGATIONS as NavigationItem[]) = [
            ...this.NAVIGATIONS,
            { ID: GEN_ID, navigationItemPrime: navigation }
        ];
        (this.COMPONENTS as ComponentItem[]) = [
            ...this.COMPONENTS,
            { ID: GEN_ID, COMPONENT_ITEM_PRIME: component }
        ];

        return true;
    }
    /**
     * 
     * @param id ID or Segment
     * @returns boolean
     */
    public remove(
        id: string
    ): NavigationItem | undefined {
        // (this.NAVIGATIONS as NavigationItem[]) 
        //     = this.NAVIGATIONS.filter(item => {
        //         return item.ID === id 
        //             || item.navigationItemPrime.segment !== id;
        //     });

        const INDEX = this.NAVIGATIONS
            .findIndex(item => 
                item.ID === id || item.navigationItemPrime.segment === id
            );

        if (INDEX !== -1)
            return this.NAVIGATIONS.splice(INDEX, 1)[0];

        return undefined;
    }

    /**
     * 
     * @param id ID or Segment
     * @returns NavigationItem | undefined
     */
    public search(
        id: string
    ): NavigationItem | undefined {
        return this.NAVIGATIONS.find(item => {
            return item.ID === id
                || item.navigationItemPrime.segment === id;
        });
    }

    // public hashCode(): number {
    //     return -1;
    // }

    // public toString(): string {
    //     return ``
    // }
}