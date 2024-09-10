export namespace $innovative_troublemaker$campus_information_system$model$heading {
    export interface IHeaderState {
        readonly id: string;
        title?: string;
        isMobileOpen?: boolean;
        apply: () => void;
    }
}

export type IHeaderState
    = $innovative_troublemaker$campus_information_system$model$heading.IHeaderState;