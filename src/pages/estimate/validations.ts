import * as yup from 'yup';

export const rideFormValidations = yup.object().shape({
    customer_id: yup.string().required('ID do usuário obrigatório!'),
    origin: yup.string().required('Endereço de origem obrigatório!'),
    destination: yup.string().required('Endereço de destino obrigatório!')
});