import * as yup from 'yup';

const flightValidation = yup.object().shape({
  from: yup.string().required("Місце відправлення є обов'язковим"),
  to: yup.string().required("Місце прибуття є обов'язковим"),
  departureDate: yup
    .date()
    .typeError('Дата вильоту має бути дійсною датою')
    .required("Дата вильоту є обов'язковою"),
  returnDate: yup
    .date()
    .typeError('Дата повернення має бути дійсною датою')
    .min(yup.ref('departureDate'), "Дата повернення має бути після дати вильоту")
    .required("Дата повернення є обов'язковою"),
});

export default flightValidation;
