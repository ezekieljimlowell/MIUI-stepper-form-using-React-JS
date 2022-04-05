import React, { useState } from "react";
import { Button, TextField, AppBar, Dialog } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import styles from './CommonStyles.module.css';

export const PersonalDetails = (props) => {
    const { setPersonalDetails, nextState, prevState } = props;
    const [personalData, setPersonalData] = useState({});

    const handleChange = (e) => {
        setPersonalData({
            ...personalData,
            [e.target.name]: e.target.value
        })
    }

    const goToNext = () => {
        nextState();
        setPersonalDetails({
            PAN_number: personalData.PAN_number,
            UAN_number: personalData.UAN_number,
            totalExperience: personalData.totalExperience,
            department: personalData.department
        });
    }

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
                            value={personalData.PAN_number ? personalData.PAN_number : ""}
                            onChange={handleChange}
                            label="PAN number"
                            name="PAN_number"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            fullWidth
                            margin="normal"
                            placeholder="UAN number"
                            value={personalData.UAN_number ? personalData.UAN_number : ""}
                            onChange={handleChange}
                            label="UAN number"
                            name="UAN_number"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            fullWidth
                            margin="normal"
                            placeholder="Experience"
                            value={personalData.totalExperience ? personalData.totalExperience : ""}
                            onChange={handleChange}
                            label="Experience"
                            name="totalExperience"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            fullWidth
                            margin="normal"
                            placeholder="Department"
                            value={personalData.department ? personalData.department : ""}
                            onChange={handleChange}
                            label="Department"
                            name="department"
                        />
                    </div>
                    <div className={styles.addPaddingPrev}>
                        <Button className={styles.addWidth} variant="contained" color="info" onClick={() => prevState()}>Back</Button>
                    </div>
                    <br></br>
                    <div className={styles.addPaddingNext}>
                        <Button className={styles.addWidth} variant="contained" color="success" onClick={goToNext}>Next</Button>
                    </div>
                </Dialog>
            </ThemeProvider>
        </>
    )
}