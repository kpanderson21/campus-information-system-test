
import * as React from "react";
import * as MUI from "@mui/material";

import { 
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mts";

import { 
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mts";

export namespace $innovative_troublemaker$campus_information_system$component {
    export class Footer 
        extends React.Component<
            $model$heading.IHeaderProp
            &$model$theme.IThemeProp,
            {}
        > 
    {
        
        public constructor( 
            props: globalThis.Readonly<
                $model$heading.IHeaderProp
                &$model$theme.IThemeState
            > 
        ) {
            super(props);
            this.state = {};
            this.init();
        }

        private init(): void {

        }

        public componentDidMount(): void {

        }

        public componentWillUnmount(): void {
            
        }

        public componentDidUpdate(
            prevProps: globalThis.Readonly<
                $model$heading.IHeaderProp
                &$model$theme.IThemeProp
            >
        ): void {

        }

        public render(): React.JSX.Element {
            return (<>
                <MUI.Typography variant="h3">
                    Footer... 
                </MUI.Typography>
                <MUI.Button variant="innovativeTroublemakerButton1"
                onClick={(e) => { 
                    e.preventDefault();
                    this.props.themeState?.apply();
                }}>
                    {this.props.id}
                </MUI.Button>
            </>);
        }
    }
}

export default $innovative_troublemaker$campus_information_system$component.Footer;