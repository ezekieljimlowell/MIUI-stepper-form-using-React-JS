import React, { useState } from "react";
import { AppBar, Dialog, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Button } from "@mui/material";
import styles from './CommonStyles.module.css';

export const ContactForm = (props) => {
    const { nextState, prevState, setContactDetails } = props;
    const [contact, setContact] = useState({});

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const goToNext = () => {
        nextState();
        setContactDetails({
            email: contact.email,
            phoneNumber: contact.phoneNumber,
            alternateNumber: contact.alternateNumber,
            address: contact.address,
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
                    <AppBar className={styles.title}>Contact form</AppBar>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Enter your email"
                            fullWidth
                            margin="normal"
                            label="Email"
                            onChange={handleChange}
                            value={contact.email ? contact.email : ""}
                            name="email"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Enter your phone number"
                            fullWidth
                            margin="normal"
                            label="Phone number"
                            onChange={handleChange}
                            value={contact.phoneNumber ? contact.phoneNumber : ""}
                            name="phoneNumber"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Enter your alternate number"
                            fullWidth
                            margin="normal"
                            label="Alternate number"
                            onChange={handleChange}
                            value={contact.alternateNumber ? contact.alternateNumber : ""}
                            name="alternateNumber"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Enter your address"
                            fullWidth
                            margin="normal"
                            label="Address"
                            onChange={handleChange}
                            value={contact.address ? contact.address : ""}
                            name="address"
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