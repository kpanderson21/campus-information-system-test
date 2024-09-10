
import * as React from "react";
import * as ReactRouterDom from "react-router-dom";

import Layout0x0001 from "@innovative_troublemaker/campus_information_system/component/layout/Layout0x0001.tsx";

import { 
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading 
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mjs";

import CollegeOfNursing from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_nursing/index.tsx";

import ViewWelcome from "@innovative_troublemaker/campus_information_system/view/index.tsx";

export namespace $innovative_troublemaker$campus_information_system {
    export class App extends React.Component<$model$heading.IHeaderProp,{}> {

        public constructor( 
            props: globalThis.Readonly<$model$heading.IHeaderProp> 
        ) {
            super(props);
            this.init();
        }

        private init(): void {
            this.state = {};
            document.title 
                = this.props.headerState?.title 
                    ?? import.meta.env.IT_APP_NAME
                    ?? `[${import.meta.env.MODE}] SJP2CD: Campus Information System`;
        }

        public render(): React.JSX.Element {
            return (<>
                <ReactRouterDom.BrowserRouter>
                    <ReactRouterDom.Routes>
                        <ReactRouterDom.Route path={`/`} element={<Layout0x0001/>}>
                            <ReactRouterDom.Route 
                            index element={<ViewWelcome id=""/>}/>
                            <ReactRouterDom.Route 
                            path={`/department/college-of-nursing`} element={<CollegeOfNursing/>}/>

                        </ReactRouterDom.Route>
                    </ReactRouterDom.Routes>
                </ReactRouterDom.BrowserRouter>
            </>);
        }
    }
}

export default $innovative_troublemaker$campus_information_system.App;

