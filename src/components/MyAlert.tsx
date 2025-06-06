import { Alert, AlertTitle, Snackbar } from "@mui/material";

const MyAlert = (props: any) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={props.open}
            autoHideDuration={6000}
        >
            <Alert severity="error" sx={{ width: '100%' }}>
                {props.text}
            </Alert>
        </Snackbar>
    );
}

export function MySuccess(props: any) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={props.open}
            autoHideDuration={6000}
        >
            <Alert severity="success" sx={{ width: '100%' }}>
                <AlertTitle>{props.title}</AlertTitle>
                {props.text}
            </Alert>
        </Snackbar>
    );
}


export default MyAlert;