const API_BASE_URL = 'http://localhost:4000';

export const patientService = {
  // Get all patients
  async getAllPatients() {
    const response = await fetch(`${API_BASE_URL}/patients`);
    if (!response.ok) {
      throw new Error('Failed to fetch patients');
    }
    return response.json();
  },

  // Get patient by ID
  async getPatientById(id) {
    const response = await fetch(`${API_BASE_URL}/patients/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch patient');
    }
    return response.json();
  },

  // Create a new patient
  async createPatient(patientData) {
    const response = await fetch(`${API_BASE_URL}/patients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create patient');
    }
    return response.json();
  },

  // Update patient
  async updatePatient(id, patientData) {
    const response = await fetch(`${API_BASE_URL}/patients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update patient');
    }
    return response.json();
  },

  // Delete patient
  async deletePatient(id) {
    const response = await fetch(`${API_BASE_URL}/patients/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete patient');
    }
    return true;
  },
};
