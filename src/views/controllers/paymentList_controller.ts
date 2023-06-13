import { Component } from "react";

interface IProps { }

interface IState {
  PaymentList: any;
  loading:boolean;
}

export class PaymentController extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      PaymentList: [],
      loading:false,
  }
}
 
 
  
}
export default PaymentController;
