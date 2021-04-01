import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Main from "./Main";
import { Store } from "../../store/storeTypes";
import { selectCategory } from "../../actions/entitiesActions";
import { convertAddressToLocationThenCreateEvent, getAllEvents } from "../../actions/eventsActions";
import { getAllHeroesRequest } from "../../actions/entitiesActions";
const mapStateToProps = (state: Store) => {
  return {
    categories: state.entities.categories,
    selectedCategories: state.entities.selectedCategory,
    managerSignedUp: !state.user.is_manager && state.user.token == "",
    managerLoggedIn: state.user.is_manager && state.user.token,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getAllHeroesRequest,
      selectCategory,
      convertAddressToLocationThenCreateEvent,
      getAllEvents,
    },
    dispatch
  );

export type MainProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(Main);
