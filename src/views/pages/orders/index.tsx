import {DropDownIcon, InputIcon , Header, LableIcon, NotificationCard , SubScriptionCard, ButtonTab,CustomButton } from "../../components";
import OrdersController from "../../controllers/orders_controller";
import { Row, Col, Card } from "reactstrap";
import MaterialTable from "@material-table/core";
import {AiFillCreditCard} from "react-icons/ai";
import {GiArmorDowngrade} from "react-icons/gi";
import { BsLink45Deg } from "react-icons/bs";
import { createTheme , ThemeProvider} from '@mui/material';
import { InputTextLabel } from "../../components";
import {AiFillPlusCircle} from "react-icons/ai";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
class Orders extends OrdersController {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { search,openLinkModal,openOrderModal, orderStatusDropDown
    ,selectedOrderStatusDropDown} = this.state;
    const  columns = [ 
      {title:"ردیف", field:"row"},
      {title: "تاریخ", field: "date" },

      {
        title: "وضعیت",
        field: "status",
        export:false
      },
      { title: "خریدار", field: "buyer", export:false},
      {
        title: "قیمت",
        field: "price", export:false
      },
      {
        title: "تخفیف",
        field: "offPrice", export:false
      },
      {
        title: "حمل",
        field: "carriage", export:false
      },
      {
        title: "قیمت نهایی",
        field: "finalPrice", export:false,
        customSort: (a:any, b:any) => a.finalPrice.length - b.finalPrice.length

      },
      {
        title: "پرداخت",
        field: "pay", export:false
      },
      {
        title: "ایجاد کننده",
        field: "creator", export:false
      },
      
      ]
      const theme = createTheme({
      typography: {
        fontFamily: 
          'Vazir'
      }    });
    return (
      <ThemeProvider theme={theme}>
      <div className="orders">
        <h1 className="orders-heading">سفارشات</h1>
        <Header isActive="isOrders" />
        <div className="custom-table">
              <Card className="main-card mb-3">
                <div className="filter-select-container mb-2 pe-3">
                  <div className="filter-select col-md-3 col-sm-12 col-12">
                    <div className="slick-container">
                    <InputTextLabel
                      type={"text"}
                      title={"جستجو"}

                      value={this.state.search}
                      onChange={(event)=> this.handleSearch(event)}
                      className="search-input"
                      placeholder="جستجو..."
                   />                   </div>
                  </div>
                  <div className="filter-select col-md-3 col-sm-12 col-12">
                    <div className="slick-container">
                      
                    </div>
                  </div>
                </div>
                <Modal
                      open={openOrderModal}
                      onClose={this.handleCloseOrderModal}
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
سفارش                  </Typography>
                      <Grid container sm={12} sx={{display:"felx", justifyContent:"space-between"
                    ,border:"1px solid grey"}}>
                        <Grid sx={{display:"felx", flexDirection:"column", padding:"15px"}}>
                        <p>
                          شناسه سفارش : 1243
                        </p>
                        <p>
                          وضعیت:
                          در حال سفارش
                        </p>
                        </Grid>
                        <Grid sx={{display:"felx", flexDirection:"column",padding:"15px"}}>
                        <p>
                          تاریخ سفارش : 1402/3/20
                        </p>
                        <p>
                          وضعیت تحویل: در حال ارسال
                        </p>
                        </Grid>
                       
                      </Grid>
                      <Grid container sm={12} sx={{marginTop:"20px",display:"felx", justifyContent:"space-between"
                    ,border:"1px solid grey"}}>
                        <Grid sx={{display:"felx", flexDirection:"column", padding:"10px"}} sm={4}>
                        <p>
                                گیرنده: فلانی
                        </p>
                        <p>
                          کدپستی:
                          0
                        </p>
                        
                        
                        </Grid>
                        <Grid sx={{display:"felx", flexDirection:"column",padding:"10px"}} sm={4}>
                        
                        <p>
                           موبایل : 09113194873
                        </p>
                        <p>
                           آدرس: تحویل حضوری انبار
                        </p>
                        </Grid>
                        <Grid sx={{display:"felx", flexDirection:"column",padding:"10px"}} sm={4}>
                        
                        <p>
                           در انتظار تایید پرداخت (کارت به کارت)
                        </p>
                        
                        </Grid>
                       
                      </Grid>
                      <Grid container sm={12} sx={{marginTop:"20px",display:"felx", justifyContent:"space-between",border:"1px solid grey"}}>

                      <table className="table">
                        <thead>
                          <tr >
                            <th scope="col">شناسه</th>
                            <th scope="col">تصویر</th>
                            <th scope="col">محصول</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">تخفیف</th>
                            <th scope="col">مبلغ کل</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1234</td>
                            <td><img src=""/></td>
                            <td>پچ پنل لگراند 24 پورت Cat6 UTP</td>
                            <td>1</td>
                            <td>3000000</td>
                            <td>0</td>
                            <td>3000000</td>
                          </tr>
                          <tr className="table-warning">
                            <td colSpan={3} align="center" >مبلغ کل</td>
                            <td>1</td>
                            <td>3000000</td>
                            <td>0</td>
                            <td className="table-danger">3000000</td>
                          </tr>
    
                      </tbody>
                      </table>
                      </Grid>
                      <Grid container sm={12} sx={{marginTop:"20px",display:"felx", justifyContent:"space-between",border:"1px solid grey"}}>
                      <Grid sm={6} sx={{padding:"15px"}}>
                      <DropDownIcon
                      value={selectedOrderStatusDropDown}
                      title={"وضعیت سفارش"}
                      inBox={"وضعیت سفارش"}
                      type={"text"}
                      optionList={orderStatusDropDown}
                      onChange={(event) =>
                        this.setState({
                          selectedOrderStatusDropDown: event.currentTarget.value,
                        })
                      }
                    />  
                      </Grid>
                      <Grid sm={6} >
                      <table className="table">
                      <tbody>
                      <tr>
                          <th>مبلغ کل</th>
                          <td>3000000</td>
                        </tr>
                        <tr>
                          <th>تخفیف:</th>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th>مبلغ حمل و نقل</th>
                          <td>0</td>
                        </tr>
                        <tr>
                          <th>تخفیف کلی روی فاکتور</th>
                          <td>0</td>
                        </tr>
                        <tr className="table-success">
                          <th >مبلغ نهایی</th>
                          <td>300000</td>
                        </tr>
                        </tbody>
                      </table>
                      </Grid>
                     
                      </Grid>
                    </Box>
                    </Modal>
                    <Modal
                      open={openLinkModal}
                      onClose={this.handleCloseLinkModal}
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
                        لینک کوتاه پرداخت مستقیم
                    </Typography>
                    http:f;lkvlkdfkvelkvgerkvgkremvkgrg
                      </Box>
                      </Modal>
                <MaterialTable
                    onSelectionChange={this.handleSelect}
                    actions={[
                      {
                        icon: ()=> <span className="order-btn">سفارش</span>,
                        tooltip: 'سفارش',
                        position: 'row',
                        onClick: (event, rowData) => this.setState({openOrderModal:true})
                      },
                      {
                        icon: ()=> <BsLink45Deg color="blue"/>,
                        tooltip: 'لینک پرداخت سریع',
                        position: 'row',
                        onClick: (event, rowData) => this.setState({openLinkModal:true})
                      },
                      
                      
                    ]}
                      columns={columns}        
                      data={[
                        {
                          id:1,
                          row:1222,
                          parentOnly: "Parent 1",
                          date:"1402/3/13",
                          status:"در حال سفارش",
                          buyer:"فلانی",
                          price:"468899",
                          offPrice:"0",
                          crriage:"",
                          finalPrice:"2133323",
                          pay:<div className="d-flex">
                            <AiFillCreditCard color="blue" fontSize="25px"/>
                            <GiArmorDowngrade color="yellow" fontSize="25px"/>
                            </div>,
                          creator:"فلانی"
                        },
                        {
                          id:2,
                          date:<div>
                          <div className="container">
                            <div className="col-12 text-nowrap" >
                            <p className="justify-content-start d-flex">
                                موبایل کاربر: 0939273764
                            </p>
                            <p className="justify-content-start d-flex">
                              گیرنده:مکاترونیک زاگرس
                            </p>  
                            <p className="justify-content-start d-flex">
                              زمان ارسال: 20 خرداد ساعت 12:33
                            </p>  
                            </div>   
                                                
                        </div>
                        
                          </div>,
                          carriage:<div className="col-12 text-nowrap">

                            
                          <p className="justify-content-start d-flex">
                              وضعیت ارسال: ارسال نشده
                          </p>
                          <p className="justify-content-start d-flex">
                            موبایل گیرنده:087263232                          
                          </p>    
                          <p className="justify-content-start d-flex">
                            آدرس: استان خوزستان- شهر اهواز-  گلستان- پلاک484-کدپستی 4939
                          </p>
                          </div>  ,
                          parentId:1,
                        },
                        {
                        id:1,
                        row:1222,
                        parentOnly: "Parent 1",
                        date:"1402/3/13",
                        status:"در حال سفارش",
                        buyer:"فلانی",
                        price:"468899",
                        offPrice:"0",
                        crriage:"",
                        finalPrice:"21333239",
                        pay:<div className="d-flex">
                          <AiFillCreditCard color="blue" fontSize="25px"/>
                          <GiArmorDowngrade color="yellow" fontSize="25px"/>
                          </div>,
                        creator:"فلانی"
                      },

                        ]}  
                      parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                      // icons={{
                      //     DetailPanel:AiFillPlusCircle,
                      //   }}
                      options={{
                        toolbar:false,
                        search:false,
                        actionsColumnIndex: -1,
                        pageSizeOptions:[5,10,20],
                        paginationType:'stepped',
                        showFirstLastPageButtons:false,
                        sorting: true,
                        // rowStyle: rowData => ({
                        //   backgroundColor: !!rowData.parentOnly ? "#EEE" : "#333"
                        // })
                        
                        // exportButton: true,                        
                      }}    
                     
                      localization={{
                       
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
                  
                </Card>
                </div>
                </div>
                </ThemeProvider> 
    )
  }
}
export default Orders;