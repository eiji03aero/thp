import { connect } from "react-redux";

import { BootAppPage } from "../pages/BootAppPage";
import * as actions from "../modules/System";

const mapStateToProps = ({ system }) => ({
  isBooting: system.isBooting,
});

const mapDispatchToProps = (dispatch) => ({
});

export const BootAppPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BootAppPage);
