import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  shift_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
