import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Main from "./Main";
import { Store } from "../../store/storeTypes";
import { selectCategory } from "../../actions/entitiesActions";
import { convertAddressToLocation } from "../../actions/usersAction";
const mapStateToProps = (state: Store) => {
  return {
    categories: state.entities.categories,
    selectedCategories: state.entities.selectedCategory,
    managerSignedUp: state.user.is_manager && state.user.token == "",
    managerLoggedIn: state.user.is_manager && state.user.token,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      selectCategory,
      convertAddressToLocation,
    },
    dispatch
  );

export type MainProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(Main);
