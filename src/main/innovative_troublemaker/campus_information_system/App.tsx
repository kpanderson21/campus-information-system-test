
import * as React from "react";
import * as ReactRouterDom from "react-router-dom";

import Layout0x0003 from "@innovative_troublemaker/campus_information_system/component/layout/Layout0x0003.tsx";

import { 
    $innovative_troublemaker$campus_information_system$model 
    as $model
} from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts";

import CollegeOfNursing from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_nursing/index.tsx";

import ViewWelcome from "@innovative_troublemaker/campus_information_system/view/index.tsx";
import ViewWelcomeCollegeOfEngineering from "./view/academic/department/college_of_engineering";
import DashboardLayoutBasic from "./component/layout/LayoutSimpleDashBoard";

//REM: [TODO]
declare global {
    interface String {
        hashCode(): number;
    }
}

//REM: [TODO]
String.prototype.hashCode = function() {
    let hash = 0;
    if (this.length == 0) return hash;
    for (let i = 0; i < this.length; i++) {
        const char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; 
    }
    return hash;
}

export namespace $innovative_troublemaker$campus_information_system {
    export class App extends React.Component<
        $model.ICommonProp,
        $model.ICommonState
    > 
{
        public constructor( 
            props: globalThis.Readonly<$model.ICommonProp> 
        ) {
            super(props);
            this.init();
        }

        private init(): void {
            this.state = {
                id: this.props.id,
                title: this.props.headerState?.title
                    ?? import.meta.env.IT_APP_NAME
                    ?? `[${import.meta.env.MODE}] SJP2CD: Campus Information System`
            };
        }

        public componentDidMount(): void {
            document.title = this.state.title!;
        }

        public render(): React.JSX.Element {
            return (<>
                <ReactRouterDom.BrowserRouter>
                    <ReactRouterDom.Routes>
                        <ReactRouterDom.Route path={`/`} 
                        element={<Layout0x0003 id={this.props.id} headerState={this.state}/>}>
                        {/* <ReactRouterDom.Route path={`/`} 
                        element={<DashboardLayoutBasic />}> */}

                            <ReactRouterDom.Route 
                            index element={<ViewWelcome id=""/>}/>

                            <ReactRouterDom.Route 
                            path={`/department/college-of-nursing`} element={<CollegeOfNursing/>}/>

                            <ReactRouterDom.Route 
                            path={`/department/college-of-engineering`} element={<ViewWelcomeCollegeOfEngineering/>}/>

                            <ReactRouterDom.Route 
                            path={`*`} element={<h1>TODO</h1>}/>
                        </ReactRouterDom.Route>
                    </ReactRouterDom.Routes>
                </ReactRouterDom.BrowserRouter>
            </>);
        }
    }
}

export default $innovative_troublemaker$campus_information_system.App;

