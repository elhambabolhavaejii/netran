import { Component } from "react";

interface IProps { }

interface IState {
  groupChangeOptions: any;
  groupChangeSelectedOption:any,
  loading:boolean;
  platformDropdownOpen:boolean;
  users:Array<any>,
  platformId:any,
  packageId:any,
  platformList:any,
  dateRange:Array<any>,
  usersUuid:Array<string>
  usersId:Array<string>
  search:string;
  updateLoading?:boolean,
  price:number,
  priceOff:number,
  toggleModal:any,
  openPriceModal:boolean,
  openBuyPriceModal:boolean,
  openGroupOperationModal:boolean,
  selectInputValue:any,
  column:Array<any>,
  priceInputAcolOne:string,
  priceInputBcolOne:string,
  priceInputCcolOne:string,
  priceInputDcolOne:string,
  priceInputAcolTwo:string,
  priceInputBcolTwo:string,
  priceInputCcolTwo:string,
  priceInputDcolTwo:string
}

export class PriceList extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      loading:false,
      platformDropdownOpen:false,
      platformId:[],
      platformList:[],
      packageId:[],
      dateRange:[null,null],
      users:[],
      groupChangeOptions: ['تغییر ثابت' ,
      'تغییر درصدی افزایشی' ,
      'تغییر درصدی کاهشی' ,
      'تغییر افزایشی نسبت به D' ,
      'تغییر کاهشی نسبت به D ' ],
      groupChangeSelectedOption:"تغییر ثابت",
      usersUuid:[],
      usersId:[],
      search:"",
      updateLoading:false,
      price:0,
      priceOff:0,
      toggleModal:{status:false,buttonState:""},
      openPriceModal:false,
      openGroupOperationModal:false,
      openBuyPriceModal:false,
      selectInputValue:"",
      column: [ 
        {title:"کد", field:"code"},
        {title: "نام محصول", field: "name" },
        {
          title: "موجودی و خرید",
          field: "leftOver",
        },
        { title: "قیمت", field: "price"},
        {
          title: "تخفیف",
          field: "offPrice"},
        
        ],
      priceInputAcolOne:"",
      priceInputBcolOne:"",
      priceInputCcolOne:"",
      priceInputDcolOne:"",
      priceInputAcolTwo:"",
      priceInputBcolTwo:"",
      priceInputCcolTwo:"",
      priceInputDcolTwo:""

  }
 
}

userChoice = (choice : any) =>{
  this.setState({users: choice})
}
platformSelected= (choice : any) =>{
  this.setState({platformId: choice})
}
packageSelected= (choice : any) =>{
  this.setState({packageId: choice})
}

handleSearch = (event:any) => {
  this.setState({ search: event.currentTarget.value })
}
handleSelect = (selected:any)=>{
console.log("Selected",selected);

}
handleChangeOffPrice = (event:any) =>{
  this.setState({ priceOff: event.currentTarget.value })

}

handleChangePrice = (event:any) =>{
  this.setState({ price: event.currentTarget.value })

}
handleOpenPriceModal = () =>{
this.setState({openPriceModal: true})
}
handleClosePriceModal = () =>{
  this.setState({openPriceModal: false})

}
handleBuyPriceModal = () =>{
this.setState({openBuyPriceModal:true})
}
handleCloseBuyPriceModal = ()=>{
  this.setState({openBuyPriceModal:false})

}
handleOpenGroupOperationModal = () =>{
  this.setState({openGroupOperationModal:true})

}
handleCloseGroupOperationModal = () =>{
  this.setState({openGroupOperationModal:false})

}
handleGroupOperation = () =>{
  console.log("final submission")
}

async search() {
}





async update() {


  
}


async getPlatformListData() {
 
}
}
export default PriceList;
