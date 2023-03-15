import { React, useState } from 'react';
import PatientCell from './PatientCell';

const Doctor = ({ doctorName, doctorAge, patientList }) => {
    const [disease, setDisease] = useState('');
    const handleView = (publicKey) => {
        const patient = document.getElementById(publicKey);
        const otherPatients = document.getElementsByClassName("patient-details");
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
        <div className="flex flex-col m-auto mt-24 w-fit">
            <div className="patient-card w-full">
                <div className="w-full m-0 p-2 text-lg bg-slate-200">Personal Information</div>
                <table className="mx-8 my-4">
                    <tbody>
                        <tr className="h-8 border-y-2 border-solid border-slate-300">
                            <th className="w-48 text-left">Name:</th>
                            <td id="name" className="w-96 text-left">{doctorName}</td>
                        </tr>
                        <tr className="h-8">
                            <th className="text-left">Age:</th>
                            <td id="age" className="text-left">{doctorAge}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="patient-card w-full">
                <div className="w-full m-0 p-4 text-lg bg-slate-200">Accessible EMRs</div>
                <table id="records" className="mx-8 my-6">
                    <tr className="h-8 border-y-2 border-solid border-slate-300">
                        <td className="w-48 text-left">Patient</td>
                        <td className="w-64 text-left">Public Key</td>
                        <td className="w-32 text-left pl-4">Action</td>
                    </tr>

                    {patientList.map((patient) => (
                        <tbody className="patient-details ">
                            <tr className="h-full border-y-2 border-solid border-slate-300">
                                <td className="text-left">{patient.patientName}</td>
                                <td className="text-left">
                                    {patient.publicKey}
                                </td>
                                <td className="h-12">
                                    <button id={`${patient.publicKey}-btn`} className="h-auto m-auto text-sm p-1 bg-green-600 text-white rounded-md" onClick={() => handleView(patient.publicKey)}>View Records</button>
                                </td>
                            </tr>
                            <tr>
                                <td id={`${patient.publicKey}`} className="m-4 p-2 px-4 bg-slate-200 rounded-md hidden">
                                    <ul className="text-sm">
                                        <li className="text-left">Name: {patient.patientName}</li>
                                        <li className="text-left">Public Key: {patient.publicKey}</li>
                                        <br />
                                        <li className="text-left">Diagnosed By: {patient.diagnosedBy}</li>
                                        <li className="text-left">Diagnosis Time: {patient.diagnosisTime}</li>
                                        <li className="text-left">Diagnosis: {patient.diagnosis}</li>
                                        <li className="text-left">Comments: {patient.comments}</li>
                                    </ul>
                                    <div className="flex flex-col gap-4 mt-4">
                                    <select value={disease} className="w-72 px-2 py-1 bg-white border-2 border-solid border-slate-200" onChange={(e) => setDisease(e.target.value)}>
                                        <option value="Covid-19">Covid-19</option>
                                        <option value="Diabetes">Diabetes</option>
                                        <option value="Hypertension">Hypertension</option>
                                        <option value="Asthma">Asthma</option>
                                        <option value="Cancer">Cancer</option>
                                        <option value="Heart Disease">Heart Disease</option>
                                    </select>
                                    <div className="flex flex-row gap-4">
                                        <textarea className="w-72 px-2 py-1 bg-white border-2 border-solid border-slate-200" placeholder="Enter details to be added" />
                                        <button className="h-8 w-24 px-2 py-1 bg-green-600 text-white rounded-md">Submit</button>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    ))}

                    {/* <PatientCell patientName="Patient 1" publicKey="Au1dEaB6p3kXLx5mbrjH" diagnosedBy="Doctor 1" diagnosisTime="2021-01-01 12:00:00" diagnosis="Covid-19" comments="Patient is in critical condition" />
                        <PatientCell patientName="Patient 2" publicKey="IDfVhbtAwqGycinWPCsA" diagnosedBy="Doctor 1" diagnosisTime="2021-01-01 12:00:00" diagnosis="Covid-19" comments="Patient is in critical condition" />
                        <PatientCell patientName="Patient 3" publicKey="gzxs0qOarPiu0qCweRmw" diagnosedBy="Doctor 1" diagnosisTime="2021-01-01 12:00:00" diagnosis="Covid-19" comments="Patient is in critical condition" /> */}
                </table>
            </div>
        </div>
    );
}


export default Doctor;
