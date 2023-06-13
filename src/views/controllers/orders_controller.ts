import { Component } from 'react';

interface IProps {

}
interface IState {
    loading?: boolean,
    search: string,
    openOrderModal:boolean,
    openLinkModal:boolean,
    orderStatusDropDown:Array<string>,
    selectedOrderStatusDropDown:string,
}

export class OrdersController extends Component<IProps, IState> {
    state: IState = {
        loading: false,
        search:"",
        openOrderModal:false,
        openLinkModal:false,
        orderStatusDropDown:['در حال سفارش' ,
        'در حال پردازش' ,
        'در حال ارسال' ,
        'در حال آماده سازی' ,
        'تحویل شده',
        'بازگشت خورده',
        'لغو شده' ],
        selectedOrderStatusDropDown:""

    }
    handleSearch = (event:any) => {
      this.setState({ search: event.currentTarget.value })
    }
    handleSelect = (selected:any)=>{
      console.log("Selected",selected);
      
      }
    handleOrderModal = ()=>{
        this.setState({openOrderModal: true})
        console.log("ghfghjf");
        
    }
    handleCloseOrderModal = ()=>{
      this.setState({openOrderModal: false})

    }
    handleLinkModal = () =>{
      this.setState({openLinkModal: true})
    }
    handleCloseLinkModal = () =>{
      this.setState({openLinkModal: false})

    }
}
    
    
export default OrdersController;