import { useState, useEffect } from 'react';
import './App.css';
import PatientTable from './components/PatientTable';
import PatientForm from './components/PatientForm';
import { patientService } from './services/patientService';

function App() {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);

  useEffect(() => {
    loadPatients();
  }, []);

  useEffect(() => {
    // Filter patients based on search term
    if (searchTerm.trim() === '') {
      setFilteredPatients(patients);
    } else {
      const filtered = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPatients(filtered);
    }
  }, [searchTerm, patients]);

  const loadPatients = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await patientService.getAllPatients();
      setPatients(data);
      setFilteredPatients(data);
    } catch (err) {
      setError('Failed to load patients. Make sure the backend server is running on http://localhost:4000');
      console.error('Error loading patients:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePatient = async (patientData) => {
    try {
      await patientService.createPatient(patientData);
      await loadPatients();
      setShowForm(false);
      setEditingPatient(null);
    } catch (err) {
      alert('Failed to create patient: ' + err.message);
    }
  };

  const handleUpdatePatient = async (patientData) => {
    try {
      await patientService.updatePatient(editingPatient.id, patientData);
      await loadPatients();
      setShowForm(false);
      setEditingPatient(null);
    } catch (err) {
      alert('Failed to update patient: ' + err.message);
    }
  };

  const handleDeletePatient = async (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        await patientService.deletePatient(id);
        await loadPatients();
      } catch (err) {
        alert('Failed to delete patient: ' + err.message);
      }
    }
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditingPatient(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingPatient(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Patient Management System</h1>
      </header>

      <main className="app-main">
        <div className="controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by name, email, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="btn btn-add" onClick={handleAddNew}>
            + Add New Patient
          </button>
        </div>

        {error && (
          <div className="error-banner">
            {error}
          </div>
        )}

        {loading ? (
          <div className="loading">Loading patients...</div>
        ) : (
          <PatientTable
            patients={filteredPatients}
            onEdit={handleEdit}
            onDelete={handleDeletePatient}
          />
        )}

        {showForm && (
          <PatientForm
            patient={editingPatient}
            onSubmit={editingPatient ? handleUpdatePatient : handleCreatePatient}
            onCancel={handleCancel}
          />
        )}
      </main>
    </div>
  );
}

export default App;
