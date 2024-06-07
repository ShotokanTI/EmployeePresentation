import employees from "~/mocks/employee/data/employee.data";
import type { Employee } from "~/mocks/employee/interfaces/employee.interface";

export const useEmployeeList = () => useState<Employee[]>('employeeList', () => employees)