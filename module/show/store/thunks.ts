import { AppThunk } from "../../../common/store";
import { ShowI } from "../types/show.interface";
import { addNewShow } from "./slice";

export const selectNewShow =
  ({ show }: { show: ShowI }): AppThunk =>
  async (dispatch) => {
    await dispatch(addNewShow({ show }));
  };
