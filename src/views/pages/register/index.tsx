import { Link } from "react-router-dom";
import { CustomButton } from "./../../components";
import { ButtonOutline } from "./../../components/button_outline";
import { InputTextLabel } from "./../../components/input_text_label";
import RegisterController from "./../../controllers/register_controller";
import { toFarsiNumber } from "../../../core/utils";

class Register extends RegisterController {
  componentDidMount() {

  }
  render() {
    const { firstName, lastName, phone, password, showPassword, errorsList, minutes, seconds } = this.state;
    return (
      <div
        className="register"
      >
        {/* <img src={LogoLight} className="register-icon" /> */}
        <div className="register-modal">
          <div className="register-modal-header">
            <h3 className="register-modal-header-title">{showPassword ? "احراز شماره همراه " : "ثبت نام"}</h3>
            {!showPassword && 
            <Link to="/">
              <ButtonOutline title={"ورود به پنل"} />
            </Link>
            }
          </div>
          <div className="register-modal-input-group">

            {!showPassword ?
              <>
                <div className="register-modal-input-group-name">
                  <div className="ms-1 w-50">
                    <InputTextLabel
                      value={firstName}
                      title={"نام"}
                      placeholder={""}
                      type={"text"}
                      errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "firstName")[0]?.message}
                      name="firstName"
                      onChange={(event) => {
                        this.setState({ firstName: event.currentTarget.value });
                      }}
                    />
                  </div>
                  <div className="me-1 w-50">
                    <InputTextLabel
                      value={lastName}
                      title={"نام خانوادگی"}
                      placeholder={""}
                      type={"text"}
                      name="lastName"
                      errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "lastName")[0]?.message}
                      onChange={(event) => {
                        this.setState({ lastName: event.currentTarget.value });
                      }}
                    />
                  </div>
                </div>
                <div className="register-modal-input-group-phone">
                  <InputTextLabel
                    value={phone}
                    title={"شماره تماس"}
                    placeholder={""}
                    type={"number"}
                    name="phone"
                    errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "phone")[0]?.message}
                    onChange={(event) => {
                      this.setState({ phone: event.currentTarget.value });
                    }}
                  />
                </div>

                <CustomButton loading={this.state.loading} onClick={() => this.registerUser()} title={"ثبت نام"} />

              </>

              :
              <><div className="register-modal-input-group-phone">
                <InputTextLabel
                  value={password}
                  title={"کد ارسال شده "}
                  placeholder={""}
                  type={"number"}
                  name="password"
                  errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "password")[0]?.message}
                  onChange={(event) => {
                    this.setState({ password: event.currentTarget.value });
                  }} />
              </div>
                <CustomButton loading={this.state.loading} onClick={() => this.state.resend ? this.handleResendCode() : this.otpRegister()}
                  title={`${this.state.resend ? " ارسال مجدد کد " : `${toFarsiNumber(minutes)} ${minutes > 0 ? ":" : " "} ${toFarsiNumber(seconds) < 10 ? toFarsiNumber("0") + toFarsiNumber(seconds) : toFarsiNumber(seconds)} `}`} />
              </>
            }


          </div>

        </div>

      </div>
    );
  }
}

export default Register;
