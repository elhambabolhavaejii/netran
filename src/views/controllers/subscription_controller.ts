import { Component } from "react";

interface IProps { }

interface IState {
  PlatformList: any;
  loading:boolean;
  loadingPayment:boolean;
  isActive?:string
  packageId?:number
}

export class SubscriptionController extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      PlatformList: [],
      loading:false,
  loadingPayment:false,
  isActive:"",
  packageId:-1

  }
}
 
  async getPlatformData() {
    
}

async payment(packageid:number) {
  this.setState({ loadingPayment: true })
  this.setState({ packageId: packageid })
  
}
  
}
export default SubscriptionController;
