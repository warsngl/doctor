import { defineStore } from "pinia";
import type { Doctor, Nurse } from "@/types";

export const useDoctorsStore = defineStore("doctors", {
  state: () => ({
    doctors: [
      { id: 1, name: "Иванов И.И.", department: "cardiology", isHead: true },
      { id: 2, name: "Петров П.П.", department: "surgery", isHead: false },
    ] as Doctor[],
  }),
  getters: {},
  actions: {
    saveDoctor(doctor: Doctor) {
      if (doctor.id) {
        const index = this.doctors.findIndex((d) => d.id === doctor.id);
        this.doctors[index] = doctor;
      } else {
        doctor.id = Math.max(...this.doctors.map((d) => d.id)) + 1;
        this.doctors.push(doctor);
      }
    },
    deleteDoctor(id: number) {
      this.doctors = this.doctors.filter((d) => d.id !== id);
    },
  },
});
export const useNursesStore = defineStore("nurses", {
  state: () => ({
    nurses: [
      { id: 1, name: "Сидорова С.С.", department: "cardiology" },
      { id: 2, name: "Павлова П.П.", department: "surgery" },
    ] as Nurse[],
  }),
  actions: {
    saveNurse(nurse: Nurse) {
      if (nurse.id) {
        const index = this.nurses.findIndex((d) => d.id === nurse.id);
        this.nurses[index] = nurse;
      } else {
        nurse.id = Math.max(...this.nurses.map((d) => d.id)) + 1;
        this.nurses.push(nurse);
      }
    },
    deleteNurse(id: number) {
      this.nurses = this.nurses.filter((d) => d.id !== id);
    },
  },
});
