import { InsuranceInfo } from './insuranceInfo';
import { EmployeeInfo } from './employeeInfo';

export class mortgagedetails {
  application_id: string;
  first_name: string;
  last_name: string;
  address: string;
  contact_number: string;
  company_name: string;
  company_contact: string;
  email_id: string;
  company_address: string;
  status: string;
  msid: string;
  mortgage_value: number;
  insuranceInfo: InsuranceInfo;
  employeeInfo: EmployeeInfo;
}
