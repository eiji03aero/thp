import { Dispatch } from "redux";
import { connect } from "react-redux";

import { RootStoreState } from "../modules";
import { BootAppPage } from "../pages/BootAppPage";

const mapStateToProps = ({ system }: RootStoreState) => ({
  isBooting: system.isBooting,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export const BootAppPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BootAppPage);
