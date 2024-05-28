import * as Yup from "yup"
import axios from 'axios'

const phoneRegExp = /^\d{10,12}$/;
const checkApi = 'http://localhost:3080/check-account'

export const rulesUserNameRegister = Yup.object().shape({
    userName: Yup.string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại là bắt buộc').test('isExist', 'Số điện thoại này đã sử dụng',
    (
        async (userName :any) => {
            try {
                console.log(userName)
                const res = await axios.post(checkApi, {userName})
                console.log(res.data?.status)
                if(res.data?.status === "User exists") {
                    return false
                }
                return true
            }
            catch(error) {
                console.log(error)
                return false
            }
        }))
    
    
    })
    
export const rulesPasswordRegister = Yup.object().shape({
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
            /[a-z]/,
            "Password must contain at least one lowercase letter"
        )
        .matches(
            /[A-Z]/,
            "Password must contain at least one uppercase letter"
        )
        .matches(/[0-9]/, "Password must contain at least one digit")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Password must contain at least one special character"
        )
        .required("Password is required"),
});

