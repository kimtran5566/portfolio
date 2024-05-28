import * as Yup from "yup"

const phoneRegExp = /^\d{10,12}$/;

export const rulesUserNameForgetPassword = Yup.object().shape({
    userName: Yup.string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại là bắt buộc')
    
    })