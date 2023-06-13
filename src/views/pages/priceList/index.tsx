import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import priceListController from "../../controllers/priceList_controller";
import { Header } from "../../components/header";
import MaterialTable from "@material-table/core";
import "react-datepicker/dist/react-datepicker.css";
import { Card } from "reactstrap";
import Select, { components } from "react-select";
import { Input } from "reactstrap";
import { alertButtonsState } from "../../../core/utils";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCheckSquare } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import { SubmissionAlert } from "../../components";
import { CustomButton, DropDownIcon, LoadingSpinner } from "../../components";
import { FiAlertTriangle } from "react-icons/fi";
import { InputIcon } from '../../components/input_icon';
import { InputTextLabel } from "../../components/input_text_label";

import { createTheme , ThemeProvider} from '@mui/material';
class PriceList extends priceListController {
  componentDidMount() {
    this.getPlatformListData();
    window.scrollTo(0, 0);
  }
  render() {
    const {column,toggleModal,priceInputAcolOne,priceInputBcolOne,priceInputCcolOne,priceInputDcolOne,
    priceInputAcolTwo, priceInputBcolTwo, priceInputCcolTwo,priceInputDcolTwo, groupChangeSelectedOption} = this.state;
    const DropdownIndicator = (props: any) => {
      return (
        components.DropdownIndicator && (
          <components.DropdownIndicator
            style={{ color: "red" }}
            {...props}
          ></components.DropdownIndicator>
        )
      );
    };
    const theme = createTheme({
      typography: {
        fontFamily: 
          'Vazir'
      }    });
    return (
      <ThemeProvider theme={theme}>
        <div className="price-list">
        <h1 className="price-heading">لیست قیمت</h1>
        <Header isActive="isPriceList"/>
        <div className="custom-tabel">
      
              <Card className="main-card mb-3">
                <div className="tabel-header">
                  <span className="title">فیلترها</span>
                </div>

                <div className="filter-select-container mb-2 pe-3">
                  <div className="filter-select col-md-3 col-sm-12 col-12">
                    <div className="slick-container">
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            boxShadow: state.isFocused
                              ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                              : "",
                            borderWidth: "1px",
                            backgroundColor: "#F3F3F3",
                            display: "flex",
                            flexDirection: "row-reverse",
                            textAlign: "right",
                            borderRadius: "10px",
                            height: "50px",
                            transitionDuration: "1s",
                            outline: "unset",
                          }),
                        }}
                        onChange={(choice) => this.platformSelected(choice)}
                        components={{ DropdownIndicator }}
                        value={this.state.platformId}
                        isMulti={false}
                        closeMenuOnSelect={false}
                        options={this.state.platformList}
                        getOptionLabel={(option: any) => option.name}
                        getOptionValue={(option: any) => option.uuid}
                        placeholder="همه دسته بندی ها"
                        isClearable
                      />
                    </div>
                  </div>
                  <div className="filter-select col-md-3 col-sm-12 col-12">
                    <div className="slick-container">
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            boxShadow: state.isFocused
                              ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                              : "",
                            borderWidth: "1px",
                            backgroundColor: "#F3F3F3",
                            display: "flex",
                            flexDirection: "row-reverse",
                            textAlign: "right",
                            borderRadius: "10px",
                            height: "50px",
                            transitionDuration: "1s",
                            outline: "unset",
                          }),
                        }}
                        onChange={(choice) => this.packageSelected(choice)}
                        components={{ DropdownIndicator }}
                        value={this.state.packageId}
                        isMulti={false}
                        closeMenuOnSelect={false}
                        options={
                          this.state.platformList?.filter(
                            (i: any) => i.uuid === this.state.platformId?.uuid
                          )[0]?.packages
                        }

                      
                        getOptionLabel={(option: any) => option.name}
                        getOptionValue={(option: any) => option.uuid}
                        placeholder="همه برندها "
                        isClearable
                      />
                    </div>
                  </div>
                  <div className="filter-select col-md-3 col-sm-12 col-12">
                    <div className="slick-container">
                      {toggleModal.buttonClick === alertButtonsState.DELETE &&
                      <SubmissionAlert isOpen={toggleModal.status} title="اخطار!" icon={<FiAlertTriangle color="orange" fontSize="50" />} 
                       details= "از حذف این محصول اطمینان دارید؟"  />
                      }
                      {toggleModal.buttonClick === alertButtonsState.NOTCONFIRMED &&
                      <SubmissionAlert isOpen={toggleModal.status} title="اخطار!" icon={<FiAlertTriangle color="orange" fontSize="50" />} 
                       details= "از عدم تایید این محصول اطمینان دارید؟"  />
                      }
                      {toggleModal.buttonClick === alertButtonsState.NOSELLING &&
                      <SubmissionAlert  isOpen={toggleModal.status} title="اخطار!" icon={<FiAlertTriangle color="orange" fontSize="50" />} 
                       details= "از  غیر قابل فروش کردن این محصول اطمینان دارید؟"  />
                      }
                       
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            boxShadow: state.isFocused
                              ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                              : "",
                            borderWidth: "1px",
                            backgroundColor: "#F3F3F3",
                            display: "flex",
                            flexDirection: "row-reverse",
                            textAlign: "right",
                            borderRadius: "10px",
                            height: "50px",
                            transitionDuration: "1s",
                            outline: "unset",
                          }),
                        }}
                        onChange={(choice) => this.userChoice(choice)}
                        components={{ DropdownIndicator }}
                        value={this.state.users}
                        isMulti
                        closeMenuOnSelect={false}
                        options={this.state.groupChangeOptions}
                        getOptionLabel={(option: any) => option.first_name}
                        getOptionValue={(option: any) => option.uuid}
                        placeholder="وضعیت"
                      />
                    </div>
                  </div>
                  
                    <CustomButton
                      myStyle='price-button'
                      loading={false}
                      onClick={this.handleOpenGroupOperationModal}
                      title="عملیات گروهی "
                    />
                    <Modal
                      open={this.state.openPriceModal}
                      onClose={this.handleClosePriceModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                       <Box sx={{ position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 'max-content',
                          bgcolor: 'background.paper',
                          boxShadow: 24,
                          p: 4,}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            دیگر قیمت ها
            </Typography>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">کد</th>
      <th scope="col">نام</th>
      <th scope="col">قیمت</th>
      <th scope="col">تخفیف</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1234</td>
      <td>تستر شبکه نود یاب ونتولینک مدل NF-8601</td>
      <td className="d-flex flex-column" >
      <InputIcon
             value={priceInputAcolOne}
                inBox={"A"}
                  type={"text"}
                  onChange={(event) =>
                          this.setState({
                            priceInputAcolOne: event.currentTarget.value,
                          })
                        }
                      />
         <InputIcon
             value={priceInputBcolOne}
                inBox={"B"}
                  type={"text"}
                       
                  onChange={(event) =>
                          this.setState({
                            priceInputBcolOne: event.currentTarget.value,
                          })
                        }
                      />

<InputIcon
             value={priceInputCcolOne}
                inBox={"C"}
                  type={"text"}
                       
                  onChange={(event) =>
                          this.setState({
                            priceInputCcolOne: event.currentTarget.value,
                          })
                        }
                      />
<InputIcon
             value={priceInputDcolOne}
                inBox={"D"}
                  type={"text"}
                       
                  onChange={(event) =>
                          this.setState({
                            priceInputDcolOne: event.currentTarget.value,
                          })
                        }
                      />
      </td>
      <td>
        <td className="d-flex flex-column" >
               <InputIcon
                value={priceInputAcolTwo}
                    inBox={"A"}
                      type={"text"}
                          
                      onChange={(event) =>
                              this.setState({
                                priceInputAcolTwo: event.currentTarget.value,
                              })
                            }
                          />        
              <InputIcon
                  value={priceInputBcolTwo}
                  inBox={"B"}
                  type={"text"}
                        
                  onChange={(event) =>
                            this.setState({
                              priceInputBcolTwo: event.currentTarget.value,
                            })
                          }
                        /> 
              <InputIcon
             value={priceInputCcolTwo}
                inBox={"C"}
                  type={"text"}
                       
                  onChange={(event) =>
                          this.setState({
                            priceInputCcolTwo: event.currentTarget.value,
                          })
                        }
                      />         

            <InputIcon
             value={priceInputDcolTwo}
                inBox={"D"}
                  type={"text"}
                       
                  onChange={(event) =>
                          this.setState({
                            priceInputDcolTwo: event.currentTarget.value,
                          })
                        }
                      /> 


      </td></td>
    </tr>
    
  </tbody>
            </table>
        </Box>
                    </Modal>
                    <Modal
                      open={this.state.openBuyPriceModal}
                      onClose={this.handleCloseBuyPriceModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                       <Box sx={{ position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 'max-content',
                          bgcolor: 'background.paper',
                          boxShadow: 24,
                          p: 4,}}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        قیمت خرید تامین کنندگان
                      </Typography>
     
                    </Box>
                    </Modal>
                    <Modal
                      open={this.state.openGroupOperationModal}
                      onClose={this.handleCloseGroupOperationModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                       <Box className="modal-box" sx={{ position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 'fit-content',
                          bgcolor: 'background.paper',
                          boxShadow: 24,
                          p: 4,}}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                          عملیات گروهی                      
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sx={{display:'flex', alignItems:"center", justifyContent:"center"}}>
                          <Grid sx={{color:"red", marginBottom:"20px"}}>
                          توجه در صورت عدم نیاز به هر یک از فیلدهای زیر حتما آن را خالی بگذارید.

                          </Grid>
                        </Grid>
                        <Grid xs={12}>
                        
                        <DropDownIcon
                          value={groupChangeSelectedOption}
                          title={"نوع تغییر گروهی"}
                          placeholder={"نوع تغییر گروهی را انتخاب نمایید"}

                      type={"text"}
                      optionList={this.state.groupChangeOptions}

                      onChange={(event) =>
                        this.setState({groupChangeSelectedOption:event.target.value})

                      }
                    />
                      </Grid>
                        <Grid xs={12}>
                          {groupChangeSelectedOption === "تغییر ثابت" &&
                          <Grid container>
                            <Grid xs={12} lg={2} md={12} sx={{padding:"10px",marginTop:"15px"}}>
                              <InputTextLabel
                                  type="text"
                                  title={"تغییر وزن"}
                                  value={this.state.search}
                                  placeholder={"تغییر وزن"}
                                  onChange={(event)=> this.handleSearch(event)}
                                  className="subscription-management-input"
                                   />
                            </Grid>
                            <Grid xs={12} lg={2}md ={12} sx={{padding:"10px",marginTop:"15px"}} >
                            <InputTextLabel
                                  type="text"
                                  title={"تغییر موجودی"}
                                  value={this.state.search}
                                  placeholder={"تغییر موجودی"}
                                  onChange={(event)=> this.handleSearch(event)}
                                  className="subscription-management-input"
                                   />
                            </Grid>
                            <Grid className="d-flex flex-column"lg={4} md={12} xs={12} sx={{padding:"10px"}}>
                            <label >
                              تغییر قیمت
                              </label>
                              <InputIcon
                                  inBox={"قیمت فروشگاهی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        />     
                                        <InputIcon
                                  inBox={"قیمت شرکتی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        />  
                                        <InputIcon
                                  inBox={"قیمت پیمانکاری"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        /> 
                                        <InputIcon
                                  inBox={"قیمت کلی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        /> 
                            </Grid>
                            <Grid className="d-flex flex-column" lg={4} md={12} xs={12} sx={{padding:"10px"}}>
                            <label >
                              تغییر تخفیف
                              </label>
                              <InputIcon
                                  inBox={"تخفیف فروشگاهی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        />     
                                        <InputIcon
                                  inBox={"تخفیف شرکتی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        />  
                                        <InputIcon
                                  inBox={"تخفیف پیمانکاری"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        /> 
                                        <InputIcon
                                  inBox={"تخفیف کلی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        /> 
                          </Grid>
                          </Grid>
                          }
                           {(groupChangeSelectedOption === "تغییر درصدی افزایشی" || 
                           groupChangeSelectedOption === "تغییر درصدی کاهشی") && 
                          <Grid container>
                         
                            <Grid className="d-flex flex-column"  xs={12}>
                            <label >
                         تغییر قیمت به درصد ( فقط عدد وارد شود)
                              </label>
                              <InputIcon
                                  inBox={"قیمت فروشگاهی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        />     
                                        <InputIcon
                                  inBox={"قیمت شرکتی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                          }
                                        />  
                                        <InputIcon
                                  inBox={"قیمت پیمانکاری"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                          }
                                        /> 
                                        <InputIcon
                                  inBox={"قیمت کلی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                          }
                                        /> 
                            </Grid>
                          </Grid>
                          }
                          {(this.state.groupChangeSelectedOption=== "تغییر افزایشی نسبت به D" || 
                           this.state.groupChangeSelectedOption === "تغییر کاهشی نسبت به D") && 
                          <Grid container>
                         
                            <Grid className="d-flex flex-column"  xs={12}>
                            <label >
                       تغییر قیمت به درصد نسبت به D( فقط عدد وارد شود)
                              </label>
                              <InputIcon
                                  inBox={"قیمت فروشگاهی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                          }
                                        />     
                                        <InputIcon
                                  inBox={"قیمت شرکتی"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                          }
                                        />  
                                        <InputIcon
                                  inBox={"قیمت پیمانکار"}
                                    type={"text"}
                                    onChange={(event) =>
                                            console.log(event.currentTarget.value,)
                                            
                                          }
                                        />      
                            </Grid> 
                          </Grid>
                          }
                      </Grid>
                      <Grid container xs={12}>
                        <Grid xs={4}>
                        <CustomButton myStyle='delete-button' icon={<AiOutlineDelete /> }  loading={false} title="حذف کردن" />
                        </Grid>
                        <Grid sx={{display:"flex"}} xs={4}>
                        <CustomButton myStyle='confirm' icon={<IoAddCircleOutline /> } loading={false} title="تایید محصول" />
                        <CustomButton myStyle='no-confirm' icon={<AiOutlineDelete /> } loading={false} title="عدم تایید محصول" />
                        </Grid>
                        <Grid sx={{display:"flex"}} xs={4}>
                        <CustomButton myStyle='sellable' icon={<AiOutlineDelete /> } loading={false} title="قابل فروش" />
                        <CustomButton myStyle='non-sellable' icon={<AiOutlineDelete /> } loading={false} title="غیر قابل فروش" />
                        </Grid>
                      </Grid>
                      </Grid>
                      <CustomButton
                      myStyle='final-submission-btn'
                      loading={false}
                      title="ثبت نهایی "
                      onClick={this.handleGroupOperation}
                    />
                    </Box>
                    </Modal>
                  <div className="search-section col-md-4 ">
                  <InputTextLabel
                      type={"text"}
                      title={"جستجو"}

                      value={this.state.search}
                      onChange={(event)=> this.handleSearch(event)}
                      className="search-input"
                      placeholder="جستجو..."
                   />   
                    
                 
                </div>
                </div>
                {this.state.loading ? (
                  <div className="spinner-container">
                    <div className="loading-spinner"></div>
                  </div>
                ) : (

                    <MaterialTable
                    onSelectionChange={this.handleSelect}
                    actions={[
                      {
                        icon: ()=> <RiDeleteBin6Line color="red" fontSize="25px" />,
                        tooltip: 'حذف کردن',
                        position: 'row',
                        onClick: (event, rowData) => this.setState({toggleModal:{status:!this.state.toggleModal.status, buttonClick:alertButtonsState.DELETE}})
                      },
                      {
                        icon: ()=><BsCheckSquare  color="green"/>,
                        tooltip: 'عدم تایید',
                        position: 'row',
                        onClick: (event, rowData) => this.setState({toggleModal:{status:!this.state.toggleModal.status, buttonClick:alertButtonsState.NOTCONFIRMED}})
                      },
                      {
                        icon: ()=><AiOutlineCloseCircle color="green" />,
                        tooltip: 'غیر قابل فروش کردن',
                        position: 'row',
                       
                        onClick: (event, rowData) => this.setState({toggleModal:{status:!this.state.toggleModal.status, buttonClick:alertButtonsState.NOSELLING}})
                      },
                      {
                        icon: ()=><BiShowAlt color="green" />                        ,
                        tooltip: 'نمایش',
                        position: 'row',
                        onClick: (event, rowData) =>
                          alert('You want to delete ')
                      }
                    ]}
                      columns={column}        
                      data={[
                        {
                          code:1027,
                          name:'Mehmet',
                          leftOver: <IoAddCircleOutline onClick={this.handleBuyPriceModal} color="green" fontSize="30px"/>
                          ,
                          price: <div className="d-flex justify-content-center align-items-center" >
                            <Input
                              type="text"
                              value={this.state.price}
                              className="subscription-management-input"
                              onChange={(event)=> this.handleChangePrice(event)}
                  
                        />
                        <IoAddCircleOutline onClick={this.handleOpenPriceModal} color="green" fontSize="30px"/>
                          </div> ,
                          offPrice:  <Input
                          type="text"
                          value={this.state.priceOff}
                          className="subscription-management-input"
                          onChange={(event)=> this.handleChangeOffPrice(event)}
                  
                        />,
                        }
                        ]}  
                      
                      options={{
                        toolbar:false,
                        // exportButton: false,
                        search:false,
                        selection: true,
                        actionsColumnIndex: -1,
                        pageSizeOptions:[5,10,20,50,100],
                        paginationType:'stepped',
                        showFirstLastPageButtons:false,
                        sorting:true,
                                 
                      }}    
                      localization={{
                        toolbar: {
                          exportCSVName: "Export some Excel format",
                          exportPDFName: "Export as pdf!!"
                        },
                        header: {
                            actions: 'عملیات'
                        },  
                        pagination:{
                          labelRowsPerPage:"",
                          labelRows:"سطری",

                        }
                      
                    }}
                    // components={{
                    //   Pagination: (props) => {
                    //     return <div>dmx</div>;
                    //   }
                    // }}
                    
                  />
                )}
              </Card>
     
        </div>
      </div>
      </ThemeProvider>

    );
  }
}

export default PriceList;
