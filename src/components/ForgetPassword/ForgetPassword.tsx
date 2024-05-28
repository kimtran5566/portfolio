import React from "react";
import CustomInput from "components/CustomForm/CustomInputLoginRegister/CustomInput";
import CustomButtonLoginRegister from "components/CustomForm/CustomButtonLoginRegister/CustomButtonLoginRegister";
import { dataUserAdd } from "components/Register/slice/dataUserSlice";
import { Form, Formik } from "formik";
import { useAppDispatch } from "hooks/reduxHook/reduxHook";
import { rulesUserNameForgetPassword } from "./data/rulesUserNameForgetPassword";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="w-[1040px] mx-auto min-h-[600px] flex justify-center items-center">
      <div className="flex flex-col py-[50px]">
        <div className="w-[500px] box-border shadow-[0_3px_10px_0_rgba(0,0,0,.14)] rounded">
          <div className="min-h-[80px] box-border flex justify-center items-center w-full">
            <button
              type="button"
              className="w-[80px] cursor-pointer flex justify-center items-center"
              onClick={() => handleClick()}
            >
              <svg viewBox="0 0 22 17" className="w-6 h-6 p-1 ">
                <g
                  fill="#ee4d2d"
                  stroke="none"
                  strokeWidth="2"
                  fillRule="evenodd"
                  transform="translate(-3, -6)"
                >
                  <path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"></path>
                </g>
              </svg>
            </button>
            <div className="flex flex-1 justify-center items-center text-lg pr-[80px] font-medium ">
              <p>Đặt lại mật khẩu</p>
            </div>
          </div>
          <div className="px-[80px] pb-[64px]">
            <Formik
              initialValues={{
                userName: "",
              }}
              validationSchema={rulesUserNameForgetPassword}
              onSubmit={(value, { setSubmitting, resetForm }) => {
                console.log(value);
                dispatch(dataUserAdd({ ...value, password: "", token: "" }));
                setSubmitting(false);
                resetForm();
                navigate("/reset/pwd", {
                  state: { pathFrom: "/reset" },
                });
              }}
              isValid
              validateOnChange={false}
            >
              {({ isValid }) => (
                <Form>
                  <CustomInput
                    name="userName"
                    label=""
                    type="text"
                    placeholder="Nhập số điện thoại"
                  />

                  <CustomButtonLoginRegister
                    disabled={!isValid}
                    nameButton="Tiếp Theo"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
