import { Component } from "react";
import { toast } from "react-toastify";
import { call_api, parseJSON } from "../../core/service";
import { AppConstants } from "../../core/constants";
import * as yup from 'yup'
interface IProps { }

interface IState {
  password: string;
  phone: string;
  login: boolean;
  error: boolean;
  loading: boolean;
  activeCheckBox: boolean;
  status: number;
  otpCode: string;
  errorsList?: any,
  resend: boolean;
  minutes: number,
  seconds: number,

}

export class 
LoginControll extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      password: "",
      phone: "",
      login: false,
      error: false,
      loading: false,
      activeCheckBox: false,
      status: 0,
      otpCode: "",
      errorsList: [],
      resend: false,
      minutes: 0,
      seconds: 10,

    };
  }


  // routeHome = () => {
  //   localStorage.setItem("login", "true");
  // };
  async handleLogin() {

    const { phone } = this.state;
    const phoneRegExp = /^09\d{9}$/
    const loginSchema = yup.object({
      phone: yup.string().required(" شماره تماس الزامی می باشد  ").matches(phoneRegExp, 'فرمت وارد شده صحیح نمی باشد'),

    });

    try {

      this.setState({ loading: true })
      await loginSchema.validate({ phone }, { abortEarly: false });

      call_api({
        address_api: `${AppConstants.base_url_api}login`,
        method_api: "POST",
        body: JSON.stringify({
          mobile: phone,
        })
      })
        .then(parseJSON)
        .then(([status, j]) => {
          this.setState({ errorsList: [] })
          if (status === 200) {
            this.setState({ status: 1 })
            this.setState({ loading: false })
            if (j.data.password_is_changed === 1) {
              this.setState({ status: 1 })
            } else {
              this.setState({ status: 2 })
              this.handleTimer()
            }
            window.localStorage.setItem('token', j.object.access)
            window.location.href = "/#/home"
            this.setState({ loading: false })
          } else if (status === 401) {
            this.setState({ loading: false })
            toast.error(j?.error?.message);
            localStorage.clear();
          } else {
            console.warn(status, j);
            this.setState({ loading: false })
            toast.error(j?.errors);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (err: any) {
      console.log(err.inner)
      this.setState({ loading: false })
      this.setState({ errorsList: err.inner })
    }
  }
  handleChangeStatus = () => {
    this.setState({ status: 2 })
    this.handleTimer()
  }
  async handleSendPassword() {
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const { password, phone } = this.state;
    const otpRegisterSchema = yup.object({
      password: yup.string().required(" رمز ورود الزامی می باشد  ").min(8, 'کد ورود کمتر از 8 رقم نمی باشد').max(255, 'کد ورود بیشتر از 255 رقم نمی باشد').matches(passwordRegExp, 'فرمت وارد شده صحیح نمی باشد رمز عبور باید حداقل شامل یک حرف بزرگ , یک حرف کوچک  , یک عدد و یک سیمبل باشد'),
    });

    try {

      this.setState({ loading: true })
      await otpRegisterSchema.validate({ password }, { abortEarly: false });

      call_api({
        address_api: `${AppConstants.base_url_api}login-password`,
        method_api: "POST",
        body: JSON.stringify({
          password: password,
          password_confirmation: password,
          mobile: phone
        })
      })
        .then(parseJSON)
        .then(([status, j]) => {
          this.setState({ errorsList: [] })
          if (status === 200) {
            window.location.href = "/home"
            this.setState({ loading: false })
            this.setState({ password: "" })
          } else if (status === 401) {
            this.setState({ loading: false })
            toast.error(j?.errors);
            localStorage.clear();
          } else {
            console.warn(status, j);
            this.setState({ loading: false })
            toast.error(j?.errors);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (err: any) {
      this.setState({ loading: false })
      this.setState({ errorsList: err.inner })

      console.log(err.inner,"err.inner")

    }
  }
  async otpLogin() {
    const { otpCode, phone } = this.state;
    const otpRegisterSchema = yup.object({
      otpCode: yup.string().required(" رمز ورود الزامی می باشد  ").min(4, 'کد ورود کمتر از 4 رقم نمی باشد').max(6, 'کد ورود بیشتر از 6 رقم نمی باشد'),
    });

    try {

      this.setState({ loading: true })
      await otpRegisterSchema.validate({ otpCode }, { abortEarly: false });

      call_api({
        address_api: `${AppConstants.base_url_api}login/otp`,
        method_api: "POST",
        body: JSON.stringify({
          otp: otpCode,
          mobile: phone,
        })
      })
        .then(parseJSON)
        .then(([status, j]) => {
          if (status === 200) {
            window.localStorage.setItem('token', j.data.token)
            this.setState({ errorsList: [] })
            window.location.href = `/profile/${j.data.user.id}`
            this.setState({ loading: false })
          } else if (status === 401) {
            this.setState({ loading: false })
            toast.error(j?.errors?.message);
            localStorage.clear();
          } else {
            this.setState({ loading: false })
            toast.error(j?.errors);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (err: any) {

      this.setState({ loading: false })
      this.setState({ errorsList: err.inner })

    }

  }



  handleTimer = () => {
    let myInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 })

      }
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          clearInterval(myInterval)
          this.setState({ resend: true })

        } else {
          this.setState({ minutes: this.state.minutes - 1 })

          this.setState({ seconds: 59 })

        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  }

  handleResendCode = () => {
    this.setState({ minutes: 0 })
    this.setState({ seconds: 10 })
    this.setState({ resend: false })
    this.handleTimer()
    this.otpLogin()

  }
  async handleChangeForgetPassword () {
    const {phone} = this.state ; 
      call_api({
        address_api: `${AppConstants.base_url_api}forget-password`,
        method_api: "POST",
        body: JSON.stringify({
          mobile: phone,
        })
      })
        .then(parseJSON)
        .then(([status, j]) => {
          if (status === 200) {
            this.handleChangeStatus()
          } else if (status === 401) {
            this.setState({ loading: false })
            toast.error(j?.errors?.message);
            localStorage.clear();
          } else {
            this.setState({ loading: false })
            toast.error(j?.errors);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (err: any) {

      this.setState({ loading: false })
      this.setState({ errorsList: err.inner })


  }
}
export default LoginControll;
