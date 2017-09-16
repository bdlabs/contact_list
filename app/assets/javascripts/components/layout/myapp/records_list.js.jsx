class RecordsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            records: []
        }

        this.addRecord = this.addRecord.bind(this);
        this.delRecord = this.delRecord.bind(this);

        this.props.setChild(this);

        this.getRecords();
    }

    getRecords() {
        axios.get(`/api/contact`)
            .then(res => {
                for (let i in res.data) {
                    let record = {
                        id: res.data[i].id,
                        name: res.data[i].name,
                        surname: res.data[i].surname,
                        email: res.data[i].email,
                        phone: res.data[i].phone,
                    }
                    this.addRecord(record);
                }
            });
    }

    addRecord(record) {
        var recordTmp = {
            id: record.id,
            name: record.name,
            surname: record.surname,
            email: record.email,
            phone: record.phone,
        };

        var records = this.state.records.slice()
        records.push(recordTmp);

        this.setState({
            records: records
        });
    }

    clearAllRecords() {
        this.setState({
            records: []
        });
    }

    delRecord(event) {
        if (event.target) {
            let id = event.target.getAttribute("data-value");
            let element = event.target.parentElement;
            axios.delete(`/api/contact/` + id, {
                data: {
                    authenticity_token: window._token
                }
            })
                .then(res => {
                    if (res.data && res.data.status === "ok") {
                        element.remove();
                    }
                });
        }

        return false;
    }

    render() {
        var rows = [];
        for (var i = 0; i < this.state.records.length; i++) {
            let record = this.state.records[i];
            rows.push(
                <div className="record">
                    <DataRecord inputData={record}/>
                    &nbsp;
                    &nbsp;
                    <a data-value={record.id} onClick={this.delRecord}>Delete</a>
                </div>
            );
        }

        return (
            <div>
                {rows}
            </div>
        )
    }
}

//<Delete onClick={this.handleClick}/>
const Delete = ({onClick}) => {
    return (
        <a name="home" onClick={onClick}>
            <span>Delete</span>
        </a>
    );
}