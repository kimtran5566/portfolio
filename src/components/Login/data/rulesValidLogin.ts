import * as Yup from "yup";


 const rulesValidLogin = Yup.object().shape({
    userName: Yup.string()
        .min(4, "User name must be at least 4 characters")
        .required("Required"),
        
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
})
export default rulesValidLogin