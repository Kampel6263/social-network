import { sendMassageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMassageActionCreator: (newMessageBody) =>{
      dispatch(sendMassageActionCreator(newMessageBody));
    }
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);
