import status from '../constants/status';

export function getPrettyName(statusId) {
  switch (statusId) {
    case status.pending.id:
      return status.pending.pretty;

    case status.active.id:
      return status.active.pretty;

    case status.inactive.id:
      return status.inactive.pretty;

    case status.rejected.id:
      return status.rejected.pretty;

    default:
      return status.pending.pretty;
  }
}
