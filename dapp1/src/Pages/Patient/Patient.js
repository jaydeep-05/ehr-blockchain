import { React, useState } from 'react';

const Patient = ({ patientName, patientAge, publicKey, diagnosedBy, diagnosisTime, diagnosis, comments, doctorList }) => {

    const [doctor, setDoctor] = useState(doctorList[0].value);

    const handleRecords = () => {
        let buttonText = document.getElementById('show-records-btn').innerHTML;
        if (buttonText === 'View medical records') {
            document.getElementById('show-records-btn').innerHTML = 'Hide medical records';
            document.getElementById('details').style.display = 'block';
        }
        else {
            document.getElementById('show-records-btn').innerHTML = 'View medical records';
            document.getElementById('details').style.display = 'none';
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Doctor selected: ' + doctor);
    }

    const revokeAccess = (docName) => {
        console.log('Access revoked for ' + docName);
    }


    return (
        <div className="flex flex-col m-auto mt-24 w-fit">
            <div className="patient-card w-full">
                <div className="w-full m-0 p-2 text-lg bg-slate-200">Personal Information</div>
                <table className="mx-8 my-4">
                    <tbody>
                        <tr className="h-8 border-y-2 border-solid border-slate-300">
                            <th className="w-48 text-left">Name:</th>
                            <td id="name" className="w-96 text-left">{patientName}</td>
                        </tr>
                        <tr className="h-8">
                            <th className="text-left">Age:</th>
                            <td id="age" className="text-left">{patientAge}</td>
                        </tr>
                    </tbody>
                </table>
                <span className="text-sm">Your records are stored here: http://localhost:3000</span>

                <div className="h-12 mt-2">
                    <button id="show-records-btn" className="text-sm p-2 bg-sky-500 text-white rounded-md" onClick={handleRecords}>
                        View medical records
                    </button>
                </div>

                <div id="details" className="w-2/3 m-4 p-2 px-4 bg-slate-200 rounded-md hidden">
                    <ul className="text-sm">
                        <li className="text-left">Name: {patientName}</li>
                        <li className="text-left">Public Key: {publicKey}</li>
                        <br />
                        <li className="text-left">Diagnosed By: {diagnosedBy}</li>
                        <li className="text-left">Diagnosis Time: {diagnosisTime}</li>
                        <li className="text-left">Diagnosis: {diagnosis}</li>
                        <li className="text-left">Comments: {comments}</li>
                    </ul>
                </div>
            </div>

            <div className="patient-card w-full">
                <div className="w-full m-0 p-4 text-lg bg-slate-200">Share your medical record</div>
                <table className="mx-8 my-4">
                    <tbody>
                        <tr>
                            <td className="w-24 text-left">Doctor:</td>
                            <td className="text-left">
                                <select value={doctor} className="w-72 px-2 py-1 bg-white border-2 border-solid border-slate-200" onChange={(e) => setDoctor(e.target.value)}>
                                    {doctorList.map((doctor) => (
                                        <option key={doctor.value} value={doctor.value}>{doctor.text}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="h-8 mb-3">
                    <button onClick={handleSubmit} className="text-sm p-2 bg-sky-700 text-white rounded-md">Submit</button>
                </div>
            </div>

            <div className="patient-card w-full">
                <div className="w-full m-0 p-4 text-lg bg-slate-200">Current EMR access holders</div>
                <table id="records" className="mx-8 my-4">
                    <tbody>
                        <tr className="h-8 border-y-2 border-solid border-slate-300">
                            <th className="w-48 text-left">Doctor</th>
                            <td className="w-64 text-left">Public Key</td>
                            <td className="w-32 text-left">Revoke access</td>
                        </tr>
                        {doctorList.map((doctor) => (
                            <tr key={doctor.value} className="h-8">
                                <td id={`${doctor.text}`} className="text-left">{doctor.text}</td>
                                <td className="text-left">{doctor.publicKey}</td>
                                <td className="h-8 flex justify-center items-center">
                                    <button className="m-auto text-sm p-1 bg-red-600 text-white rounded-md" onClick={() => revokeAccess(doctor.text)}>Revoke</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Patient;
