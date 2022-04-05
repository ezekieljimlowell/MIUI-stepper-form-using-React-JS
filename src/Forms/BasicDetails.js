import { AppBar, Dialog, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Button } from "@mui/material";
import styles from './CommonStyles.module.css';
import { useState } from "react";

export const BasicDetails = (props) => {
    const { nextState, setBasicDetails } = props;
    const [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const goToNext = (e) => {
        e.preventDefault();
        nextState();
        setBasicDetails({
            fullName: data.fullName,
            age: data.age,
            place: data.place
        })
    }

    return (
        <div>
            <ThemeProvider>
                <Dialog
                    open
                    fullWidth
                    maxWidth="sm"
                >
                    <AppBar className={styles.title}>Basic details</AppBar>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Enter your name"
                            label="Full name"
                            onChange={handleChange}
                            value={data.fullName ? data.fullName: ""}
                            margin="normal"
                            fullWidth
                            name="fullName"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Age"
                            label="Age"
                            onChange={handleChange}
                            value={data.age ? data.age: ""}
                            margin="normal"
                            fullWidth
                            name="age"
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Place"
                            label="Place"
                            onChange={handleChange}
                            value={data.place ? data.place: ""}
                            margin="normal"
                            fullWidth
                            name="place"
                        />
                    </div>
                    <div className={styles.addPaddingButton}>
                        <Button className={styles.addWidth} color="primary" variant="contained" onClick={goToNext}>Next</Button>
                    </div>
                </Dialog>
            </ThemeProvider>
        </div>
    )
}