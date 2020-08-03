export interface Insurance {
  userId: string;
  date: Date;
  company: string;
  plate: string;
  vehicleBrand: string;
  vehicleModel: string;
}

export const InsuranceInitialState: Insurance = {
  userId: null,
  date: null,
  company: null,
  plate: null,
  vehicleBrand: null,
  vehicleModel: null
};
