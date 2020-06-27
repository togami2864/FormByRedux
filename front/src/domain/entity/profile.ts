import { Gender } from "./gender";
import { Phone } from "./phone";
import { Address } from "./address";
import { Career } from "./career";
import { College } from "./college";

export type Profile = {
  name: string;
  description: string;
  birthday: string;
  phone: Phone;
  gender: Gender;
  address: Address;
  college: College;
  careers: Career[];
};
