import { Component } from 'react';

interface IProps {

}

interface IState {
    loading?: boolean,
    step:number,
    name:string,
    activeCheckBox:boolean,
    options:any
    series:any
}

export class ComponentsController extends Component<IProps, IState> {
    state: IState = {
        loading: false,
      step:0,
      name:"",
    activeCheckBox:false,
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      fill: {
          colors: ['#3ecbae']
        }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
    };

    handleLogin = () => { 

    }

    activeCheckBox = () => {
      this.setState({ activeCheckBox: !this.state.activeCheckBox })
      }
}
export default ComponentsController;