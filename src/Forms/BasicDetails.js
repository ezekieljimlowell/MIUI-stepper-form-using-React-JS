import { AppBar, Dialog, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Button } from "@mui/material";
import styles from './CommonStyles.module.css';

export const BasicDetails = (props) => {
    const { values, handleChange, nextState } = props;

    const goToNext = (e) => {
        e.preventDefault();
        nextState();
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
                            onChange={handleChange("fullName")}
                            value={values.fullName}
                            margin="normal"
                            fullWidth
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Age"
                            label="Age"
                            onChange={handleChange("age")}
                            value={values.age}
                            margin="normal"
                            fullWidth
                        />
                    </div>
                    <div className={styles.addPadding}>
                        <TextField
                            variant="standard"
                            placeholder="Place"
                            label="Place"
                            onChange={handleChange("place")}
                            value={values.place}
                            margin="normal"
                            fullWidth
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