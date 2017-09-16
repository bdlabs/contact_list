class DataRecord extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <span>
                <b>Id:</b> {this.props.inputData.id}&nbsp;
                <b>Name:</b> {this.props.inputData.name}&nbsp;
                <b>Surname:</b> {this.props.inputData.surname}&nbsp;
                <b>Email:</b> {this.props.inputData.email}&nbsp;
                <b>Phone:</b> {this.props.inputData.phone}
            </span>
        )
    }
}