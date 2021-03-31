import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import TeacherCardForm from "./TeacherCardForm";
import { Store } from "../../store/storeTypes";
import { convertAddressToLocationThenCreateEvent, postNewEvent } from "../../actions/eventsActions";
import { createHeroRequset } from "../../actions/usersAction";
const mapStateToProps = (state: Store) => {
  return {
    categories: state.entities.categories,
    newEvent: state.events.newEvent,
    user: state.user,
    hero: state.hero,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { convertAddressToLocationThenCreateEvent, postNewEvent, createHeroRequset },
    dispatch
  );

export type TeacherCardFormProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(TeacherCardForm);
