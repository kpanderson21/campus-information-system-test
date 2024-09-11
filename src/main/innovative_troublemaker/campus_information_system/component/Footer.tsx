
import * as React from "react";
import * as MUI from "@mui/material";

import {
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mts";

import {
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mts";
import { Context0x0001 } from "./layout/context/ContextProvider0x0001";
import CONTEXT_0x0003 from "./layout/context/Context0x0003";

export namespace $innovative_troublemaker$campus_information_system$component {
    export class Footer
        extends React.Component<
            $model$heading.IHeaderProp
            & $model$theme.IThemeProp,
            {}
        > {

        public constructor(
            props: globalThis.Readonly<
                $model$heading.IHeaderProp
                & $model$theme.IThemeState
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
                & $model$theme.IThemeProp
            >
        ): void {

        }

        public render(): React.JSX.Element {
            return (<>

                <CONTEXT_0x0003.Consumer>
                    {(context) => {
                        return (<>
                            <MUI.Typography variant="h3">
                                Footer...
                            </MUI.Typography>

                            <MUI.Stack
                            gap={`2rem`}>
                                <MUI.Button
                                    disabled={context?.state.isDarkMode}
                                    variant="innovativeTroublemakerButton1">
                                    {context?.state.isDarkMode ? "true" : "false"}
                                </MUI.Button>
                                <MUI.Button variant="innovativeTroublemakerButton1"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        context?.dispatch(
                                            {
                                                id: context.state.id,
                                                isDarkMode: !context.state.isDarkMode,
                                            }
                                        );
                                    }}>
                                    {this.props.id}
                                </MUI.Button>
                            </MUI.Stack>
                        </>)
                    }}
                </CONTEXT_0x0003.Consumer>
            </>);
        }
    }
}

export default $innovative_troublemaker$campus_information_system$component.Footer;