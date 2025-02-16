interface Doctor {
  id: number;
  name: string;
  department: 'cardiology' | 'surgery';
  isHead: boolean;
}

interface Nurse {
  id: number;
  name: string;
  department: 'cardiology' | 'surgery';
}

export type { Doctor }
export type { Nurse }
export type Department = 'cardiology' | 'surgery';

export function formatDepartment(department: Department): string {
  return department === 'cardiology' ? 'Кардиологическое' : 'Хирургическое';
}