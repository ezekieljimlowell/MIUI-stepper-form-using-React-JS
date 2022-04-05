import { Button } from "@mui/material";
import styles from './CommonStyles.module.css';

export const Success = (props) => {
    const { basicDetails, prevState, contactDetails, personalDetails, educationalDetails } = props;

    return (
        <>
            <h2>Successfully submitted</h2>
            {basicDetails.fullName && <div className={styles.addPadding}>
                <h3>Basic details</h3>
                <div>Full name: {basicDetails.fullName}</div>
                <div>Age: {basicDetails.age}</div>
                <div>Place: {basicDetails.place}</div>
                <br></br>
                <h3>Contact details</h3>
                <div>Email ID: {contactDetails.email}</div>
                <div>Phone number: {contactDetails.phoneNumber}</div>
                <div>Alternate Phone number: {contactDetails.alternateNumber}</div>
                <div>Address: {contactDetails.address}</div>
                <br></br>
                <h3>Educational details</h3>
                <div>SSLC mark percentage: {educationalDetails.SSLC_percentage}</div>
                <div>HSC mark percentage: {educationalDetails.HSC_percentage}</div>
                <div>UG mark percentage: {educationalDetails.UG_mark_percentage}</div>
                <div>Year of completion: {educationalDetails.yearOfCompletion}</div>
                <br></br>
                <h3>Personal details</h3>
                <div>PAN number: {personalDetails.PAN_number}</div>
                <div>UAN number: {personalDetails.UAN_number}</div>
                <div>Total experience: {personalDetails.totalExperience}</div>
                <div>Department: {personalDetails.department}</div>
                <br></br>
            </div>}
            <div className={`${styles.successPrevButton}`}>
                <Button className={styles.prevButtonWidth} onClick={() => prevState()} variant="contained" color="inherit">Back</Button>
            </div>
        </>
    )
}