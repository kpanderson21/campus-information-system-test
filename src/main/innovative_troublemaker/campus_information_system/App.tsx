
import * as React from "react";
import * as ReactRouterDom from "react-router-dom";

import Layout0x0002 from "@innovative_troublemaker/campus_information_system/component/layout/Layout0x0002.tsx";

import { 
    $innovative_troublemaker$campus_information_system$model 
    as $model
} from "@innovative_troublemaker/campus_information_system/model/pkg-info.mts";

import CollegeOfNursing from "@innovative_troublemaker/campus_information_system/view/academic/department/college_of_nursing/index.tsx";

import ViewWelcome from "@innovative_troublemaker/campus_information_system/view/index.tsx";

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
    export class App extends React.Component<$model.ICommonProp,{}> {

        public constructor( 
            props: globalThis.Readonly<$model.ICommonProp> 
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
                        <ReactRouterDom.Route path={`/`} 
                        element={<Layout0x0002 id={this.props.id}/>}>
                            <ReactRouterDom.Route 
                            index element={<ViewWelcome id=""/>}/>
                            <ReactRouterDom.Route 
                            path={`/department/college-of-nursing`} element={<CollegeOfNursing/>}/>
                            <ReactRouterDom.Route 
                            path={`*`} element={`TODO`}/>
                        </ReactRouterDom.Route>
                    </ReactRouterDom.Routes>
                </ReactRouterDom.BrowserRouter>
            </>);
        }
    }
}

export default $innovative_troublemaker$campus_information_system.App;

