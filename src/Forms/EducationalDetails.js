import React from "react";
import { TextField, AppBar, Dialog, Button } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import styles from './CommonStyles.module.css';

export const EducationalDetails = (props) => {
    const { values, handleChange, nextState, prevState } = props;

    return (
        <>
            <ThemeProvider>
                <Dialog
                    open
                    fullWidth
                    maxWidth="sm"
                >
                    <AppBar className={styles.title}>Educational details</AppBar>
                    <div className={styles.addPadding}>
                    <TextField
                        margin="normal"
                        fullWidth
                        variant="standard"
                        value={values.SSLC_percentage}
                        onChange={handleChange("SSLC_percentage")}
                        label="SSLC marks"
                        placeholder="SSLC percent"
                    />
                    </div>
                    <div className={styles.addPadding}>
                    <TextField
                        margin="normal"
                        fullWidth
                        variant="standard"
                        value={values.HSC_percentage}
                        onChange={handleChange("HSC_percentage")}
                        label="HSC marks"
                        placeholder="HSC percent"
                    />
                    </div>
                    <div className={styles.addPadding}>
                    <TextField
                        margin="normal"
                        fullWidth
                        variant="standard"
                        value={values.UG_mark_percentage}
                        onChange={handleChange("UG_mark_percentage")}
                        label="UG marks"
                        placeholder="UG percent"
                    />
                    </div>
                    <div className={styles.addPadding}>
                    <TextField
                        margin="normal"
                        fullWidth
                        variant="standard"
                        value={values.yearOfCompletion}
                        onChange={handleChange("yearOfCompletion")}
                        label="Year of completion"
                        placeholder="Year of completion"
                    />
                    </div>
                    <div className={styles.addPaddingPrev}>
                        <Button className={styles.addWidth} variant="contained" color="info" onClick={() => prevState()}>Back</Button>
                    </div>
                    <br></br>
                    <div className={styles.addPaddingNext}>
                        <Button className={styles.addWidth} variant="contained" color="success" onClick={() => nextState()}>Next</Button>
                    </div>
                </Dialog>
            </ThemeProvider>
        </>
    )
}