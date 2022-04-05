import React, { useState } from "react";
import { TextField, AppBar, Dialog, Button } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import styles from './CommonStyles.module.css';

export const EducationalDetails = (props) => {
    const { setEducationalDetails, nextState, prevState } = props;
    const [education, setEducation] = useState({});

    const handleChange = (e) => {
        setEducation({
            ...education,
            [e.target.name]: e.target.value
        })
    }

    const goToNext = () => {
        nextState();
        setEducationalDetails({
            SSLC_percentage: education.SSLC_percentage,
            HSC_percentage: education.HSC_percentage,
            UG_mark_percentage: education.UG_mark_percentage,
            yearOfCompletion: education.yearOfCompletion
        })
    }

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
                            value={education.SSLC_percentage ? education.SSLC_percentage : ""}
                            onChange={handleChange}
                            label="SSLC marks"
                            placeholder="SSLC percent"
                            name="SSLC_percentage"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            margin="normal"
                            fullWidth
                            variant="standard"
                            value={education.HSC_percentage ? education.HSC_percentage : ""}
                            onChange={handleChange}
                            label="HSC marks"
                            placeholder="HSC percent"
                            name="HSC_percentage"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            margin="normal"
                            fullWidth
                            variant="standard"
                            value={education.UG_mark_percentage ? education.UG_mark_percentage : ""}
                            onChange={handleChange}
                            label="UG marks"
                            placeholder="UG percent"
                            name="UG_mark_percentage"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            margin="normal"
                            fullWidth
                            variant="standard"
                            value={education.yearOfCompletion ? education.yearOfCompletion : ""}
                            onChange={handleChange}
                            label="Year of completion"
                            placeholder="Year of completion"
                            name="yearOfCompletion"
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