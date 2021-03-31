import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import TeacherCardForm from "./TeacherCardForm";
import { Store } from "../../store/storeTypes";
import { convertAddressToLocation } from "../../actions/usersAction";
const mapStateToProps = (state: Store) => {
  return {
    categories: state.entities.categories,
    newEvent: state.events.newEvent,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ convertAddressToLocation }, dispatch);

export type TeacherCardFormProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(TeacherCardForm);
