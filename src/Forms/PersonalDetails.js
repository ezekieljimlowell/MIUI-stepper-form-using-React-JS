import React from "react";
import { Button, TextField, AppBar, Dialog } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import styles from './CommonStyles.module.css';

export const PersonalDetails = (props) => {
    const { values, nextState, prevState, handleChange } = props;

    return (
        <>
            <ThemeProvider>
                <Dialog
                    open
                    fullWidth
                    maxWidth="sm"
                >
                    <AppBar className={styles.title}>Personal Details</AppBar>
                    <div className={styles.addPadding}>
                    <TextField
                        variant="standard"
                        fullWidth
                        margin="normal"
                        placeholder="PAN number"
                        value={values.PAN_number}
                        onChange={handleChange("PAN_number")}
                        label="PAN number"
                    />
                    </div>
                    <div className={styles.addPadding}>
                    <TextField 
                        variant="standard"
                        fullWidth
                        margin="normal"
                        placeholder="UAN number"
                        value={values.UAN_number}
                        onChange={handleChange("UAN_number")}
                        label="UAN number"
                    />
                    </div>
                    <div className={styles.addPadding}>
                    <TextField 
                        variant="standard"
                        fullWidth
                        margin="normal"
                        placeholder="Experience"
                        value={values.totalExperience}
                        onChange={handleChange("totalExperience")}
                        label="Experience"
                    />
                    </div>
                    <div className={styles.addPadding}>
                    <TextField 
                        variant="standard"
                        fullWidth
                        margin="normal"
                        placeholder="Department"
                        value={values.department}
                        onChange={handleChange("department")}
                        label="Department"
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