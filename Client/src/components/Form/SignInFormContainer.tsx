import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import SignInForm from "./SignInForm";
import { Store } from "../../store/storeTypes";
import { tokenRequest, loginRequest } from "../../actions/usersAction";
const mapStateToProps = (state: Store) => ({
  token: state.user.token,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      tokenRequest,
      loginRequest,
    },
    dispatch
  );

export type SignInFormProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
