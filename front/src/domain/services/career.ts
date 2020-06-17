import { Career } from "../entity/career";

export const exitEmptyCareers = (careers: Career[]) =>
  careers.some((c) => isEmptyCareer(c));

const isEmptyCareer = (career: Career) => {
  console.log(career);
  console.log(Object.values(career));
  return Object.values(career).every((v) => !v);
};
