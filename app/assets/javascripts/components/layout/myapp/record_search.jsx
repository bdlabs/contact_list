class RecordSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onFind: this.props.onFind,
        }

        this.searchRecord = this.searchRecord.bind(this);
    }

    searchRecord(event) {
        this.state.onFind(event.target.value);
    }

    render() {
        return (
            <div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label" htmlFor="">Find</label>
                    <div className="col-lg-10">
                        <input type="text" onChange={this.searchRecord}/>
                    </div>
                </div>
            </div>
        )
    }
}