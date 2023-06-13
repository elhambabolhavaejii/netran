import { Link } from "react-router-dom";
import { LoadingSpinner, InputTextLabel, ButtonOutline, CustomButton } from "./../../components";
import LoginControll from "../../controllers/login_controll";
import { toFarsiNumber } from "../../../core/utils";
class Login extends LoginControll {
  render() {
    const { phone, password, otpCode, status, errorsList , minutes , seconds , resend } = this.state;
    return (
      <div
        className="login"
      >
        {/* <img src={LogoLight} className="login-icon" /> */}
        <div className="login-modal">
          <div className="login-modal-header">
            <h3 className="login-modal-header-title">ورود به پنل</h3>
            {status === 0 && 
            <Link to="/register">
              <ButtonOutline title={"ثبت نام"} />
            </Link>
            }
          </div>
          <div className="login-modal-input-group">

            {status === 0 &&
              <div className="login-modal-input-group-email">
                <InputTextLabel
                  value={phone}
                  title={"شماره موبایل"}
                  placeholder={"شماره موبایل خود را وارد کنید"}
                  type={"number"}
                  name="phone"
                  errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "phone")[0]?.message}
                  onChange={(event) =>
                    this.setState({ phone: event.currentTarget.value })
                  }
                />
              </div>
            }
            {status === 1 &&
              <>
                <div className="login-modal-input-group-password">
                  <InputTextLabel
                    value={password}
                    title={"رمز ورود"}
                    placeholder={"رمز خود را وارد کنید"}
                    type={"string"}
                  name="password"
                  errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "password")[0]?.message}
                    onChange={(event) =>
                      this.setState({ password: event.currentTarget.value })
                    }
                  />
                </div>
                <div>
                <div className="login-modal-otp-code" onClick={() => this.handleChangeStatus()}>

ارسال مجدد رمز یکبار مصرف

</div>

<div className="login-modal-forgot-passsword">
<span onClick={() => this.handleChangeForgetPassword()} className="login-modal-forgot-passsword-link">
فراموشی رمز عبور 
</span>
</div>
                </div>

              </>
            }

            {status === 2 &&

              <div className="login-modal-input-group-password">
                <InputTextLabel
                  value={otpCode}
                  title={"رمز یک بار مصرف"}
                  placeholder={"رمز یک بار مصرف خود را وارد نمایید"}
                  type={"number"}
                  errortext={errorsList && errorsList?.filter((obj: any) => obj.path === "otpCode")[0]?.message}
                  onChange={(event) =>
                    this.setState({ otpCode: event.currentTarget.value })
                  }
                />
              </div>

            }

          </div>

          <div className="login-modal-button">


            {status === 2 ?


              <CustomButton loading={this.state.loading} onClick={() => this.state.resend ? this.handleResendCode() : this.otpLogin()}
                title={`${this.state.resend ? " ارسال مجدد کد " : `${toFarsiNumber(minutes)} ${minutes > 0 ? ":" : " "} ${toFarsiNumber(seconds) < 10 ? toFarsiNumber("0") + toFarsiNumber(seconds) : toFarsiNumber(seconds)} `}`} />

              :


              <CustomButton loading={this.state.loading}
                onClick={() => { status === 0 ? this.handleLogin() : this.handleSendPassword() 
                 }}
                title={status === 0 ? "ورود" : "رمز خود را وارد کنید "} />
            }
          </div>

        </div>
      </div>
    );
  }
}

export default Login;
