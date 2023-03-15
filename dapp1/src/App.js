import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Patient from './Pages/Patient/Patient';
import Doctor from './Pages/Doctor/Doctor';
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const patientData = {
    patientName: 'John Doe',
    patientAge: 25,
    publicKey: 'l2j3k4l2j3k4l2j3k4l2j3k4',
    diagnosedBy: 'Doctor 1',
    diagnosisTime: '2021-05-01 12:00:00',
    diagnosis: 'Covid-19',
    comments: 'Patient is in critical condition. Please take care of him.',
    doctorList: [
      {value: 'Dr. 1', text: 'Doctor 1', publicKey: 'gzxs0qOarPiu0qCweRmw'},
      {value: 'Dr. 2', text: 'Doctor 2', publicKey: 'Au1dEaB6p3kXLx5mbrjH'},
      {value: 'Dr. 3', text: 'Doctor 3', publicKey: 'IDfVhbtAwqGycinWPCsA'},
    ]
  }

  const patientData2 = {
    patientName: 'Jane Doe',
    patientAge: 25,
    publicKey: 'IDfVhbtAwqGycinWPCsA',
    diagnosedBy: 'Doctor 1',
    diagnosisTime: '2021-05-01 12:00:00',
    diagnosis: 'Covid-19',
    comments: 'Patient is in critical condition. Please take care of him.',
    doctorList: [
      {value: 'Dr. 1', text: 'Doctor 1', publicKey: 'gzxs0qOarPiu0qCweRmw'},
      {value: 'Dr. 2', text: 'Doctor 2', publicKey: 'Au1dEaB6p3kXLx5mbrjH'},
      {value: 'Dr. 3', text: 'Doctor 3', publicKey: 'IDfVhbtAwqGycinWPCsA'},
    ]
  }

  const patientList = [
    patientData,
    patientData2,
  ];

  const doctorData = {
    doctorName: 'Doctor 1',
    doctorAge: 35,
    patientList: patientList,
  }


  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient" element={<Patient {...patientData} />} />
        <Route path="/doctor" element={<Doctor {...doctorData}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
