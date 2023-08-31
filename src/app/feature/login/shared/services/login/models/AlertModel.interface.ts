

export interface IAlertModel {
    message: string;
    type: AlertType;
    isOpen: boolean;
}

type AlertType = "error" | "success" | "warning" ;