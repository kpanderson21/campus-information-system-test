import { IHeaderState } from "./IHeaderState.mts";

export namespace $innovative_troublemaker$campus_information_system$model$heading {
    export interface IHeaderProp {
        readonly id: string;
        window?: () => globalThis.Window;
        children?: React.ReactElement;
        headerState?: IHeaderState;
    }
}

export type IHeaderProp
    = $innovative_troublemaker$campus_information_system$model$heading.IHeaderProp;