import { Component } from "react";
import { AppConstants } from "../../core/constants";
import { call_api, parseJSON } from "../../core/service";
// import moment from 'moment';

interface IProps { }

interface IState {
  userList: any;
  loading:boolean;
  platformDropdownOpen:boolean;
  users:Array<any>,
  platformId:any,
  packageId:any,
  platformList:any,
  dateRange:Array<any>,
  packageDateRange:Array<any>,
  usersUuid:Array<string>
  usersId:Array<string>,
  notificationLoading:boolean
  title:string,
  text:string,
  modal:boolean
  
}

export class NotificationController extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      loading:false,
      platformDropdownOpen:false,
      platformId:[],
      platformList:[],
      packageId:[],
      dateRange:[null,null],
      packageDateRange:[null,null],
      users:[],
      userList: [],
      usersUuid:[],
      usersId:[],
      notificationLoading:false,
      title:"",
      text:"",
      modal:false

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


async search() {

}

async getPlatformListData() {
  
}

toggle = () =>  {
  
  const usersIdSelectedList = [];
  for (var i = 0; i < this.state.users.length; i++) {
    usersIdSelectedList.push( this.state.users[i]?.id)
    this.setState({ usersId: usersIdSelectedList })
  }

if(usersIdSelectedList.length > 0){
  this.setState({modal: !this.state.modal})

}else{
  // toast.error(" یوزرهای مورد نظر را وارد کنید");
}

}



async sendNotif() {



}


}
export default NotificationController;
