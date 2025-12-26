import { useState } from "react"
export default function Questions(){
    let givenValue = false;
      const [AnsToggle,setAnsToggle]= useState(givenValue)

    const questionsToBe =["What services does ProHealth offer?","how do I schedule an appointement with ProHealth?",
        "Do you accept insurance?","What should I bring to my Appointment","How do I request a Precription Refill?"
    ]
    const ans =["ProHealth offers a wide range of medical services including general consultations, specialist care, diagnostic testing, preventive health services, emergency care, and personalized treatment plans designed to support your overall well-being.",
        "You can schedule an appointment with ProHealth by calling our front desk, booking online through our website, or visiting our facility in person. Our team is always ready to help you find a convenient time.",
        "Yes, ProHealth accepts most major insurance plans. We recommend contacting our billing department or your insurance provider to confirm coverage before your visit.",
        "Please bring a valid ID, your insurance card, any relevant medical records, a list of current medications, and any referral documents if required.",
        "Prescription refills can be requested by contacting our clinic directly, using our patient portal, or speaking with your healthcare provider during your visit."
    ]
    function toggle(){
        setAnsToggle(prev =>!prev)
    }
    return(
        <div className="questions">
        <p className="question1" onClick={toggle}>{questionsToBe[0]}</p>
        {AnsToggle && <p>{ans[0]}</p>}
        <p className="question1" onClick={toggle}>{questionsToBe[1]}</p>
        {AnsToggle && <p>{ans[1]}</p>}
        <p className="question1" onClick={toggle}>{questionsToBe[2]}</p>
        {AnsToggle && <p>{ans[2]}</p>}
        <p className="question1" onClick={toggle}>{questionsToBe[3]}</p>
        {AnsToggle && <p>{ans[3]}</p>}
        <p className="question1" onClick={toggle}>{questionsToBe[4]}</p>
        {AnsToggle && <p>{ans[4]}</p>}
        </div>
    )
}