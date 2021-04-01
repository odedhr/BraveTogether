import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import DropDownMenu from "./DropDownMenu";
import { Store } from "../../store/storeTypes";
import { registerUserRequset } from "../../actions/usersAction";
const mapStateToProps = (state: Store) => ({
  managerSignedUp: !state.user.is_manager && state.user.token == "",
  managerLoggedIn: state.user.is_manager && state.user.token,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      registerUserRequset,
    },
    dispatch
  );

export type DropDownMenuProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);
