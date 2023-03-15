import React from 'react';

const PatientCell = ({patientName, publicKey, diagnosedBy, diagnosisTime, diagnosis, comments}) => {
    const handleView = () => {
        const patient = document.getElementById(publicKey);
        const btn = document.getElementById(`${publicKey}-btn`);
        if (patient.classList.contains("hidden")) {
            patient.classList.remove("hidden");
            btn.classList.remove("bg-green-600");
            btn.classList.add("bg-red-600");
            btn.innerHTML = "Hide Records";
        }
        else {
            patient.classList.add("hidden");
            btn.classList.remove("bg-red-600");
            btn.classList.add("bg-green-600");
            btn.innerHTML = "View Records";
        }
    }

    return (
        <tr className=" h-full border-y-2 border-solid border-slate-300">
            <td className="text-left">{patientName}</td>
            <td className="text-left">
                {publicKey}
            </td>
            <td className="h-12 flex justify-left">
                <button id={`${publicKey}-btn`} className="h-auto m-auto text-sm p-1 bg-green-600 text-white rounded-md" onClick={handleView}>View Records</button>
            </td>
            <td id={`${publicKey}`} className="flex justify-center m-4 p-2 px-4 bg-slate-200 rounded-md hidden">
                <ul className="text-sm">
                    <li className="text-left">Name: {patientName}</li>
                    <li className="text-left">Public Key: {publicKey}</li>
                    <br />
                    <li className="text-left">Diagnosed By: {diagnosedBy}</li>
                    <li className="text-left">Diagnosis Time: {diagnosisTime}</li>
                    <li className="text-left">Diagnosis: {diagnosis}</li>
                    <li className="text-left">Comments: {comments}</li>
                </ul>
            </td>
        </tr>
    )
}

export default PatientCell;