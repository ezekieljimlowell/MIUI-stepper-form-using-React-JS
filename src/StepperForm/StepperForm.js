import React, { useState } from "react";
import { BasicDetails } from "../Forms/BasicDetails";
import { ContactForm } from "../Forms/ContactForm";
import { PersonalDetails } from "../Forms/PersonalDetails";
import { EducationalDetails } from "../Forms/EducationalDetails";
import { Success } from "../Forms/Success";

export const StepperForm = () => {
    const [personalDetails, setPersonalDetails] = useState({
        PAN_number: "",
        UAN_number: "",
        totalExperience: "",
        department: ""
    })
    const [basicDetails, setBasicDetails] = useState({
        fullName: "",
        age: "",
        place: "",
        dateOfBirth: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    })
    const [contactDetails, setContactDetails] = useState({
        email: "",
        phoneNumber: "",
        alternateNumber: "",
        address: "",
    })
    const [educationalDetails, setEducationalDetails] = useState({
        SSLC_percentage: "",
        HSC_percentage: "",
        UG_mark_percentage: "",
        yearOfCompletion: "",
    })
    const [step, setStep] = useState(1);

    const prevState = () => {
        setStep(step - 1);
    }

    const nextState = () => {
        setStep(step + 1);
    }

    return (
        <>
            <div>
                {(() => {

                    switch (step) {
                        case 1:
                            //console.log(step)
                            return (
                                <div>
                                    <BasicDetails
                                        nextState={nextState}
                                        setBasicDetails={setBasicDetails}
                                    />
                                </div>
                            )
                        case 2:
                            return (
                                <ContactForm
                                    nextState={nextState}
                                    prevState={prevState}
                                    contactDetails={contactDetails}
                                    setContactDetails={setContactDetails}
                                />
                            )
                        case 3:
                            return (
                                <EducationalDetails
                                    setEducationalDetails={setEducationalDetails}
                                    nextState={nextState}
                                    prevState={prevState}
                                />
                            )
                        case 4:
                            return (
                                <PersonalDetails
                                    setPersonalDetails={setPersonalDetails}
                                    nextState={nextState}
                                    prevState={prevState}
                                />
                            )
                        case 5:
                            return (
                                <Success
                                    basicDetails={basicDetails}
                                    contactDetails={contactDetails}
                                    educationalDetails={educationalDetails}
                                    personalDetails={personalDetails}
                                    prevState={prevState}
                                />
                            )
                    }
                })()}
            </div>
        </>
    )
}