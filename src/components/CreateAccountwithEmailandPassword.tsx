import auth from '@react-native-firebase/auth';
export const CreateAccountwithEmailandPassword = ( { email, password }: any ) =>
{
    return auth.CreateUserwithEmailandPassword( email, password )



}
