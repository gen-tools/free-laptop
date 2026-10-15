export type WizardStep = 'FORM' | 'SCANNING' | 'APPROVED' | 'PRANK';

export interface StudentFormData {
  fullName: string;
  rollNumber: string;
  institution: string;
  academicLevel: string;
  gpa: string;
  preferredModel: string;
  preferredColor: string;
  hoursStudied: number;
}

export interface ScannerLog {
  id: number;
  text: string;
  status: 'info' | 'success' | 'warn';
  delay: number;
}
