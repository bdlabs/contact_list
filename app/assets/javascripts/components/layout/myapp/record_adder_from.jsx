class RecordAdderFrom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "alibaba",
            onAddRecord: this.props.onAddRecord,
            record: {
                name: 'default_name',
                surname: 'default_surname',
                email: 'default_email',
                phone: 'default_phone',
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        let record = this.state.record;
        record[event.target.name] = event.target.value;

        this.setState({record: record});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.onAddRecord(this.state.record);
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label" htmlFor="">Imię</label>
                    <div className="col-lg-10">
                        <input type="text" name="name" value={this.state.record.name}
                               onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label" htmlFor="">Nazwisko</label>
                    <div className="col-lg-10">
                        <input type="text" name="surname" value={this.state.record.surname}
                               onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label" htmlFor="">Email</label>
                    <div className="col-lg-10">
                        <input type="text" name="email" value={this.state.record.email}
                               onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 col-form-label" htmlFor="">Telefon</label>
                    <div className="col-lg-10">
                        <input type="text" name="phone" value={this.state.record.phone}
                               onChange={this.handleChange}/>
                    </div>
                </div>
                <input type="submit" className="btn btn-succes" value="Dodaj"/>
            </form>
        )
    }
};
