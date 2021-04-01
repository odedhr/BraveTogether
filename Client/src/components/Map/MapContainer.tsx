import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Map from "./Map";
import { Store } from "../../store/storeTypes";
import { createNewEvent } from "../../actions/eventsActions";
type OwnProps = {
  openModal: () => void;
};
const mapStateToProps = (state: Store) => {
  return {
    events: state.events.events,
    selectedCategory: state.entities.selectedCategory,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      createNewEvent,
    },
    dispatch
  );

export type MapProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;
export default connect(mapStateToProps, mapDispatchToProps)(Map);
