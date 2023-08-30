export const mapFromApiToVm = (user: UserApi): UserVm => ({
  isSigned: false,
  name: user.name,
  password: user.password,
  time: user.time,
  id: user._id,
});
