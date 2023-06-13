import { Component } from "react";
import { toast } from "react-toastify";
import { call_api, parseJSON } from "../../core/service";
import { AppConstants } from "../../core/constants";
import * as yup from 'yup'
interface IProps { }

interface IState {
  firstName: string;
  lastName: string;
  phone?: string;
  password: string;
  showPassword: boolean,
  loading: boolean;
  errorsList?: any,
  minutes: number,
  seconds: number,
  resend: boolean
}

export class RegisterControll extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      showPassword: false,
      loading: false,
      errorsList: [],
      minutes: 2,
      seconds: 0,
      resend: false
    }
  }



  async registerUser() {
    const { firstName, lastName, phone } = this.state;
    const phoneRegExp = /^09\d{9}$/
    const registerSchema = yup.object({
      firstName: yup.string().required("نام الزامی می باشد ").max(255, 'کد ورود بیشتر از 255 رقم نمی باشد'),
      lastName: yup.string().required(" نام خانوادگی الزامی می باشد ").max(255, 'کد ورود بیشتر از 255 رقم نمی باشد'),
      phone: yup.string().required(" شماره تماس الزامی می باشد  ").matches(phoneRegExp, 'فرمت وارد شده صحیح نمی باشد'),
    });

    try {

      this.setState({ loading: true })
      await registerSchema.validate({ firstName, lastName, phone }, { abortEarly: false });

      call_api({
        address_api: `${AppConstants.base_url_api}register`,
        method_api: "POST",
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          mobile: phone,
        })
      })
        .then(parseJSON)
        .then(([status, j]) => {
          if (status === 200) {
            this.setState({ errorsList: [] })
            this.setState({ loading: false })
            this.setState({ showPassword: true })
            this.handleTimer()
          } else if (status === 401) {
            this.setState({ loading: false })
            toast.error(j?.error?.message);
            localStorage.clear();
          } else {
            console.warn(status, j);
            this.setState({ loading: false })
            toast.error(j?.message);
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



  };


  async otpRegister() {
    const { password, phone } = this.state;
    const otpRegisterSchema = yup.object({
      password: yup.string().required(" رمز ورود الزامی می باشد  ").min(4, 'کد ورود کمتر از 4 رقم نمی باشد').max(6, 'کد ورود بیشتر از 6 رقم نمی باشد'),
    });

    try {

      this.setState({ loading: true })
      await otpRegisterSchema.validate({ password }, { abortEarly: false });

      call_api({
        address_api: `${AppConstants.base_url_api}register/otp`,
        method_api: "POST",
        body: JSON.stringify({
          otp: password,
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
            this.setState({ password: "" })
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

  };



  getPhoneNumber(text?: string) {
    this.setState({ phone: text });
  };


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
    this.setState({ minutes: 2 })
    this.setState({ seconds: 0})
    this.setState({ resend: false })
    this.handleTimer()
    this.registerUser()

  }
}
export default RegisterControll;
