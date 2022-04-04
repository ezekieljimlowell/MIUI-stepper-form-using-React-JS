import React, { useState } from "react";
import { BasicDetails } from "../Forms/BasicDetails";
import { ContactForm } from "../Forms/ContactForm";
import { PersonalDetails } from "../Forms/PersonalDetails";
import { EducationalDetails } from "../Forms/EducationalDetails";
import { Success } from "../Forms/Success";

export const StepperForm = () => {
    const [stepperState, setStepperState] = useState({
        //basic details
        fullName: "",
        age: "",
        place: "",
        dateOfBirth: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        //contact
        email: "",
        phoneNumber: "",
        alternateNumber: "",
        address: "",
        //education
        SSLC_percentage: "",
        HSC_percentage: "",
        UG_mark_percentage: "",
        yearOfCompletion: "",
        //personal
        PAN_number: "",
        UAN_number: "",
        totalExperience: "",
        department: ""
    })
    const [step, setStep] = useState(1);

    const { fullName, age, place, dateOfBirth,
        email, phoneNumber, alternateNumber, address,
        SSLC_percentage, HSC_percentage, UG_mark_percentage,
        yearOfCompletion, PAN_number, UAN_number,
        totalExperience, department } = stepperState;
    const values = {
        fullName, age, place, dateOfBirth,
        email, phoneNumber, alternateNumber, address,
        SSLC_percentage, HSC_percentage, UG_mark_percentage,
        yearOfCompletion, PAN_number, UAN_number,
        totalExperience, department
    }

    const handleChange = input => e => {
        setStepperState({
            [input]: e.target.value
        })
    }

    const prevState = () => {
        /*setStepperState({
            step: step - 1
        })*/
        setStep(step - 1);
    }

    const nextState = () => {
        /*setStepperState({
            step: step + 1
        })*/
        setStep(step + 1);
    }

    return (
        <>
            <div>
                {(() => {

                    switch (step) {
                        case 1:
                            console.log(step)
                            return (
                                <div>
                                    <BasicDetails
                                        nextState={nextState}
                                        handleChange={handleChange}
                                        values={values}
                                    />
                                </div>
                            )
                        case 2:
                            return (
                                <ContactForm
                                    nextState={nextState}
                                    prevState={prevState}
                                    handleChange={handleChange}
                                    values={values}
                                />
                            )
                        case 3:
                            return (
                                <EducationalDetails
                                    nextState={nextState}
                                    prevState={prevState}
                                    handleChange={handleChange}
                                    values={values}
                                />
                            )
                        case 4:
                            return (
                                <PersonalDetails
                                    nextState={nextState}
                                    prevState={prevState}
                                    handleChange={handleChange}
                                    values={values}
                                />
                            )
                        case 5:
                            return (
                                <Success
                                    prevState={prevState}
                                    values={values}
                                />
                            )
                    }
                })()}
            </div>
        </>
    )
}