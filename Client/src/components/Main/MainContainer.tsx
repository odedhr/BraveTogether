import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Main from "./Main";
import { Store } from "../../store/storeTypes";
import { selectCategory } from "../../actions/entitiesAction";
const mapStateToProps = (state: Store) => {
  console.log(state);
  return {
    categories: state.entities.categories,
    selectedCategories: state.entities.selectedCategory,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      selectCategory,
    },
    dispatch
  );

export type MainProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps, mapDispatchToProps)(Main);
