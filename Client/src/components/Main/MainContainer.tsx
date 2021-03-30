import {connect} from 'react-redux'
import {bindActionCreators,Dispatch} from "redux"
import Main from './Main'
import {Store} from '../../store/storeTypes'
const mapStateToProps = (state:Store)=>({});
const mapDispatchToProps = (dispatch:Dispatch)=>bindActionCreators({},dispatch)

export type MainProp = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export default connect(mapStateToProps,mapDispatchToProps)(Main)