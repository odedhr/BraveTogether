import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import SignUpForm from "./SignUpForm";
import { Store } from "../../store/storeTypes";
import { registerUserRequset } from "../../actions/usersAction";
const mapStateToProps = (state: Store) => ({});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      registerUserRequset,
    },
    dispatch
  );

export type SignUpFormProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
