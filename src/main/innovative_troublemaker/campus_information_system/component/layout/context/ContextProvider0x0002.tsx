

import * as React from "react";

import CONTEXT_0x0002, 
    {
        CommonProp,
        CommonState
    } 
    from "./Context0x0002";


export default class ContextProvider0x002 
    extends React.Component<
        CommonProp,
        CommonState
    > 
{

    public constructor( 
        props: globalThis.Readonly<CommonProp>
    ) {
        super(props);
        this.state = {
            id: this.toString(),
            isMobileOpen: this.props.headerState?.isMobileOpen ?? false,
            isDarkMode: this.props.themeState?.isDarkMode ?? false,
            apply: (): void => {},
        }
        this.ref = React.createRef<this>();
    }


    public render(): React.ReactElement {
        return (<>
            <CONTEXT_0x0002.Provider value={this.props}>
                {this.props.children}
            </CONTEXT_0x0002.Provider>
        </>)
    }

    // public static readonly contextType?: React.Context<any> | undefined 
    //     = CONTEXT_0x0002;
    
    private readonly ref?: React.RefObject<any> | undefined;

}