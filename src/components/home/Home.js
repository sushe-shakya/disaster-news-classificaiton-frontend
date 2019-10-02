import React from "react";
import * as newsService from "../../services/news";
import "react-table/react-table.css";
import ReactTable from "react-table";
import Select from "react-select";
import Spinner from "../common/Spinner";
import swal from 'sweetalert';

const options = [
    { value: "hydrological", label: "Hydrological" },
    { value: "manmade", label: "Manmade" },
    { value: "meteorological", label: "Meteorological" },
    { value: "biological", label: "Biological" },
    { value: "geophysical", label: "Geophysical" },
    { value: "climatological", label: "Climatological" },

];
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedOption: null,
            isRequesting: false
        };
    }

    componentDidMount() {
        this.fetchAllData();
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    fetchAllData = async () => {
        this.setState({
            isRequesting: true
        });
        try {
            const response = await newsService.fetchNews();

            this.setState({ data: response.data, isRequesting: false });
        } catch (error) {
            this.setState({
                isRequesting: false
            });
        }
    };

    buildColumns() {
        return [
            {
                // Header: () => <strong>More</strong>,
                Header: <h2>News</h2>,
                accessor: "news",
                resizable: false,
                sortable: false,
                minWidth: 300,
                className: "",
                headerClassName: "no-sort",
                Cell: props => <span>{props.value}</span>
            },
            {
                Header: <h2>Date</h2>,
                accessor: "date",
                resizable: false,
                minWidth: 80,
                sortable: false,
                headerClassName: "no-sort",
                Cell: props => <span>{props.value}</span>
            },
            {
                Header: <h2>Link</h2>,
                accessor: "link",
                resizable: false,
                minWidth: 100,
                sortable: false,
                headerClassName: "no-sort",
                Cell: e =><a href={e.value}> {e.value} </a>
            },
            {
                Header: <h2>Disaster Type</h2>,
                accessor: "disasterType",
                resizable: false,
                minWidth: 100,
                sortable: false,
                headerClassName: "no-sort"
            }

        ];
    }

    filterNews = async () => {
        console.log("im here", this.state.selectedOption.value);
        this.setState({
            isRequesting: true
        });
        try {
            // const data = {
            //     disasterType: this.state.selectedOption.value
            // };
            const data = this.state.selectedOption.value;
            const response = await newsService.filterNews(data);

            this.setState({ data: response.data, isRequesting: false });
        } catch (error) {
            console.log(error)
            swal("No news under this category")
            this.setState({
                isRequesting: false
            });
        }
    };

    render() {
        // if (this.state.isRequesting) {
        //     return <Spinner />;
        // }

        return (
            <div className="container">
                {this.state.data.length > 0 && (
                    <React.Fragment>
                        <div className="form-group">
                            <label className="form-group__label form-group__label--block">
                                Targeted area
                            </label>

                            <Select
                                value={this.state.selectedOption}
                                onChange={this.handleChange}
                                options={options}
                            />
                            <div className="Popup__inner__footer">
                                <button
                                    className="btn btn--blue"
                                    onClick={this.filterNews}
                                >
                                    Filter
                                </button>
                            </div>
                        </div>
                        <ReactTable
                            data={this.state.data}
                            columns={this.buildColumns()}
                            showPagination={true}
                            defaultPageSize={15}
                            filterable={false}
                            pageSizeOptions={[5, 10, 15, 20]}
                        />
                        {/* <div className="block hidden-md">
                            <div className="block__title">
                                <h2>asasas</h2>
                            </div>
                            <div className="block__content">
                                <ReactTable
                                    data={this.state.data}
                                    columns={this.buildColumns()}
                                    showPagination={true}
                                    defaultPageSize={15}
                                    filterable={true}
                                    pageSizeOptions={[5, 10, 15, 20]}
                                />
                            </div>
                        </div> */}
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default Home;
