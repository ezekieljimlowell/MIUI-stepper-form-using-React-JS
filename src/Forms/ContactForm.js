import React from "react";
import { AppBar, Dialog, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Button } from "@mui/material";
import styles from './CommonStyles.module.css';

export const ContactForm = (props) => {
    const { values, handleChange, nextState, prevState } = props;

    return (
        <>
            <ThemeProvider>
                <Dialog
                    open
                    fullWidth
                    maxWidth="sm"
                >
                <AppBar className={styles.title}>Contact form</AppBar>
                <div className={styles.addPadding}>
                <TextField
                    variant="standard" 
                    placeholder="Enter your email"
                    fullWidth
                    margin="normal"
                    label="Email"
                    onChange={handleChange("email")}
                    value={values.email}
                />
                </div>
                <div className={styles.addPadding}>
                <TextField
                    variant="standard" 
                    placeholder="Enter your phone number"
                    fullWidth
                    margin="normal"
                    label="Phone number"
                    onChange={handleChange("phoneNumber")}
                    value={values.phoneNumber}
                />
                </div>
                <div className={styles.addPadding}>
                <TextField
                    variant="standard"
                    placeholder="Enter your alternate number"
                    fullWidth
                    margin="normal"
                    label="Alternate number"
                    onChange={handleChange("alternateNumber")}
                    value={values.alternateNumber}
                />
                </div>
                <div className={styles.addPadding}>
                <TextField
                    variant="standard"
                    placeholder="Enter your address"
                    fullWidth
                    margin="normal"
                    label="Address"
                    onChange={handleChange("address")}
                    value={values.address}
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