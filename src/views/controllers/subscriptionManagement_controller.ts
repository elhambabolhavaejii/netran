import { Component } from "react";
import { AppConstants } from "../../core/constants";
import { call_api, parseJSON } from "../../core/service";

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
  usersUuid:Array<string>
  usersId:Array<string>
  subscriptionTime:number;
  updateLoading?:boolean
  
}

export class SubscriptionManagementController extends Component<IProps, IState> {

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
      userList: [],
      usersUuid:[],
      usersId:[],
      subscriptionTime:0,
      updateLoading:false

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

handleChangeTime = (event:any) => {
  this.setState({ subscriptionTime: event.currentTarget.value })
}



async search() {
}





async update() {


  
}


async getPlatformListData() {
 
}
}
export default SubscriptionManagementController;
