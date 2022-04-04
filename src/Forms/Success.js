import { Button } from "@mui/material";
import styles from './CommonStyles.module.css';

export const Success = (props) => {
    const { values, prevState } = props;

    return (
        <>
            <h2>Successfully submitted</h2>
            <div>
                <div>{values.fullName}</div>
            </div>
            <div className={styles.successPrevButton}>
                <Button className={styles.prevButtonWidth} onClick={() => prevState()} variant="contained" color="inherit">Back</Button>
            </div>
        </>
    )
}