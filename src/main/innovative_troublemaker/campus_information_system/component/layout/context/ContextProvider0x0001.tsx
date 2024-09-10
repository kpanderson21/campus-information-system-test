
import * as React from "react";

import {
    $innovative_troublemaker$campus_information_system$model$theme as $model$theme
} from "@innovative_troublemaker/campus_information_system/model/theme/pkg-info.mjs";

import {
    $innovative_troublemaker$campus_information_system$model$heading as $model$heading
} from "@innovative_troublemaker/campus_information_system/model/heading/pkg-info.mjs";

export const Context0x0001 = React.createContext<{
    themeProp: $model$theme.IThemeProp;
    headerProp: $model$heading.IHeaderProp;
  }>({
    themeProp: { id: "IThemePropContext0x001" },
    headerProp: { id: "IHeaderPropContext0x001" },
  });

//REM: [TODO, DO_WE_NEED_NAMESPACE]
export default class ContextProvider0x0001
    extends React.Component<
        $model$theme.IThemeProp
        & $model$heading.IHeaderProp,
        {}
    >
{

    public constructor(
        props: $model$theme.IThemeProp 
            & $model$heading.IHeaderProp
    ) {
        super(props);
        this.state = {};
    }

    public componentDidMount(): void {
    }

    public render(): React.ReactElement<React.JSX.Element> {
        return (<>
            <Context0x0001.Provider value={{
                themeProp: this.props, 
                headerProp: this.props,
            }}>
                {this.props.children}
            </Context0x0001.Provider>
        </>);
    }
}