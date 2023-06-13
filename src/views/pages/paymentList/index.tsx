import PaymentListController from "../../controllers/paymentList_controller";
import { Header } from "../../components/header";
import { LoadingSpinner } from "../../components";
import {
    Row, Col,
    Card,
} from 'reactstrap';
class PaymentList extends PaymentListController {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="profile">
                <h1 className="profile-title">پرداخت ها </h1>
                <Header isActive="isPayment" />
                {this.state.loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="custom-tabel">
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <div className="tabel-header">
                                        <span className="title">
                                            لیست پرداخت ها
                                        </span>
                                    </div>
                                    {this.state.loading ? <div className="spinner-container">
                                        <div className="loading-spinner"></div>
                                    </div>
                                        :


                                        <div className="table-responsive">
                                            <table className="align-middle mb-0 table table-borderless table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="text-right">شناسه</th>
                                                        <th>عنوان</th>
                                                        <th>قیمت</th>
                                                        <th>تاریخ</th>

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td className="text-right text-muted">1</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">name</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">5000</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">2002/01/02</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td className="text-right text-muted">1</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">name</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">5000</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">2002/01/02</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    }
                                </Card>
                            </Col>
                        </Row>

                    </div>
                )}

            </div>
        );
    }
}

export default PaymentList;
