import User from "../models/User";

class AuthRepository {
  async userSingIn(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email: email });
    return user;
  }
}

const authRepository = new AuthRepository();
export default authRepository;
