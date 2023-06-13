import { Component } from "react";
import * as yup from 'yup'
import { toast } from "react-toastify";
import { call_api, parseJSON } from "../../core/service";
import { AppConstants } from "../../core/constants";
interface IProps { }

interface IState {
  details: any;
  loading: boolean;
  loadingChangePassword: boolean;
  uploadLoading: boolean;
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  phone?: string;
  automaticSave: string;
  availebleProfileImage?: any;
  profileImage?: any,
  profileImageUpload?: any,
  errorsList?: any,
  firstNameValidation?: string
  localPassword?: string;
  instagram?: string;
  whatsapp?: string;
  telegram: string,
  mobile: string,
  userRole: string,
  registeryDate: string,
  gender: string;
  setPasswordmodal: boolean;
  newPassword: string,
  repeatPassword: string,
  otpCode?:string;
  showPasswordOtp?:boolean;
}

export class ProfileControll extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      details: [],
      loading: false,
      loadingChangePassword: false,
      uploadLoading: false,
      firstName: "",
      lastName: "",
      companyName: "",
      automaticSave: "",
      email: "",
      phone: "",
      localPassword: "",
      newPassword: "",
      repeatPassword: "",
      instagram: "",
      whatsapp: "",
      telegram: "",
      mobile: "",
      firstNameValidation: "",
      availebleProfileImage: "",
      profileImage: "",
      profileImageUpload: "",
      errorsList: [],
      userRole: "",
      registeryDate: "",
      gender: "",
      setPasswordmodal: false,
      otpCode:"",
      showPasswordOtp:false
    };
  }

  async getUserDetails() {
    this.setState({ loading: true })
    call_api({
      address_api: `${AppConstants.base_url_api}seller/users/${window.location.pathname.split("/")[2]}`,
      method_api: "GET"
    })
      .then(parseJSON)
      .then(([status, j]) => {
        if (status === 200) {
          this.setState({ loading: false })
          if (j.data.password_is_changed === 1) {
            this.setState({
              setPasswordmodal: false
            })
          } else {
            this.setState({
              setPasswordmodal: true
            })
          }
        } else if (status === 401) {
          this.setState({ loading: false })
          localStorage.clear();
        } else {
          this.setState({ loading: false })
          toast.error(j?.errors);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  async updateCurrentUser() {
    this.setState({ uploadLoading: true })

    const data = new FormData()

  };

  async updatetUser(id: number) {

  };

  async handleProfileImageUpload(event: any) {
    let news_image_file = null;
    news_image_file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(news_image_file);
    reader.onloadend = () => {
      this.setState({ profileImage: reader.result });
    }
    if (news_image_file) {
      this.setState({ profileImageUpload: news_image_file });

    }
    this.setState({ availebleProfileImage: "" });

  }
  handleDeleteProfileImage = () => {
    this.setState({
      profileImage: ""
    })
    this.setState({
      profileImageUpload: ""
    })
    this.setState({
      availebleProfileImage: ""
    })
  }
  handleClose = () => {
    this.setState({
      setPasswordmodal: false
    })
  };
  async handleSetPassword() {

    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    const { newPassword, repeatPassword } = this.state;
    const otpRegisterSchema = yup.object({
      newPassword: yup.string().required(" رمز ورود الزامی می باشد  ").min(8, 'کد ورود کمتر از 8 رقم نمی باشد').max(255, 'کد ورود بیشتر از 255 رقم نمی باشد').matches(passwordRegExp, 'فرمت وارد شده صحیح نمی باشد رمز عبور باید حداقل شامل یک حرف بزرگ , یک حرف کوچک  , یک عدد و یک سیمبل باشد'),

      repeatPassword: yup.string().required(" رمز ورود الزامی می باشد  ").min(8, 'کد ورود کمتر از 8 رقم نمی باشد').max(255, 'کد ورود بیشتر از 255 رقم نمی باشد').matches(passwordRegExp, 'فرمت وارد شده صحیح نمی باشد رمز عبور باید حداقل شامل یک حرف بزرگ , یک حرف کوچک  , یک عدد و یک سیمبل باشد').oneOf([yup.ref('newPassword')], 'رمز عبور و تکرار ان با هم مطابقت ندارند')

    });

    try {

      this.setState({ loadingChangePassword: true })
      await otpRegisterSchema.validate({ newPassword , repeatPassword }, { abortEarly: false });

      call_api({
        address_api: `${AppConstants.base_url_api}set-password/${window.location.pathname.split("/")[2]}`,
        method_api: "POST",
        body: JSON.stringify({
          password: newPassword,
          password_confirmation: repeatPassword,
        })
      })
        .then(parseJSON)
        .then(([status, j]) => {
          this.setState({ errorsList: [] })
          if (status === 200) {
            this.setState({
              showPasswordOtp: true
            })
            this.setState({ loadingChangePassword: false })
          } else if (status === 401) {
            this.setState({ loadingChangePassword: false })
            toast.error(j?.errors);
            localStorage.clear();
          } else {
            console.warn(status, j);
            this.setState({ loadingChangePassword: false })
            toast.error(j?.errors);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (err: any) {
      this.setState({ loadingChangePassword: false })
      this.setState({ errorsList: err.inner })


    }

  }
  async handlePasswordOtp() {

    const { otpCode, phone } = this.state;
    const otpRegisterSchema = yup.object({
      otpCode: yup.string().required(" رمز ورود الزامی می باشد  ").min(4, 'کد ورود کمتر از 4 رقم نمی باشد').max(6, 'کد ورود بیشتر از 6 رقم نمی باشد'),
    });

    try {

      this.setState({ loadingChangePassword: true })
      await otpRegisterSchema.validate({ otpCode }, { abortEarly: false });

      call_api({
        address_api: `${AppConstants.base_url_api}seller/change-password/otp/${window.location.pathname.split("/")[2]}`,
        method_api: "POST",
        body: JSON.stringify({
          PATCH: otpCode,
        })
      })
        .then(parseJSON)
        .then(([status, j]) => {
          if (status === 200) {
            this.setState({ errorsList: [] })
            this.setState({ loadingChangePassword : false })
            this.setState({
              setPasswordmodal: false
            })
            this.setState({
              showPasswordOtp: false
            })
          } else if (status === 401) {
            this.setState({ loading: false })
            toast.error(j?.errors?.message);
            localStorage.clear();
          } else {
            this.setState({ loadingChangePassword: false })
            toast.error(j?.errors);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (err: any) {

      this.setState({ loadingChangePassword: false })
      this.setState({ errorsList: err.inner })
    }

  }
}
export default ProfileControll;
