import SubscriptionController from "../../controllers/subscription_controller";
import { Header } from "../../components/header";
import { LoadingSpinner } from "../../components";
import { VitrinCard } from "../../components";
class Subscription extends SubscriptionController {
  componentDidMount() {
    this.getPlatformData();
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className="vitrin">
        <Header isActive="isSubscription"/>
        {this.state.loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <h1 className="vitrin-title"> ویترین </h1>
          
           <div className="packages-list-container">
           <VitrinCard details={{name:"na",description:"de",period:"pe" , features :["salam","hi"]}} 
                onClick={() => this.payment(2)}
                loadingPayment={this.state.loadingPayment && 2 === this.state.packageId}/>
           </div>

          </>
        )}

      </div>
    );
  }
}

export default Subscription;
