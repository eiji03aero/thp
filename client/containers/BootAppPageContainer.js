import { connect } from "react-redux";

import { BootAppPage } from "../pages/BootAppPage.js";
import * as actions from "../modules/System.js";

const mapStateToProps = ({ system }) => ({
  isBooting: system.isBooting,
});

const mapDispatchToProps = (dispatch) => ({

});

export const BootAppPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BootAppPage);
