import { Header } from "../../components";
import FaqController from "../../controllers/faq_controller";
// import { FaqBanner } from "../../../../assets";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { FaBlog } from "@react-icons/all-files/fa/FaBlog";


import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
class Faq extends FaqController {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="faq">
        <h1 className="faq-title"> سوالات متداول </h1>
        <Header isActive="isFaq" />
        <div
          className="faq-banner"
        //   style={{ backgroundImage: "url(" + FaqBanner + ")" }}
        >
          <div className="faq-banner-content">
            <span className="faq-banner-content-title">
              بذارین چند سوال رو جواب بدیم
            </span>
            <span className="faq-banner-content-desc">
              می‌تونین یکی از دسته بندی‌ها رو انتخاب کنین
            </span>
          </div>
        </div>
        <div className="faq-content">
          <div className="vertical-tabs">
            <div
              className={
                this.state.tab === 0
                  ? "vertical-tabs-item active"
                  : "vertical-tabs-item "
              }
              onClick={() => this.setState({ tab: 0 })}
            >
              سوالات متداول
            </div>
            <div
              className={
                this.state.tab === 1
                  ? "vertical-tabs-item active"
                  : "vertical-tabs-item "
              }
              onClick={() => this.setState({ tab: 1 })}
            >
              مانیتایز
            </div>
            <div
              className={
                this.state.tab === 2
                  ? "vertical-tabs-item active"
                  : "vertical-tabs-item "
              }
              onClick={() => this.setState({ tab: 2 })}
            >
              تنظیمات کانال
            </div>
            <div
              className={
                this.state.tab === 3
                  ? "vertical-tabs-item active"
                  : "vertical-tabs-item "
              }
              onClick={() => this.setState({ tab: 3 })}
            >
              محتوا و کپی رایت
            </div>
            <div
              className={
                this.state.tab === 4
                  ? "vertical-tabs-item active"
                  : "vertical-tabs-item "
              }
              onClick={() => this.setState({ tab: 4 })}
            >
              نقد کردن درامد
            </div>
          </div>

          <UncontrolledAccordion>
            {this.state.tab === 0 && (
              <>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    یوتیوب چطوری کار میکنه و چطور میشه از یک کانال یوتیوب کسب
                    درآمد کرد؟
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    یوتیوب یه سوشال مدیای قدرتمنده که با کمک به شما برای نمایش
                    ویدیوهات و تبلیغ روی اونا برای خودش و تو درآمدزایی میکنه اما
                    برای اینکه بتونی این تبلیغات رو روی کانالت داشته باشی باید
                    1000 سابسکرایبر و همچنین ویدیوهات در 365 روز گذشته 4000 ساعت
                    دیده شده باشن همینقدر بدون که فقط 55 درصد از درآمدی که
                    یوتیوب از محل تبلیغات داره رو به تو میده و 45 درصد بقیه رو
                    خودش برمیداره
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    برای اینکه یک کانال یوتیوب داشته باشم باید چه کارهایی انجام
                    بدم؟
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    اول باید یک اکانت GMAIL داشته باشی یا اگر GMAIL نداری، از
                    این آدرس میتونی به صفحه ساخت اون بری و یک اکانت برای خودت
                    بسازی حالا یا همون اکانت رو تبدیل به یه اکانت عمومی کن یا
                    اینکه یک کانال عمومی بساز برای ساخت کانال عمومی کارهای زیر
                    رو انجام بده: برو تو سایت یوتیوب و با اکانتی که ساختی لاگین
                    کن برو تو لیست کانال های من (این لینک) روی گزینه ی ساخت
                    کانال جدید کلیک کن ( Create a new channel) حالا مشخصاتی که
                    ازت میخواد رو پر کن، مثل اسم کانال و تمام
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">
                    برای اینکه یوتیوبری رو شروع کنم بهتره کانالم پرسونال باشه یا
                    برند؟
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    اگر بخواهی بعدا به صورت حرفه ای یوتیوب رو ادامه بدی در آینده
                    ای دور یا نزدیک نیاز داری تا بخشهایی از کارها رو به ادمین
                    های مختلف یا MCN واگذار کنی، پس به جای اینکه بخواهی ایمیل و
                    پسوردت رو به اوناها بدی، بهتره که به اونها دسترسی بدی تا
                    بتونن کارها رو انجام بدن
                  </AccordionBody>
                </AccordionItem>
              </>
            )}

            {this.state.tab === 1 && (
              <>
                <AccordionItem>
                  <AccordionHeader targetId="4">
                    اگر 365 روز یا یک سال از کانالم بگذره واچ تایم کانالم صفر
                    میشه و باید از اول شروع کنم؟
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    نه دوست عزیز، محاسبه این مقدار واچ تایم به این صورت هست که
                    هر یک روز که جلوتر بری آمار روز جدید به میزان واچ تایم کانال
                    شما اضافه میشه و مقدار واچ تایم روز اول این 365 روز از میزان
                    واچ تایم کانالت کم میشه، پس اگر به طور مداوم روی کانالت کار
                    کنی نباید نگران چیزی باشی
                  </AccordionBody>
                </AccordionItem>
              </>
            )}

            {this.state.tab === 2 && (
              <>
                <AccordionItem>
                  <AccordionHeader targetId="5">
                    اگر کشور رو در تنظیمات کانال یوتیوب ایران انتخاب کنم بعدا
                    برای درآمدزایی به مشکل میخورم؟
                  </AccordionHeader>
                  <AccordionBody accordionId="5">
                    تا قبل از فعال کردن درآمدزایی مشکلی نداره، ولی برای
                    درآمدزایی بهتره با کشوری که مربوط به ادسنس شما هست یکی باشه
                  </AccordionBody>
                </AccordionItem>
              </>
            )}

            {this.state.tab === 3 && (
              <>
                <AccordionItem>
                  <AccordionHeader targetId="6">
                    چه محتواهایی میتونم داخل کانالم بزارم و از اون درآمد داشته
                    باشم؟
                  </AccordionHeader>
                  <AccordionBody accordionId="6">
                    محتوایی که تولید خودت باشه و از موزیک و ویدیوی دیگران
                    استفاده نکرده باشی و مهمتر از همه از مواردی که یوتیوب اجازه
                    پخش اون رو نمیده هم نباشه.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="7">
                    یوتیوب با چه محتواهایی مشکل داره که نباید تو اون زمینه
                    فعالیت کنی؟
                  </AccordionHeader>
                  <AccordionBody accordionId="7">
                    برهنگی یا محتوای جنسی محتوای مضر یا خطرناک محتوای مشوق تنفر
                    محتوای خشونت‌آمیز یا دارای صحنه‌های نامناسب آزار و اذیت و
                    مزاحمت سایبری هرزنامه، محتوای دروغ یا گمراه‌کننده و
                    کلاهبرداری تهدیدها جعل هویت حریم خصوصی نقض ایمنی کودکان و …
                  </AccordionBody>
                </AccordionItem>
              </>
            )}

            {this.state.tab === 4 && (
              <>
                <AccordionItem>
                  <AccordionHeader targetId="8">
                    نحوه بستن قرارداد برای نقد کردن درامد کانال به چه صورت هست؟
                  </AccordionHeader>
                  <AccordionBody accordionId="8">
                    مدت زمان قرارداد از لحظه اتصال به ادسنس شرکت 2 سال هست که در
                    این مدت مالکیت کانال در اختیار خودتان خواهد بود و شکرت ما
                    برای انجام کارها تنها دسترسی Manager نیاز دارد. اگر با فرق
                    رول یا دسترسی‌های مختلف در یوتیوب آشنا نیستید به لینک زیر
                    مراجعه کنید: https://www.youtube.com/watch?v=LHib4GFN9Ak
                  </AccordionBody>
                </AccordionItem>
              </>
            )}
          </UncontrolledAccordion>

        </div>
          <div className="faq-footer">

            <span className="faq-footer-title">
            هنوز جواب سوال خود را پیدا نکرده‌اید؟
                </span>
                <span className="faq-footer-desc">
                اگر سوال خود را در سوالات ما پیدا نکردید، می‌توانید با ما در ارتباط باشید، به زودی جواب خواهیم داد!.
                    </span>

                    <div className="faq-footer-container">

                    <div className="faq-footer-container-item">


<div className="icon-container">
    <FaBlog/>
    </div>

                        <span className="title">
                        مشاهده وبلاگ مسترتیوب
                            </span>

                            <span className="desc">
                            آموزش‌های وبلاگ می‌تواند جواب برخی از سوالات شما باشد 
                            </span>
</div>


<div className="faq-footer-container-item">
<div className="icon-container">
    <FaRegEnvelope/>
    </div>
<span className="title">
    تماس با ما 
                            </span>

                            <span className="desc">
                                
با استفاده از این لینک‌ها می‌توانید سریع‌تر ما را پیدا کنید
                            </span>
                    </div>

                    </div>

          </div>

      </div>
    );
  }
}

export default Faq;
