import { Component } from "react";

interface IProps { }

interface IState {
 tab:number;
}

export class FaqController extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
     tab:0,
  }
}
 
}
export default FaqController;
