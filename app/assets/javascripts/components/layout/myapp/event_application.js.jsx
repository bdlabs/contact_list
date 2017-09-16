class EventApplication extends React.Component {

    constructor(prop) {
        super(prop);

        this.state = {
            siteLeftId: "leftid"
        }

        this.setChild = this.setChild.bind(this);
    }

    setChild(child) {
        this.siteleft = child;
    }

    searchRecords(searchValue) {
        let params = {};
        params.query = searchValue;
        params.authenticity_token = window._token;

        axios.post(`/api/contact/find`, params)
            .then(res => {
                this.siteleft.clearAllRecords();
                for(let i in res.data.result){
                    this.siteleft.addRecord(res.data.result[i]);
                }
            });
    }

    addNewRecord(formImputsValue) {
        let params = formImputsValue;
        params.authenticity_token = window._token;

        axios.post(`/api/contact`, params)
            .then(res => {
                this.siteleft.addRecord(res.data.result);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <RecordsList setChild={this.setChild}></RecordsList>
                    </div>
                    <div className="col-lg-6">
                        <RecordSearch onFind={(r) => this.searchRecords(r)}></RecordSearch>
                        <RecordAdderFrom onAddRecord={(r) => this.addNewRecord(r)}></RecordAdderFrom>
                    </div>
                </div>
                <div className="mb-5"></div>
            </div>
        )
    }
}
